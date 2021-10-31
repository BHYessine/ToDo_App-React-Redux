import { EDIT_TASK } from "../Constants/types";
import { data } from "../../Components/data";

const initialState = {data};

export const editTask = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_TASK:
            return {
                data : state.data.map( (item) => {
                            if (item.id === action.payload.id) {
                                return {
                                    ...item,
                                    description: action.payload.task,
                                    isDone: false
                                }
                            }
                            return state
                        })
            }    
        default:
            return state
    }
}
