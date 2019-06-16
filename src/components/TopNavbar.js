import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';

import {
  Alignment,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading
  } from "@blueprintjs/core";

class TopNavbar extends Component {

  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  render() {
    const {isAuthenticated} = this.props.auth;

    const authLinks = (
      <a href="" className="nav-link" onClick={this.onLogout}>
        <button className="bp3-button bp3-minimal bp3-icon-log-out topnav-btn-nodeco">Logout</button>
      </a>
    )

    const guestLinks = (
      <NavbarGroup className="bp3-align-right">
        <Link className="nav-link" to="/register">
          <button className="bp3-button bp3-minimal bp3-icon-new-object topnav-btn-nodeco">Sign Up</button>
        </Link>
        <Link className="nav-link" to="/login">
          <button className="bp3-button bp3-minimal bp3-icon-log-in topnav-btn-nodeco">Sign In</button>
        </Link>
      </NavbarGroup>
    )

    return (
      <Navbar className={Classes.DARK}>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>Game of Thrones</NavbarHeading>
          <Link className="" to="/"><button className="bp3-button bp3-minimal bp3-icon-home topnav-btn-nodeco">Home</button></Link>
        </NavbarGroup>
        <NavbarGroup>
          {isAuthenticated ? authLinks : guestLinks}
        </NavbarGroup>
      </Navbar>
    )
  }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(TopNavbar));