import { REMOVE_TASK } from "../Constants/types";
import { data } from "../../Components/data";

const initialState = data;

export const removeTask = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case REMOVE_TASK:
            return {
                data : state.data.filter( (item) => 
                            item.id !== action.payload
                        )
            }    
        default:
            return state.data
    }
}

export default removeTask