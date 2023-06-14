import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import { deleteTask } from "../redux/feature/tasks/taskSlice";
export default function Task({task}){
    const dispatch=useDispatch()
    const deleteTaskHandle=(id)=>{
dispatch(deleteTask(id))
    }
    return (<div>
        <h3>{task.text}</h3>
        <button onClick={()=>deleteTaskHandle(task.id)}>Delete</button>
        </div>)
}