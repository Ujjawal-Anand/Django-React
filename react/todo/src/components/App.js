import React from 'react';

import TodoList from './TodoList'
import TodoCreate from'./TodoCreate'

const App = () => {
  return (
    
    <div className="ui container">
      <h2 class="ui center aligned icon header">
      <i class="circular clipboard outline icon"></i>
        Todo
      </h2>
      <div><TodoCreate /></div>
      <div><TodoList /></div>
    </div>
   
  )
};

export default App;