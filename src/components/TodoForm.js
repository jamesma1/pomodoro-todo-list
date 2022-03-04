import React, {useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');
    const [id, setID] = useState(0);


    function handleChange(e) {
        setInput(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit({
            id: id,
            text: input,
            isComplete: false,
        });
        setInput('');
        setID(id + 1);
        
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" 
                    placeholder="Add a task" 
                    className="todo-input" 
                    onChange={handleChange} 
                    value={input} >
                    </input>
            <button className="todo-button">Add</button>
        </form>
    )
}

export default TodoForm