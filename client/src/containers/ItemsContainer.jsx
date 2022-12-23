import React, { useState, useEffect } from 'react';
import { getTasks } from '../../../server/controllers/todoController';

import AddItem from '../components/AddItem.jsx'
import TodoItem from '../components/TodoItem.jsx'

export default function ItemsContainer() {
    // current state of todoitems
    const [todoItems, setItems] = useState([<TodoItem key = "item1"/>]);

    // fetch data first - also where todoitems state will be managed
    async function grabTasks() {
        let currTodoItems = [];
        console.log('fetching to link')
        const data = await (await fetch('/getTasks')).json();
        
        data.forEach((item, idx) => {
            console.log("item: ", item)
            let currItem = <TodoItem 
                key = {'item'+idx} 
                details = {item.details} 
                created_at = {item.created_at} 
                complete = {item.complete}
                id = {item.id}
                deleteTodo = {deleteTodo}
                markComplete = {markComplete}
                />
            currTodoItems.push(currItem);
        })

        console.log('todoitems: ', currTodoItems)
        await setItems(currTodoItems);
    }

    // logic for add, edit, delete and mark complete here
    async function addTodo(event) {
        const details = document.getElementById('add-input').value;
        
        await fetch('/addTask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                details: details
            })
        })
            .then(data => data.json())
            .then(response => console.log(response))
            .catch((err) => console.log('err: ', err))

        grabTasks();
    }

    async function deleteTodo(id) {
        await fetch('/deleteTask', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        })
            .then(data => data.json())
            .then(response => console.log(response))
            .catch((err) => console.log('err: ', err))

        grabTasks()
    }

    async function markComplete(id, complete) {
        await fetch('/markComplete', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                complete: complete
            })
        })
            .then(data => data.json())
            .then(response => console.log(response))
            .catch((err) => console.log('err: ', err))

        grabTasks()
    }

    // useeffect
    useEffect(() => {
        // onStart
        grabTasks()
    }, []);

    return (
        <>
            <AddItem addTodo = {addTodo}/>
            <div className = "items-container">
                {todoItems}
            </div>
        </>
    )
}