import { ADD_TASK, DONE_TASK, REMOVE_TASK, EDIT_TASK } from "../Constants/types";
import { data } from "../../Components/data";

const initialState = data;

export const reducers = (state = initialState, action) => {
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

      case ADD_TASK:        
        return {
        ...state.todos,
        todos: [...state.todos, action.payload]
      };

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

      case REMOVE_TASK:            
            return {              
              ...state,
                todos : state.todos.filter( (item) => 
                            item.id !== action.payload
                        )
            }    
      default:
        return state;
    }
  };