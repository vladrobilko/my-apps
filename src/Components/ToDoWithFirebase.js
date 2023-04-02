import CreateTask from "./ComponentsToDoWithFirebase/CreateTask";
import TaskList from "./ComponentsToDoWithFirebase/TaskList";

function ToDoWithFirebase() {

    return (
        <div>
            <hr/>
            <h2 style={{color: 'orangered'}}>ToDo</h2>
            <CreateTask/>
            <TaskList/>
        </div>);
}

export default ToDoWithFirebase;