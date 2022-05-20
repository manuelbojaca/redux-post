import { createStore } from "redux";

export const CHANGE_TASK = "CHANGE_TASK";

// ACTION CREATOR
export function changeTask(value) {
  console.log("Action: ", value);
  return {
    type: CHANGE_TASK,
    payload: value,
  };
}

const initialState = {
  task: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TASK:
      console.log("Action: ", action.payload);
      return { ...state, task: [...state.task, action.payload] };
    default:
      return state;
  }
};

export const store = createStore(taskReducer, initialState);
