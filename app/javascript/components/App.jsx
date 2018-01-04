import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions/userActions';
import Navbar from './common/Navbar';
import MainRouter from './common/MainRouter';

const App = props => (
  <div>
    <Navbar isAuthenticated={props.isAuthenticated} logout={props.actions.logout} />
    <MainRouter isAuthenticated={props.isAuthenticated} />
  </div>
);

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const { isAuthenticated } = state.auth;
  return { isAuthenticated };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
