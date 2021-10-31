import { ADD_TASK } from "../Constants/types";

import { data } from "../../Components/data";

const initialState = data;

export const addReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,                       
                todos: state.todos.concat(action.payload)                  
            }    
        default:
            return state
    }
}
// export default addReducer;