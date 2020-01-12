import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';

const ForgottenPassword = ({
  email,
  changeInput,
  onChangeView,
}) => (
  <div className="app-password">
    <a
      className="app-link app-link--back"
      onClick={onChangeView('login')}
    >
      Annuler
    </a>
    <h1 className="app-title">Mot de passe oublié</h1>
    <p className="app-desc">Renseignez votre adresse e-mail et nous vous envoyons un mot de passe tout beau tout neuf.</p>
    <form className="form">
      <Field
        name="email"
        placeholder="Adresse e-mail"
        value={email}
        onChange={changeInput}
      />
      <button className="form-submit">
        Regénérer un mot de passe
      </button>
    </form>
  </div>
);

ForgottenPassword.propTypes = {
  email: PropTypes.string.isRequired,
  changeInput: PropTypes.func.isRequired,
  onChangeView: PropTypes.func.isRequired,
};

export default ForgottenPassword;
