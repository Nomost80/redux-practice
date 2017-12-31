import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../common/form/TextField';
import PasswordField from '../common/form/PasswordField';
import SubmitField from '../common/form/SubmitField';

const SignUpForm = ({ user, onChange, onSubmit, saving }) => (
  <form className="ui form" onSubmit={onSubmit}>
    <div className="two fields">
      <TextField
        name="first_name"
        label="Prénom"
        placeholder="Prénom"
        onChange={onChange}
        value={user.first_name}
      />
      <TextField
        name="last_name"
        label="Nom"
        placeholder="Nom"
        onChange={onChange}
        value={user.last_name}
      />
    </div>
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
    <PasswordField
      name="password_confirm"
      label="Confirmation du mot de passe"
      placeholder="Confirmation du mot de passe"
      onChange={onChange}
      value={user.password_confirm}
    />
    <SubmitField label={saving ? 'Saving' : 'Save'} disabled={saving}/>
  </form>
);

SignUpForm.propTypes = {

};

export default SignUpForm;