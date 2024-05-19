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
    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        await editTodo({
            id: task.id,
            text: taskToEdit
        })
        setopenModalEdit(false)
        router.refresh()
    }

    const handleDeleteTask = async (id: string) => {
        await deleteTodo(id)
        setopenModalDeleted(false)
        router.refresh()
    }
    return (
        <tr key={task.id}>
            <td>{task.text}</td>
            <td className="flex justify-evenly"><FaEdit onClick={() => setopenModalEdit(true)} />
                <FaRegTrashAlt onClick={() => setopenModalDeleted(true)} /></td>
            {openModalEdit && <Modal modalOpen={openModalEdit} setmodalOpen={setopenModalEdit}>
                <form onSubmit={handleSubmitEditTodo}>
                    <h3 className=" text-start pl-6 font-bold pb-5">Edit current Task</h3>
                    <input type="text" placeholder="Type here" value={taskToEdit} onChange={(e) => settaskToEdit(e.target.value)} className="input input-bordered w-full max-w-xs" />
                    <span className=" pl-5">
                        <button type="submit" className="btn btn-success">Submit</button>
                    </span>
                </form>
            </Modal>}
            {openModalDeleted && <Modal modalOpen={openModalDeleted} setmodalOpen={setopenModalDeleted}>
                <h3 className="pb-5">Are you sure you want to delete ? </h3>
                <button className="btn btn-error" onClick={() => handleDeleteTask(task.id)}>Yes</button>
            </Modal>}
        </tr>

    )
}

export default Task