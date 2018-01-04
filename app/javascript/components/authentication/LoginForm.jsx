import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../common/form/TextField';
import PasswordField from '../common/form/PasswordField';
import SubmitField from '../common/form/SubmitField';
import ErrorMessage from '../common/form/ErrorMessage';

const LoginForm = ({
  user, onChange, onSubmit, saving, errors,
}) => (
  <form className="ui form" onSubmit={onSubmit}>
    <ErrorMessage errors={errors} />
    <TextField
      name="email"
      label="Email"
      placeholder="Email"
      onChange={onChange}
      value={user.email}
    />
    <PasswordField
      name="password"
      label="Mot de passe"
      placeholder="Mot de passe"
      onChange={onChange}
      value={user.password}
    />
    <SubmitField label={saving ? 'Saving' : 'Save'} disabled={saving} />
  </form>
);

LoginForm.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LoginForm;
