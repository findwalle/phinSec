import React, { useEffect, useState } from 'react';

export default function TodoItem(props) {
    // destructure methods here - edit, mark complete, delete
    const { details, created_at, complete, id, deleteTodo, markComplete } = props

    const [checked, setCheck] = useState(complete);
    const [editable, setEdit] = useState("false");
    const [editing, setEditSave] = useState("Edit")

    async function editTodo(e) {
        if (editing === "Edit") {
            // if we are not in edit mode, after we click, we need to change to save
            setEditSave("Save")
            setEdit("true")
        } else if (editing === "Save") {
            // if it is currently save, after use clicks again we can send to backend
            const editDiv = e.currentTarget.parentNode.getElementsByClassName('task-details')[0].innerHTML;
            
            await fetch('/editTask', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                    details: editDiv
                })
            })
                .then(data => data.json())
                .then(response => console.log(response))
                .catch((err) => console.log('err: ', err))

            setEditSave("Edit")
            setEdit("false")
        }

        grabTasks()
    }

    return (
        <div className = "todo-item">
            <input 
                className = "complete-box" 
                type="checkbox" 
                defaultChecked = {checked}
                onClick = {() => {
                    setCheck(!checked)
                    markComplete(id, complete)
                }}/>
            <div contentEditable = {editable} className = "task-details">{ details }</div>
            <button className = "edit-task-button" type="button" onClick={(e) => editTodo(e)}>{editing}</button>
            <button className = "delete-task-button" type="button" onClick={() => deleteTodo(id)}>x</button>
        </div>
    )
}