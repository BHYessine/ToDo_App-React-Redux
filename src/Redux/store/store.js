import { createStore, combineReducers } from "@reduxjs/toolkit";
import { addReducer } from "../Reducers/addReducer"
// import { doneTask } from "../Reducers/doneReducer"
// import { editTask } from "../Reducers/editReducer"
//import { removeTask } from "../Reducers/removeReducer"

// const rootReducer = combineReducers({
//     add: addReducer,
//     // done: doneTask,
//     // edit: editTask,
//     //remove: removeTask
// })

const store = createStore(addReducer);

export default store;