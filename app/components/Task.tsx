"use client"
import { ITask } from "@/types/tasks"
import React, { FormEventHandler, useState } from "react"
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { editTodo } from "@/api";

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
        settaskToEdit("")
        setopenModalEdit(false)
        router.refresh()
    }
    return (
        <tr key={task.id}>
            <td>{task.text}</td>
            <td><FaEdit onClick={() => setopenModalEdit(true)} /></td>
            <Modal modalOpen={openModalEdit} setmodalOpen={setopenModalEdit}>
                <form onSubmit={handleSubmitEditTodo}>
                    <h3>Add new Task</h3>
                    <input type="text" placeholder="Type here" value={taskToEdit} onChange={(e) => settaskToEdit(e.target.value)} className="input input-bordered w-full max-w-xs" />
                    <button type="submit" className="btn">Submit</button>
                </form>
            </Modal>
            <td><FaRegTrashAlt /></td>
        </tr>

    )
}

export default Task