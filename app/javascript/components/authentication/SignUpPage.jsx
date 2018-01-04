import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as types from '../../actions/actionTypes';
import * as actions from '../../actions/userActions';
import * as routes from '../../routes';
import Title from '../common/Title';
import SignUpForm from './SignUpForm';

class SignUpPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: Object.assign({}, props.user),
    };

    this.updateUserState = this.updateUserState.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  updateUserState(event) {
    const field = event.target.name;
    const user = Object.assign({}, this.state.user);
    user[field] = event.target.value;
    return this.setState({ user });
  }

  createUser(event) {
    event.preventDefault();
    this.props.actions.signUp(this.state.user).then(() => {
      toastr.success('User successfully registered !');
    });
  }

  render() {
    if (this.props.status === types.SIGNUP_SUCCESS) { return <Redirect to={routes.login} />; }
    return (
      <div>
        <Title content="Inscription" />
        <SignUpForm
          user={this.state.user}
          onChange={this.updateUserState}
          onSubmit={this.createUser}
          saving={this.props.status === types.SIGNUP_REQUEST}
          errors={this.props.errors}
        />
      </div>
    );
  }
}

SignUpPage.propTypes = {
  status: PropTypes.string.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    password_confirmation: PropTypes.string.isRequired,
  }).isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const { status, errors } = state.signup;
  const user = {
    first_name: '', last_name: '', email: '', password: '', password_confirmation: '',
  };
  return { status, errors, user };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
