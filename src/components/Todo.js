import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {GrFormEdit} from 'react-icons/gr'
import {MdDeleteForever} from 'react-icons/md'


function Todo(props) {
    console.log(props.todos)

    return props.todos.map((todo, index) => (
        <div 
            className={todo.isComplete ? 'todo-row-complete' : 'todo-row'}
            key={index}
        >
            <div className='todo-task' key={todo.id} onClick={() => props.completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <MdDeleteForever className='delete-icon' onClick={() => props.deleteTodo(todo.id)}/>
            </div>
        </div>
    ));
}

export default Todo