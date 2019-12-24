import React from 'react';

import TodoList from './TodoList'
import TodoCreate from'./TodoCreate'

const App = () => {
  return (
    
    <div className="todo-list">
      <h2 className="ui center aligned icon header">
      <i className="circular clipboard outline icon"></i>
        Todo
      </h2>
      <div><TodoCreate /></div>
      <div><TodoList /></div>
    </div>
   
  )
};

export default App;