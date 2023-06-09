import React from "react";
import {useSelector} from 'react-redux'
export default function Tasks(){
    const tasks=useSelector((state)=>state.tasks)
    return <div><ul>{tasks.map((task)=>(
        <li key={task.id}>{task.text}</li>
    ))}</ul></div>
}