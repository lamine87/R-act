import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FaTrashAlt, FaStar } from 'react-icons/fa';

import store from 'src/store';
import { toggleTask, deleteTask, favoriteTask } from 'src/store/actions';
import './task.sass';

class Task extends React.Component {
  // Dispatch a Redux action upon toggling a task.
  onCheckTask = id => () => {
    store.dispatch(toggleTask(id));
  }

  // Dispatch a Redux action upon toggling a task.
  onDelTask = id => () => {
    store.dispatch(deleteTask(id));
  }
  // Dispatch a Redux action upon toggling a task.
  onFavoriteTask = id => () => {
    store.dispatch(favoriteTask(id));
  }

  render() {
    const { id, label, done, favorite } = this.props;
    const currentClassNames = classNames(
      'task',
      {
        'task--done': done,
        'task--favorite': favorite,
      },
    );
    return (
      <li className={currentClassNames}>
        <input type="checkbox" checked={done} onChange={this.onCheckTask(id)}  />
        {/* <i className="fas fa-trash-alt task-trash" onClick={onDelTask(id)}></i> */}
        <FaTrashAlt className="task-delete" onClick={this.onDelTask(id)} />
        <FaStar className="task-favorite" onClick={this.onFavoriteTask(id)} />
        <span className="task-label">{label}</span>
      </li>
    );
  }
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  favorite: PropTypes.bool.isRequired
};

Task.defaultProps = {
  favorite: false
};

export default Task;
