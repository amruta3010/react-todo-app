import React from 'react'
// import { MdAddCircle } from "react-icons/md";

/* Pass in TodoForm(props) and call props.setInput
or
Pass in TodoForm({setInput}) */

function TodoForm({input,setInput, todos, setTodos}) {
    
    const handleOnChange = e => {
        setInput(e.target.value);
    }

    const handleOnSubmit = e => {
        e.preventDefault();

        setTodos([
            ...todos,
            {
                id: Math.floor(Math.random() * 1000),
                text: input,
                isComplete: false
            }
        ]);

        setInput('');
    }
    
    return (
        <form className="todo-form" onSubmit={handleOnSubmit}>
            <input className="todo-input" type="text" name="text" placeholder="Add a Todo" value={input} onChange={handleOnChange}></input>
            <button className="todo-button" type="submit">Add Todo
                {/* <i className="fas fa-plus-square"></i> */}
            </button> 
            {/* <MdAddCircle className="todo-button"> </MdAddCircle> */}
        </form>
    )
}

export default TodoForm
