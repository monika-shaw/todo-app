import Image from "next/image";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { getAllTodos } from "@/api";

export default async function Home() {
    const tasks = await getAllTodos()

    return (
        <main className="text-center">
            <h1 className="text-center text-4xl font-bold p-10">ToDo List App</h1>
            <AddTask />
            <TodoList tasks={tasks} />
        </main>
    );
}
