const TodoList = ({ todo, setTodos }) => {
    const onCompleteHandler = todoId => {
        setTodos(prevTodo => prevTodo.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo));
    }
    const onEditHandler = todoId => {
        setTodos(prevTodo => prevTodo.map(todo => todo.id === todoId ? { ...todo, isEdited: !todo.isEdited } : todo));
    }
    const onDeleteHandler = todoId => {
        setTodos(prevTodo => prevTodo.filter(todo => todo.id !== todoId));
    }
    return (
        <div className="Todo">
            <p className={`${todo.completed ? 'completed' : ''}`}>{todo.todo}</p>
            <div>
                <button className="button-edit task-button" onClick={() => onEditHandler(todo.id)}>
                    <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button className="button-delete task-button" onClick={() => onDeleteHandler(todo.id)}>
                    <i class="fa-solid fa-trash"></i>
                </button>
                <button className="button-complete task-button" onClick={() => onCompleteHandler(todo.id)}>
                    <i className="fas fa-check-circle"></i>
                </button>
            </div>
        </div>
    )
}

export default TodoList;