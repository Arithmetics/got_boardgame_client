import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Button, Card, Elevation } from "@blueprintjs/core";


class GameIcon extends Component {

  playerCount = () => {
    return this.props.game.players.length
  }

  render() {
    const { game } = this.props
    return (
      <Card interactive={true} elevation={Elevation.TWO} className="gameicon-card">
      <h5>{game.name} - ({this.playerCount()}/6)</h5>
      <p>Card content</p>
      <Link to={`/game/${game.ID}`}><Button>Go to Game</Button></Link> 
  </Card>
    )
  }
}

export default class GameDash extends Component {
  
  render() {
    const { user } = this.props
    const joinedGames = user && user.joinedGames
    const completedGames = joinedGames && joinedGames.filter(game => !game.active)
    const pendingGames = joinedGames && joinedGames.filter(game => game.players.length < 6 && game.active)
    const startedGames = joinedGames && joinedGames.filter(game => game.players.length === 6 && game.active)

    return(
      <div className="gamedash-container">
        <div className="gamedash-top-button-container">
          <Link to="/game/new"><Button className="bp3-intent-success" icon="add">Create New Game</Button></Link>
        </div>
        <div className="gamedash-column">
          <h3 className="bp3-heading gamedash-header">Pending Games:</h3>
          {pendingGames && pendingGames.map(game => {
            return(<GameIcon key={game.ID} game={game} />)
          })}
        </div>
        <div className="gamedash-column">
          <h3 className="bp3-heading gamedash-header">In Progress Games:</h3>
          {startedGames && startedGames.map(game => {
            return(<GameIcon key={game.ID} game={game} />)
          })}
        </div>
        <div className="gamedash-column">
          <h3 className="bp3-heading gamedash-header">Completed Games:</h3>
          {completedGames && completedGames.map(game => {
            return(<GameIcon key={game.ID} game={game} />)
          })}
        </div>
      </div>
    )
  }
}