import React, { useState } from 'react';
import './TaskList.scss';

const App = () => {
  const [lists, setList] = useState(
    [
      { id: 0, name: 'Test', value: 20 },
    ],
  );
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
    lists.push({ id: 1, name: 'Test 2', value: 22 });
    // Важно! Иначе не работает...
    setList([...lists]);
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


export default App;
