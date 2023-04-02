import {useEffect, useState} from "react";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import db from "../ConnectDB";

function TaskList() {

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
    return (
        <div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.data.title}
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
            <hr/>
        </div>
    );
}

export default TaskList;