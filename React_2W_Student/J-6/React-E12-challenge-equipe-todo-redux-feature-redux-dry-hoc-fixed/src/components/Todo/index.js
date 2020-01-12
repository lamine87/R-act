import React from 'react';

import Form from 'src/components/Form';
import Counter from 'src/containers/Counter';
import List from 'src/components/List';
import './todo.sass';
console.log(Counter);

const Todo = () => (
  <div className="todo">
    <Form />
    <Counter />
    <List />
  </div>
);

export default Todo;
