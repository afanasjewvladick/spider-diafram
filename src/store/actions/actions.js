export const ADD_TASK = 'ADD_TASK';

export function addTask(lists) {
  return {
    type: ADD_TASK,
    payload: lists,
  };
}
