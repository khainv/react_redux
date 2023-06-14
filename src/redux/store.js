import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './feature/tasks/taskSlice'
export default configureStore({
    reducer:{
        tasks:tasksReducer
    }
})