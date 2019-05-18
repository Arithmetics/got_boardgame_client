import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getGame } from '../actions/game';


class Game extends Component {
  
  componentDidMount() {
    this.props.getGame(this.props.match.params.id)
  }

  render() {
    return (
      <h1>Game here {JSON.stringify(this.props.match.params)}</h1>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  game: state.game,
  errors: state.errors
});


export default connect(mapStateToProps,{ getGame })(withRouter(Game))