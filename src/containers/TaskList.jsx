import React from 'react';
import { connect, useSelector } from 'react-redux';
import './TaskList.scss';
import { addTask } from '../store/actions/actions';


// const CounterComponent = () => {
//   const lists = useSelector((state) => state.TodoList.lists);
//   return (
//     <div>
//       {lists.map((item) => <div className="main-task-list-body" key={item.id}>{item.name}</div>)}
//     </div>
//   );
// };

// export default (CounterComponent);

const App = ({ lists, setTask }) => {
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
    setTask(lists);
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

// const mapStateToProps = (store) => ({
//   lists: store.TodoList.lists,
// });
function mapStateToProps(store) {
  const { lists } = store.TodoList;

  return {
    lists,
  };
}

const mapDispatchToProps = (dispatch) => ({
  setTask: (lists) => dispatch(addTask(lists)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
