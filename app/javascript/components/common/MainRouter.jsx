import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as routes from '../../routes';
import Home from '../home/HomePage';
import NoMatch from './NoMatch';
import RideRouter from '../ride/RideRouter';
import SignUpPage from '../authentication/SignUpPage';
import LoginPage from '../authentication/LoginPage';

const containerStyle = {
  marginTop: '7em',
};

const MainRouter = ({ isAuthenticated }) => (
  <div className="ui main text container" style={containerStyle}>
    <Switch>
      <Route exact path={routes.home} component={Home} />
      <Route exact path={routes.signUp} component={SignUpPage} />
      <Route exact path={routes.login} component={LoginPage} />
      <Route path={routes.rides} component={RideRouter} />
      { isAuthenticated &&
        <Route component={NoMatch} />
      }
    </Switch>
  </div>
);

MainRouter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default MainRouter;
