import { useState } from "react";
import TodoItem from "./TodoItem";
import CreateTask from "./CreateTask";

function TodoList() {
    let [tasks, setTasks] = useState([{
        id: 1,
        title: "Task One"
    }, {
        id: 2,
        title: "Task Two"
    }]);

    const addTask = (task) => {
        let id = Math.floor((Math.random() * 10));
        setTasks((tasks) => ([...tasks, {id, title: task}]))
    }

    const removeTask = (id) => {
        const newList = tasks.filter(task => task.id !== id)
        setTasks(newList);
    }

    const updateTask = (newTask) => {
        const newList = tasks.map(task => task.id === newTask.id ? newTask : task)
        setTasks(newList);
    }

    return <>
        <CreateTask addTask={addTask}/>
        {tasks.map((item) => <TodoItem task={item} key={item.id} removeTask={removeTask} updateTask={updateTask} />)}
    </>
}

export default TodoList;
