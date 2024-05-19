import { ITask } from "@/types/tasks"
import React from "react"
import Task from './Task'
interface TodoListProps {
    tasks: ITask[]
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
    return (
        <div className="pr-60 pl-60 pt-20">
            <table className="table text-center text-lg font-bold">
                <thead>
                    <tr>
                        <th className="text-lg font-bold">Tasks</th>
                        <th className="text-lg font-bold">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <Task key={task.id} task={task} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TodoList