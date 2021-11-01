import { createStore, combineReducers } from "@reduxjs/toolkit";
import { addReducer } from "../Reducers/addReducer";
import { doneReducer } from "../Reducers/doneReducer"
import { editReducer } from "../Reducers/editReducer"
//import { removeTask } from "../Reducers/deleteReducer"

 const reducer = combineReducers({   
    add: addReducer,
    done: doneReducer,
    edit: editReducer,
    //remove: removeTask
 })

const store = createStore(reducer);

export default store;
