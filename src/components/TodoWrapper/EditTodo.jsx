import { useState } from "react";

const EditTodo = ({ todo, setTodos }) => {
    const [input, setInput] = useState(todo.todo);

    const formSubmitHandler = e => {
        e.preventDefault();
        editTodo(input, todo.id);
    }

    const editTodo = (newTodo, todoId) => {
        setTodos(prevTodo => prevTodo.map(item => item.id === todoId ? { ...item, todo: newTodo, isEdited: !todo.isEdited } : item))
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <input type="text" className='todo-input' value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit" className="todo-btn">Edit Todo</button>
        </form>
    )
}

export default EditTodo