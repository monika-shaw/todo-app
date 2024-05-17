"use client"
import { useState } from "react"
import Modal from "./Modal"

function AddTask() {
  const [modalOpen, setmodalOpen] = useState<boolean>(false)
  return (
    <div>
        <button className="btn btn-primary w-full" onClick={()=>setmodalOpen(true)}>Add Task</button>
        <Modal modalOpen = {modalOpen} setmodalOpen={setmodalOpen}/>
    </div>
  )
}

export default AddTask