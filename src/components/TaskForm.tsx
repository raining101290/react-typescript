import React from "react";

interface Props {
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
    handleAddTask: (e: React.FormEvent) => void;
}

const TaskForm: React.FC<Props> = ({ task, setTask, handleAddTask }) => {
    // const handleSetTask = (e: string) => {
    //     setTask(e.target.value);
    // };
    return (
        <form onSubmit={handleAddTask}>
            <div className="form-group">
                <input
                    type="text"
                    value={task}
                    placeholder="Create A Task"
                    onChange={(e) => {
                        setTask(e.target.value);
                    }}
                />
                <button type="submit">Create</button>
            </div>
        </form>
    );
};

export default TaskForm;
