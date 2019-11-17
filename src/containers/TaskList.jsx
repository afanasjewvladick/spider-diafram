import React from 'react';
import { connect } from 'react-redux';
import './TaskList.scss';

const App = ({ lists }) => {
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

  // const createTask = () => {
  //   lists.push({ id: 1, name: 'Test 2', value: 22 });
  //   // Важно! Иначе не работает...
  //   setList([...lists]);
  // };

  const CreateTaskButton = () => (
    <button
      type="button"
      className="create-button"
      // onClick={createTask}
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

// Обращение к store.
const mapStateToProps = (store) => ({
  lists: store.TodoList.lists,
});

/*
  Назначение функции connect вытекает из названия: подключи React компонент к Redux store.
  Результат работы функции connect -
  новый присоединенный компонент, который оборачивает переданный компонент.
*/
export default connect(mapStateToProps)(App);
