import React, { Component } from 'react';

import { Link } from 'react-router-dom';


class GameIcon extends Component {
  render() {
    const { game } = this.props
    return (
      <div className="gameicon-container">
        <h3>{game.name}</h3>
        <h3>{game.started}</h3>
        <Link to={`/game/${game.ID}`}>Go to Game</Link> 
      </div>
    )
  }
}

export default class GameDash extends Component {
  
  render() {
    const { user } = this.props
    const joinedGames = user && user.joinedGames
    const completedGames = joinedGames && joinedGames.filter(game => !game.active)
    const pendingGames = joinedGames && joinedGames.filter(game => game.players.length < 6)
    const startedGames = joinedGames && joinedGames.filter(game => game.players.length === 6)
    console.log(joinedGames)
    return(
      <div className="gamedash-container">
      <Link to="/game/new">Create New Game</Link>
        <div className="gamedash-column">
          <h2>Pending Games:</h2>
          {pendingGames && pendingGames.map(game => {
            return(<GameIcon key={game.ID} game={game} />)
          })}
        </div>
        <div className="gamedash-column">
          <h2>In Progress Games:</h2>
          {startedGames && startedGames.map(game => {
            return(<GameIcon key={game.ID} game={game} />)
          })}
        </div>
        <div className="gamedash-column">
          <h2>Completed Games:</h2>
          {completedGames && completedGames.map(game => {
            return(<GameIcon key={game.ID} game={game} />)
          })}
        </div>
    </div>
    )
  }
}