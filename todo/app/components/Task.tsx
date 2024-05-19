"use client"
import { ITask } from "@/types/tasks"
import React, { FormEventHandler, useState } from "react"
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
    task: ITask
}
const Task: React.FC<TaskProps> = ({ task }) => {
    const router = useRouter()
    const [openModalEdit, setopenModalEdit] = useState<boolean>(false)
    const [openModalDeleted, setopenModalDeleted] = useState<boolean>(false)
    const [taskToEdit, settaskToEdit] = useState<string>(task.text)
    const handleSubmitEditTodo : FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        await editTodo({
            id: task.id,
            text: taskToEdit
          })
        setopenModalEdit(false)
        router.refresh()
    }

    const handleDeleteTask = async(id:string) => {
        await deleteTodo(id)
        setopenModalDeleted(false)
        router.refresh()
    }
    return (
        <tr key={task.id}>
            <td>{task.text}</td>
            <td><FaEdit onClick={() => setopenModalEdit(true)} /></td>
            {openModalEdit && <Modal modalOpen={openModalEdit} setmodalOpen={setopenModalEdit}>
                <form onSubmit={handleSubmitEditTodo}>
                    <h3>Add new Task</h3>
                    <input type="text" placeholder="Type here" value={taskToEdit} onChange={(e) => settaskToEdit(e.target.value)} className="input input-bordered w-full max-w-xs" />
                    <button type="submit" className="btn">Submit</button>
                </form>
            </Modal>}
            <td><FaRegTrashAlt onClick={() => setopenModalDeleted(true)}/></td>
           {openModalDeleted &&  <Modal modalOpen={openModalDeleted} setmodalOpen={setopenModalDeleted}>
                <h3>Are you sure you want to delete</h3>
                <button className="btn" onClick={()=>handleDeleteTask(task.id)}>Yes</button>
            </Modal>}
        </tr>

    )
}

export default Task