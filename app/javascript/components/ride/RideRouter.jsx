import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as routes from '../../routes';
import RidesPage from './RidesPage';
import NewRidePage from './NewRidePage';
import EditRidePage from './EditRidePage';
import NoMatch from '../common/NoMatch';

const RideRouter = ({ match }) => (
  <div>
    <Switch>
      <Route exact path={routes.rides} component={RidesPage} />
      <Route path={match.url + routes.createRide} component={NewRidePage} />
      <Route path={match.url + routes.editRide} component={EditRidePage} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

RideRouter.propTypes = {
  match: PropTypes.object.isRequired,
};

export default RideRouter;
