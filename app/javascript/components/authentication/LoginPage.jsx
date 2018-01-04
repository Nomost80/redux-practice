import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/userActions';
import * as types from '../../actions/actionTypes';
import * as routes from '../../routes';
import Title from '../common/Title';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: Object.assign({}, props.user),
    };

    this.updateUserState = this.updateUserState.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  updateUserState(event) {
    const field = event.target.name;
    const user = Object.assign({}, this.state.user);
    user[field] = event.target.value;
    return this.setState({ user });
  }

  loginUser(event) {
    event.preventDefault();
    this.props.actions.login(this.state.user);
  }

  render() {
    if (this.props.status === types.LOGIN_SUCCESS) { return <Redirect to={routes.home} />; }
    return (
      <div>
        <Title content="Connexion" />
        <LoginForm
          user={this.state.user}
          onChange={this.updateUserState}
          onSubmit={this.loginUser}
          saving={this.props.status === types.LOGIN_REQUEST}
          errors={this.props.errors}
        />
      </div>
    );
  }
}

LoginPage.propTypes = {
  status: PropTypes.string.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const { status, errors } = state.auth;
  const user = {
    email: '', password: '',
  };
  return { status, errors, user };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
