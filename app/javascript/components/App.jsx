import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/userActions';
import Header from './common/Header';
import MainRouter from './common/MainRouter';

const App = () => (
  <div>
    <Header isAuthenticated={this.props.isAuthenticated} logout={this.props.actions.logout} />
    <MainRouter isAuthenticated={this.props.isAuthenticated} />
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

export default connect(mapStateToProps, mapDispatchToProps())(App);
