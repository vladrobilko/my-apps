import {useState} from "react";
import {addDoc, collection, Timestamp} from "firebase/firestore";
import db from "../ConnectDB";

function CreateTask() {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(collection(db, "tasks"), {
            title,
            done: false,
            created: Timestamp.now()
        }).then(r => console.log(r))
            .catch(e => console.log(e));
        console.log(title);
        setTitle('');
    }
    return(
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}/>
                <button type="submit" onClick={handleSubmit}>Add Task</button>
            </form>
        </div>
    );
}

export default CreateTask;