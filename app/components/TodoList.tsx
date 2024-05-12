import { ITask } from "@/types/tasks"
import React from "react"

interface TodoListProps{
    tasks:ITask[]
}

const TodoList: React.FC<TodoListProps> = ({tasks}) =>{
  return (
    <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Id</th>
        <th>Text</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((todos)=>(
        
      <tr key={todos.id}>
        <td>{todos.id}</td>
        <td>{todos.text}</td>
      </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  )
}

export default TodoList