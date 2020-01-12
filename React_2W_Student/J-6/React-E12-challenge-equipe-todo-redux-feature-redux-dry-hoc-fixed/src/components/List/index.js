import React from 'react';
import PropTypes from 'prop-types';

import Task from 'src/components/Task';
import './list.sass';

import store from 'src/store';

class Tasks extends React.Component {
  // We must sync with the global state asap, before the initial render, so that
  // we fetch an initial tasks list for rendering.
  // As the constructor is called before componentDidMount, before the initial
  // render, it's the right place to do so:
  // - constructor()
  // - componentWillMount (soon to be DEPRECATED, do not use)
  // - render()  // initial rendering / mount
  // - componentDidMount() // calls this.setState
  //   - render() // 2d rendering triggered by this.setState()
  constructor(props) {
    super(props);
    // Impossible to use this.updateState(), because the constructor cannot run
    // this.setState for the componenent hasn't rendered yet; hence:
    this.state = {
      tasks: store.getState().tasks
    };
  }

  /**
   * Subscribing to the store, providing a callback to react to any global state
   * edits in the future.
   * Note: code is not written in the constructor, because the callback triggers
   * this.setState() which means we must ensure the initial rendering has
   * occured. Safest place to do so is within componentDidMount.
   */
  componentDidMount() {
    store.subscribe(this.updateState);
  }

  // Sync local state with global state, and trigger a refresh.
  updateState = () => {
    const { tasks } = store.getState();
    this.setState({ tasks });
  }

  /**
   * Selector: orders tasks based on some criteria.
   */
  orderedTasks = () => {
    const { tasks } = this.state;
    return [
      ...tasks.filter(t => !t.done && t.favorite),
      ...tasks.filter(t => !t.done && !t.favorite),
      ...tasks.filter(t => t.done),
    ];
  }

  render() {
    return (
      <ul className="todo-list">
        {
          this.orderedTasks().map(task => (
            <Task key={task.id} {...task} />
          ))
        }
      </ul>
    );
  }
};

export default Tasks;
