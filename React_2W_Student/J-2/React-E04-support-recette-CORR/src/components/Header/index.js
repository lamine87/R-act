import React from 'react';
import PropTypes from 'prop-types';

import './header.sass';

// Stateless component - composant React sans état interne
// Il est complètement paramétré depuis l'extérieur par ses props.
// Le composant ne prend aucune décision à propos des données, et ne s'occupe
// que de les afficher.
const Header = ({ title, author, difficulty, thumbnail }) => (
  <div className="header">
    <img
      src={thumbnail}
      alt={`${title}-logo`}
      className="header-image"
    />
    <div className="header-content">
      <h1 className="header-title">{title}</h1>
      <ul className="header-infos">
        <li className="header-info header-author">{author}</li>
        <li className="header-info header-difficulty">{difficulty}</li>
      </ul>
    </div>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired
};

export default Header;
