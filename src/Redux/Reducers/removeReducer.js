import { REMOVE_TASK } from "../Constants/types";
import { data } from "../../Components/data";

const initialState = data;

export const removeReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case REMOVE_TASK:
            
            return {              
              ...state,
                todos : state.todos.filter( (item) => 
                            item.id !== action.payload
                        )
            }    
        default:
            return state
    }
}

export default removeReducer
