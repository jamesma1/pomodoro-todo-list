import React, {useState} from 'react'
import TodoForm from './TodoForm.js'
import Todo from './Todo.js';


function TodoList() {
    const [todos, setTodos] = useState([]);

    function addTodo(todo) {
        if (!todo.text) return;
        const updatedTodos = [...todos, todo];
        setTodos(updatedTodos);
    };

    function completeTodo(id) {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
        console.log(todos);
    };

    function deleteTodo(id) {
        let updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
    <div className='todo-container'>
        <TodoForm onSubmit={addTodo}/>
        <Todo 
            todos={todos} 
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            />
    </div>
    )
}

export default TodoList