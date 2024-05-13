import { useState } from "react";
import TodoItem from "./TodoItem";
import CreateTask from "./CreateTask";

function TodoList() {
    let [tasks, setTask] = useState([{
        id: 1,
        title: "Task One"
    }, {
        id: 2,
        title: "Task Two"
    }]);
    return <>
        <CreateTask/>
        {tasks.map((item) => <TodoItem task={item.title} key={item.id} />)}
    </>
}

export default TodoList;
