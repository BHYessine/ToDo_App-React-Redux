import { DONE_TASK } from "../Constants/types";
import { data } from "../../Components/data";

const initialState = data;

export const doneReducer = (state = initialState, action) => {
  switch (action.type) {
    case DONE_TASK: {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      const newArray = [...state.todos];
      newArray[index].isDone = true;
      return {
        ...state,
        todos: newArray
      };
    }
    default:
      return state;
  }
};
