import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../actions/user';
import GameDash from './GameDash';

class Home extends Component {

  componentDidMount() {
    this.props.getUser()
  }

  render() {
    const { user } = this.props
    return (
      <div>
        <GameDash user={user.currentUser}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors
});


export default connect(mapStateToProps,{ getUser })(withRouter(Home))