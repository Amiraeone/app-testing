import React, { useState } from 'react'

export default function Todo() {
    const [todos, setTodos] = useState([])
    const [task, setTask] = useState('')

    function onSubmitAction(e) {
        e.preventDefault()

        if (!task) return

        setTodos(todo => ([...todos, task]))
        setTask('')

    }

    return (
        <div>
            <form onSubmit={onSubmitAction}>
                <input type="text" placeholder='task' value={task} onChange={e => setTask(e.target.value)} />
                <button type='submit'>Add Todo</button>
            </form>
            <h2>Todo List</h2>
            <ol data-testid='todos-list'>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ol>
        </div>
    )
}
