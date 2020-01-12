import React from 'react';

import './header.sass';

/**
 * Composant de présentation : au plus proche du HTML final,
 * il s'occupe surtout de l'affichage final dans la page.
 */
const Header = ({ axel: categories, className, reactToClick }) => (
  // transpilé en : React.createElement('header', {className: 'blog-header'}, 'salut header');
  <header className={`blog-header content--centered ${className}`}>
    {
      categories.map(category => (
        <a href="#" className = "link" onClick={reactToClick(category)}>{category}</a>
      ))
    }
  </header>
);

export default Header;
