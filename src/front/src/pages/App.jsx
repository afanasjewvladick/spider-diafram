import React from 'react';
import TaskList from '../components/TaskList';
import TaskListRedux from '../containers/TaskList';
import './App.scss';

const App = () => (
  <div className="app-class">
    <TaskList />
    <TaskListRedux />
  </div>
);

export default App;
