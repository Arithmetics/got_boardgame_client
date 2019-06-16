import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getGame } from '../actions/game';


class Game extends Component {
  
  componentDidMount() {
    this.props.getGame(this.props.match.params.id)
  }

  render() {
    const selectedGame = this.props.game && this.props.game.selectedGame
    const players = (selectedGame && selectedGame.players) || []
    if (selectedGame) {
      return (
        <div>
          <h1>{selectedGame.name}</h1>
          <ul>
            {players.map((player) => {
              return (
                <li>{player.name}</li>
              )
            })}
          </ul>
        </div>
      )
    } else {
      return (
        <div>
          <p>No game found</p>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  user: state.user,
  game: state.game,
  errors: state.errors
});


export default connect(mapStateToProps,{ getGame })(withRouter(Game))