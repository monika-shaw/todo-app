"use client"
import { FormEventHandler, useState } from "react"
import Modal from "./Modal"
import { addTodo } from "@/api"
import { useRouter } from "next/navigation"
import { v4 as uuidv4 } from 'uuid';

function AddTask() {
  const router = useRouter()
  const [modalOpen, setmodalOpen] = useState<boolean>(false)
  const [newTaskValue, setnewTaskValue] = useState<string>('')

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    await addTodo({
      id: uuidv4(),
      text: newTaskValue
    })
    setnewTaskValue("")
    setmodalOpen(false)
    router.refresh()
  }
  return (
    <div>
      <button className="btn btn-accent w-96" onClick={() => setmodalOpen(true)}>Add Task</button>
      <Modal modalOpen={modalOpen} setmodalOpen={setmodalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className=" text-start pl-6 font-bold pb-5">Add new Task</h3>
          <input type="text" placeholder="Type here" value={newTaskValue} onChange={(e) => setnewTaskValue(e.target.value)} className="input input-bordered w-full max-w-xs" />
          <span className=" pl-5">
            <button type="submit" className="btn btn-success" disabled={newTaskValue === ""}>Submit</button>
          </span>
        </form>
      </Modal>
    </div>
  )
}

export default AddTask