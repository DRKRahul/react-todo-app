import { useState } from "react";

function CreateTask({addTask}) {
    let [task, setTask] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(task);
        setTask("");
    };

    return <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/> 
            <button type="submit">Add Task</button>
        </form>
    </div>
}

export default CreateTask;
