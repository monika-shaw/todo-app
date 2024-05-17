"use client"
import { FormEventHandler, useState } from "react"
import Modal from "./Modal"
import { addTodo } from "@/api"

function AddTask() {
  const [modalOpen, setmodalOpen] = useState<boolean>(false)
  const [newTaskValue, setnewTaskValue] = useState<string>('')

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async(e) => {
    e.preventDefault()
    console.log(newTaskValue);
    await addTodo({
      id:'3',
      text:newTaskValue
    })
    setnewTaskValue("")
    setmodalOpen(false)
  }
  return (
    <div>
      <button className="btn btn-primary w-full" onClick={() => setmodalOpen(true)}>Add Task</button>
      <Modal modalOpen={modalOpen} setmodalOpen={setmodalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3>Add new Task</h3>
          <input type="text" placeholder="Type here" value={newTaskValue} onChange={(e)=>setnewTaskValue(e.target.value)} className="input input-bordered w-full max-w-xs" />
          <button type="submit" className="btn">Submit</button>
        </form>
      </Modal>
    </div>
  )
}

export default AddTask