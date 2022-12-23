import React from 'react';

export default function AddItem(props) {
    // logic to add task to firestore DB
    const { addTodo } = props

    return (
        <form id = 'addItemForm'>
            <input id = "add-input" type = "text" placeholder = "enter a new todo"></input>
            <button id = "add-button" type="button" onClick = {(event) => addTodo(event)}>+</button>
        </form>
    )
}