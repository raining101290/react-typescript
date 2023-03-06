import React, { useState } from "react";
import { TaskModel } from "../taskModel";
import { FiEdit2, FiCheck, FiTrash } from "react-icons/fi";
interface Props {
    task: TaskModel;
    tasks: TaskModel[];
    setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
}

const TaskItem: React.FC<Props> = ({ task, tasks, setTasks }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTask, setEditTask] = useState<string>(task.title);
    const handleDone = (taskId: number) => {
        setTasks(
            tasks.map((item) =>
                item.id === taskId ? { ...item, isDone: !item.isDone } : item
            )
        );
    };
    const handleDelete = (taskId: number) => {
        setTasks(tasks.filter((item) => item.id !== taskId));
    };
    const handleEditTask = (edit: string) => {
        setEditTask(edit);
    };
    const handleSubmit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTasks(
            tasks.map((item) =>
                item.id === id ? { ...item, title: editTask } : item
            )
        );
        setEdit(false);
    };
    return (
        <form
            className="todos__single"
            onSubmit={(e) => {
                handleSubmit(e, task.id);
            }}
        >
            {edit ? (
                <input
                    type="text"
                    className="edit_text"
                    value={editTask}
                    onChange={(e) => handleEditTask(e.target.value)}
                />
            ) : task.isDone ? (
                <s className="todos__single--text">{task.title}</s>
            ) : (
                <span className="todos__single--text">{task.title}</span>
            )}
            <div className="actions">
                <span className="icon">
                    <FiEdit2
                        onClick={() => {
                            if (!edit && !task.isDone) {
                                setEdit(!edit);
                            }
                        }}
                    />
                </span>
                <span className="icon" onClick={() => handleDelete(task.id)}>
                    <FiTrash />
                </span>
                <span className="icon" onClick={() => handleDone(task.id)}>
                    <FiCheck />
                </span>
            </div>
        </form>
    );
};

export default TaskItem;
