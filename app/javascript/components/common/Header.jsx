import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../routes';

const Header = () => (
  <div className="ui fixed inverted menu">
    <div className="ui container">
      <div className="header item">
        <Link to={routes.home}>KM Manager</Link>
      </div>
      <div className="item">
        <Link to={routes.home}>Home</Link>
      </div>
      <div className="item">
        <Link to={routes.rides}>Rides</Link>
      </div>
    </div>
  </div>
);

export default Header;
