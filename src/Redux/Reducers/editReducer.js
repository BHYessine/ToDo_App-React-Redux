import { EDIT_TASK } from "../Constants/types";
import { data } from "../../Components/data";

const initialState = data;

export const editReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_TASK:
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      const newArray = [...state.todos];
      newArray[index].description = action.payload.description;
      newArray[index].isDone = false;
      return {
        ...state,
        todos: newArray
      };

    default:
      return state;
  }
};
