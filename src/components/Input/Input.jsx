import { useState } from "react";
const { v4: uuidv4 } = require('uuid')

const Input = ({ todos, setTodos }) => {
    const [input, setInput] = useState([]);

    const formSubmitHandler = e => {
        e.preventDefault();
        if (input.trim().length <= 0) return;
        setTodos([...todos, { id: uuidv4(), todo: input, completed: false, isEdited: false }]);
        setInput('');
    }
    return (
        <form onSubmit={formSubmitHandler} className='TodoForm'>
            <input type="text" name="todoinput" id="todoinput" value={input} onChange={(e) => setInput(e.target.value)} className='todo-input' placeholder='Enter some todo...' />
            <button type="submit" className='todo-btn'>Add Todo</button>
        </form>
    )
}

export default Input