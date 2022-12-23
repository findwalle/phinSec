import React from 'react';

// Import files
import ItemsContainer from './containers/ItemsContainer.jsx'
import '../stylesheets/application.css';

export default function App() {
    return (
        <div id = 'app'>
            <h1>Todo List</h1>
            <ItemsContainer />
        </div>
    )
}