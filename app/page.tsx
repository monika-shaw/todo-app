import Image from "next/image";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default function Home() {
    return (
        <main className="text-center">
            <h1 className="text-center underline">ToDo List App</h1>
            <AddTask/>
            <TodoList/>
        </main>
    );
}
