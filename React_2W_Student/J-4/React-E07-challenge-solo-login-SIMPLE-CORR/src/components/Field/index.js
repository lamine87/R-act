import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './field.sass';

const Field = ({
  name,
  placeholder,
  type,
  className,
  value,
  onChange,
}) => {
  const fieldClassNames = classNames(
    'app-field',
    {
      'app-field--has-value': value !== '',
    },
  );

  return (
    // Un input contrôlé (par React).
    <div className={fieldClassNames}>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        className="app-field-input"
        value={value} // partie MV du modèle MV/VM
        onChange={onChange} // partie VM du modèle MV/VM
      />
      {/* eslint-disable jsx-a11y/label-has-for */}
      <label
        htmlFor={name}
        className="app-field-label"
      >
        {placeholder}
      </label>
    </div>
  );
};

Field.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'num', 'email', 'submit']),
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Field.defaultProps = {
  type: 'text',
  className: 'app-field',
  value: '',
};

export default Field;
