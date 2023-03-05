import React from "react";
import { TaskModel } from "../taskModel";
import { FiEdit2, FiCheck, FiTrash } from "react-icons/fi";
interface Props {
    task: TaskModel;
    tasks: TaskModel[];
    setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
}
const TaskItem = ({ task, tasks, setTasks }: Props) => (
    <form className="todos__single">
        <span className="todos__single--text">{task.task}</span>
        <div className="">
            <span className="icon">
                <FiEdit2 />
            </span>
            <span className="icon">
                <FiCheck />
            </span>
            <span className="icon">
                <FiTrash />
            </span>
        </div>
    </form>
);

export default TaskItem;
