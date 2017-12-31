import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as routes from '../../routes';

const Header = ({ isAuthenticated, logout }) => (
  <div className="ui fixed inverted menu">
    <div className="ui container">
      <div className="header item">
        <Link to={routes.home}>KM Manager</Link>
      </div>
      <div className="item">
        <Link to={routes.home}>Home</Link>
      </div>
      {
        !isAuthenticated &&
        <div className="item">
          <Link to={routes.signUp}>Inscription</Link>
        </div> &&
        <div className="item">
          <Link to={routes.login}>Se connecter</Link>
        </div>
      }
      {
        isAuthenticated &&
        <div className="item">
          <Link to={routes.rides}>Rides</Link>
        </div> &&
        <div className="item">
          <button onClick={logout}>Se déconnecter</button>
        </div>
      }
    </div>
  </div>
);

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

export default Header;
