import { useState } from "react";
import Header from "../Header/Header";
import Input from "../Input/Input";
import EditTodo from "./EditTodo";
import TodoList from "./TodoList";

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    return (
        <div className='TodoWrapper'>
            <Header />
            <Input todos={todos} setTodos={setTodos} />
            {todos.map(todo => (
                todo.isEdited ? <EditTodo key={todo.id} todo={todo} setTodos={setTodos} /> : <TodoList key={todo.id} todo={todo} setTodos={setTodos} />
            ))}
        </div>
    )
}

export default TodoWrapper