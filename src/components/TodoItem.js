import { useState } from "react";

function TodoItem ({task, removeTask, updateTask}) {
    let [newTask, setNewTask] = useState("");
    let [edit, setEdit] = useState(false);

    const updateTaskHandler = () => {
        updateTask({...task, title: newTask});
        setEdit(false);
    }

    return <div>
        { edit ? <>
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
            <button onClick={updateTaskHandler}> Update Task</button>
        </> : <>
            <span>{task.title}</span>
            <button onClick={() => setEdit(true)}>Edit</button>
            <button onClick={() => removeTask(task.id) }>Delete</button>
        </>
        }
    </div>
}

export default TodoItem;
