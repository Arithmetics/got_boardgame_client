import React, { Component } from 'react';


class GameIcon extends Component {
  render() {
    const { game } = this.props
    return (
      <div>
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
    return(
      <div>
        <h1>Games:</h1>
        {user && user.joinedGames && user.joinedGames.map(game => {
          <GameIcon game={game} />
        })}
      </div>
    )
  }
}