import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import './TaskList.scss';
import { addTask } from '../store/actions/actions';

const App = () => {
  const lists = useSelector((state) => state.TodoList.lists);
  const dispatch = useDispatch();
  const store = useStore();

  const TaskListHeader = () => (
    <div className="main-task-list-header">
      <div style={{ color: 'white' }}>Список характеристик</div>
    </div>
  );
  const TaskListBody = () => (
    <div>
      {lists.map((item) => <div className="main-task-list-body" key={item.id}>{item.name}</div>)}
    </div>
  );

  const createTask = () => {
    dispatch(addTask(lists));
  };

  const CreateTaskButton = () => (
    <button
      type="button"
      className="create-button"
      onClick={createTask}
    >
      Создать
    </button>
  );

  return (
    <div className="main-task-list">
      <TaskListHeader />
      <TaskListBody />
      <CreateTaskButton />
    </div>
  );
};


export default (App);
