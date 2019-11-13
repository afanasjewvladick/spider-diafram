// import React from 'react';
import React, { useState } from 'react';
import './TaskList.scss';

const lists = [
  { id: 0, name: 'Test', value: 20 },
];

const TaskList = () => (
  <div className="main-task-list">
    <TaskListHeader />
    <TaskListBody />
    <CreateTaskButton />
  </div>
);

const TaskListHeader = () => (
  <div className="main-task-list-header">
    <div style={{ color: 'white' }}>Список характеристик</div>
  </div>
);

const TaskListBody = () => (
  <div className="main-task-list-body">
    <div className="main-task-list-body-name">
      <div>{lists.map((item) => <div key={item.id}>{item.name}</div>)}</div>
    </div>
  </div>
);

const CreateTaskButton = () => (
  <button
    type="button"
    className="create-button"
    onClick={createTask}
  >
    Создать
  </button>
);

const createTask = () => (
  lists.push({ id: 1, name: 'Test 2', value: 22 }),
  // TaskListBody(),
  console.log('lists', lists)
);


export default TaskList;
