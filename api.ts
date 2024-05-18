import { ITask } from "./types/tasks";

const baseURL = 'http://localhost:3001';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseURL}/tasks`, { cache: 'no-store' })
    const todos = await res.json()
    return todos

}

export const addTodo = async (todo:ITask):Promise<ITask> =>{
    const res = await fetch(`${baseURL}/tasks`,{
        method:'Post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(todo)
    })
    const newTodo = await res.json()
    return newTodo    
}