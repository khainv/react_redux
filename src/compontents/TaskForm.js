import React,{useState} from "react";
import { useDispatch } from "react-redux";
import {addTask} from '../redux/feature/tasks/taskSlice';
export default function TaskForm(){
    const[text,setText]=useState('')
    const dispatch=useDispatch()
    const addTaskHandle=(e)=>{
        e.preventDefault();
        dispatch(addTask(text))
        setText('')
    }
    return (<form onSubmit={addTaskHandle}>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <button type="submit">Add Task</button>
    </form>)
}