import { ADD_TASK } from "../Constants/types";

import { data } from "../../Components/data";

const initialState = data;

export const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:        
        const newArray = [...state.todos];
        newArray.isDone = false;
        newArray.description = action.payload.description;
        newArray.id = action.payload.id;
      return {
        ...state,
        todos: newArray,        
      };
    default:
      return state;
  }
};
