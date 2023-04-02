import React, {useEffect, useState} from 'react';
import {doc, getDoc, updateDoc} from "firebase/firestore";
import db from "../ConnectDB";

function EditTaskForm(props) {
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (!props.id) return;
        getDoc(doc(db, 'tasks', props.id))
            .then(doc => {
                console.log(doc.data());
                setTitle(doc.data().title);
            });
    }, [props.id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskRef = doc(db, "tasks", props.id);
        updateDoc(taskRef, {title})
            .then(r => console.log(r))
            .catch(e => console.log(e));
        props.onCancel();
        setTitle('');
    }

    const handleCancel = () => {
        props.onCancel();
        setTitle('');
    }

    if (!title || !props.id) return null;

    return (
        <div>
            <form>
                <input
                    type="text" placeholder={'Enter task title'}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <button type='submit' onClick={handleSubmit}>Save task</button>
                <button type='submit' onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
}

export default EditTaskForm;