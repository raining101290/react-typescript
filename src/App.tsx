import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { TaskModel } from "./taskModel";

function App() {
    const [task, setTask] = useState<string>("");
    const [tasks, setTasks] = useState<TaskModel[]>([]);
    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (task !== "") {
            setTasks([...tasks, { id: Date.now(), task: task, isDone: false }]);
            setTask("");
        }
    };
    console.log("task", tasks);
    return (
        <div className="App">
            <div className="header">
                <h3>Task Management</h3>
            </div>
            <TaskForm
                task={task}
                setTask={setTask}
                handleAddTask={handleAddTask}
            />
            <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
    );
}

export default App;
