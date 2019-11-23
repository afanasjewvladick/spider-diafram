export const ADD_TASK = 'ADD_TASK';
export const ADD_COUNT = 'ADD_COUNT';

export function addTask(lists) {
  const arr = lists;
  arr.push({ id: 1, name: 'Test 2', value: 22 });
  return {
    type: ADD_TASK,
    payload: arr,
  };
}
