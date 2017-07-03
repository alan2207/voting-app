import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

// showing top bar with the options 
class Header extends React.Component {
  renderLinks() {
    if(this.props.authenticated) {
      return [
      <li key={1}><Link to="/createpoll">Create Poll</Link></li>,
      <li key={2}><Link to="/mypolls">My Polls</Link></li>,
      <li key={3}><Link to="/signout">Sign Out</Link></li>
      ]
    } else {
      return [
      <li key={1}><Link to="/signup">Sign Up</Link></li>,
      <li key={2}><Link to="/signin">Sign In</Link> </li>
      ]
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper blue darken-3">
          <Link to="/" className="brand-logo left">Voter</Link >
          <ul id="nav-mobile" className="right">
            <li key={4}><Link to="/about">About</Link></li>
            {this.renderLinks()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);