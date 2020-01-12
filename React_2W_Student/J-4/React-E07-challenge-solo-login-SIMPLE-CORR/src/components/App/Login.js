import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';

const Login = ({
  email,
  password,
  changeInput,
  onChangeView,
}) => (
  <div className="app-login">
    <h1 className="app-title">Connexion</h1>
    <p className="app-desc">Renseignez votre adresse e-mail et votre mot de passe pour accéder à votre compte.</p>
    <form className="form">
      <Field
        name="email"
        placeholder="Adresse e-mail"
        onChange={changeInput}
        value={email}
      />
      <Field
        type="password"
        name="password"
        placeholder="Mot de passe"
        onChange={changeInput}
        value={password}
      />
      <button className="form-submit form-submit--login">
        Se connecter
      </button>
      <a
        className="app-link"
        onClick={onChangeView('forgottenPassword')}
      >
        Mot de passe oublié
      </a>
    </form>
  </div>
);

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeInput: PropTypes.func.isRequired,
  onChangeView: PropTypes.func.isRequired,
};

export default Login;
