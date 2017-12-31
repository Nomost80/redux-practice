import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/userActions';
import Title from '../common/Title';
import SignUpFrom from './SignUpForm';

class SignUpPage extends React.Component {
  render() {
    return (
      <div>
        <Title content="Inscription" />
        <SignUpForm />
      </div>
    );
  }
}

SignUpPage.propTypes = {
  isFetching: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  const { isFetching } = state.auth;
  return { isFetching };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);