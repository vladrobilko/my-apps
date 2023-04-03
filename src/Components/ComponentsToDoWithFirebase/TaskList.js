import {useEffect, useState} from "react";
import {collection, onSnapshot, orderBy, query, deleteDoc, doc, updateDoc} from "firebase/firestore";
import db from "../ConnectDB";

function TaskList(props) {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const taskColRef = query(collection(db, 'tasks'), orderBy('created', 'desc'));
        onSnapshot(taskColRef, (snapshot) => {
            setTasks(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        });
    }, []);

    const onDeleteTask = (id) => {
        deleteDoc(doc(db, "tasks", id));
    }


    const onToggleDone = (id) => {
        const taskRef = doc(db, "tasks", id);
        updateDoc(taskRef, {done: !tasks.find(task => task.id === id).data.done});
    }

    return (
        <div>
            <ol class="list-group list-group-numbered">
                {tasks.map(task => (
                    <li key={task.id} class="list-group-item">
                        <div className='row'>
                            <div className='col-8'>
                                {task.data.done ? <s>{task.data.title}</s> : task.data.title}
                            </div>
                            <div className='col-4'>
                                <button onClick={() => onDeleteTask(task.id)}>Delete</button>
                                <button onClick={() => onToggleDone(task.id)}>Done</button>
                                <button onClick={() => props.onEdit(task.id)}>Edit</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default TaskList;