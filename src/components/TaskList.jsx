import React from 'react';
import './TaskList.scss';

let lists = [
  { id: 0, name: 'Vlad', age: 20 },
];

const ListItems = lists.forEach((number) => {
  return number;
});
// console.log('ListItems', ListItems);


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
      <div>{ListItems}</div>
      {/* <For each="item" in={lists}>
        <div>{ item.name }</div>
      </For> */}
      {/* <ListItems /> */}
    </div>
    {/* <div className="main-task-list-body-value">
      {object.age}
    </div> */}
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
  console.log('Привет!')
);


export default TaskList;
