import { DONE_TASK } from "../Constants/types";
import { data } from "../../Components/data";

const initialState = {data};

export const doneTask = (state = initialState, action) => {
    switch (action.type) {
        case DONE_TASK:
            return {
                data : state.data.map( (item) => {
                            if (item.id === action.payload) { 
                                return {
                                    ...item,                                    
                                    isDone: true
                                }
                            }
                            return state
                        })
            }    
        default:
            return state
    }
}
