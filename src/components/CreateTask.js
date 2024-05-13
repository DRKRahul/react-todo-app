function CreateTask({addTask}) {
    return <div>
        <form>
            <input type="text"/> <button onClick={addTask}>Add Task</button>
        </form>
    </div>
}

export default CreateTask;
