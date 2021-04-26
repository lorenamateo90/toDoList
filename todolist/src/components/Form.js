import React, {useState}  from 'react'
import Todo from './Todo'


const Form = () => {
    const [todos, setTodos] = useState([
        {todo: 'todo 1'},
        {todo: 'todo 2'},
        {todo: 'todo 3'}
    ])

    return (
        <>
        <h1>Form component</h1>
        <Todo />
    </>
    )
}

export default Form