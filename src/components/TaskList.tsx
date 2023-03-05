import React from "react";
import TaskItem from "./TaskItem";
import "../App.css";
import { TaskModel } from "../taskModel";

interface Props {
    tasks: TaskModel[];
    setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
}
const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
    return (
        <div className="todos">
            {tasks?.length > 0 &&
                tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        tasks={tasks}
                        setTasks={setTasks}
                    />
                ))}
        </div>
    );
};

export default TaskList;
