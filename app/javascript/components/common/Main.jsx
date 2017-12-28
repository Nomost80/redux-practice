import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as routes from '../../routes';
import Home from '../home/HomePage';
import NoMatch from './NoMatch';
import RideRouter from '../ride/RideRouter';

const containerStyle = {
  marginTop: '7em',
};

const Main = () => (
  <div className="ui main text container" style={containerStyle}>
    <Switch>
      <Route exact path={routes.home} component={Home} />
      <Route path={routes.rides} component={RideRouter} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default Main;
