import CreateTask from "./ComponentsToDoWithFirebase/CreateTask";
import TaskList from "./ComponentsToDoWithFirebase/TaskList";
import {useState} from "react";
import EditTaskForm from "./ComponentsToDoWithFirebase/EditTaskForm";

function ToDoWithFirebase() {
    const [editTaskId, setEditTaskId] = useState(null);

    return (
        <div>
            <hr/>
            <h2 style={{color: 'orangered'}}>ToDo</h2>
            <CreateTask/>
            <TaskList onEdit={(id) => setEditTaskId(id)}/>
            <EditTaskForm id={editTaskId} onCancel={() => setEditTaskId(null)}/>
        </div>);
}

export default ToDoWithFirebase;