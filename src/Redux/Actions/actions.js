import { ADD_TASK, REMOVE_TASK, DONE_TASK, EDIT_TASK } from "../Constants/types";

export const addTask = payload =>({
    type: ADD_TASK,
    payload
})

export const removeTask = payload =>({
    type: REMOVE_TASK,
    payload
})

export const doneTask = payload =>({
    type: DONE_TASK,
    payload
})

export const editTask = payload =>({
    type: EDIT_TASK,
    payload
})