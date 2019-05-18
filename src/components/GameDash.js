import React, { Component } from 'react';


class GameIcon extends Component {
  render() {
    const { game } = this.props
    return (
      <div className="gameicon-container">
        <h3>{game.name}</h3>
        <h3>{game.started}</h3>
      </div>
    )
  }
}

export default class GameDash extends Component {
  
  render() {
    const { user } = this.props
    const joinedGames = user && user.joinedGames
    console.log(joinedGames)
    return(
      <div className="gamedash-container">
        <div className="gamedash-column">
          <h2>Pending Games:</h2>
          {user && user.joinedGames && user.joinedGames.map(game => {
            return(<GameIcon key={game.ID} game={game} />)
          })}
        </div>
        <div className="gamedash-column">
          <h2>In Progress Games:</h2>
          {user && user.joinedGames && user.joinedGames.map(game => {
            return(<GameIcon key={game.ID} game={game} />)
          })}
        </div>
        <div className="gamedash-column">
          <h2>Completed Games:</h2>
          {user && user.joinedGames && user.joinedGames.map(game => {
            return(<GameIcon key={game.ID} game={game} />)
          })}
        </div>
    </div>
    )
  }
}