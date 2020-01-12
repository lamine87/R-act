import React from 'react';
import PropTypes from 'prop-types';

import './counter.sass';

/**
 * Composant de présentation, qui affiche le nombre de tâches en cours.
 */
const Counter = ({ count }) => {
  let message = '';
  switch (count) {
    case 0:
      message = 'Aucune tâche en cours';
      break;
    case 1:
      message = 'Une tâche en cours';
      break;
    default:
      message = `${count} tâches en cours`;
  }

  return (
    <div className="todo-counter">
      {message}
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number
};

export default Counter;
