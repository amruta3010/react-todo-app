import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { IoIosCheckmarkCircle} from 'react-icons/io';

function Todo({todo,todos,setTodos}) {
    
    const deleteHandler = () => {
        console.log('In DeleteHandler: ' + todo.text);        
        setTodos(todos.filter((element) => element.id !== todo.id));        
    }
    
    const completeHandler = () => {
        setTodos(todos.map(element => {

            if(element.id === todo.id){
                return {
                    ...element,
                    isComplete: !element.isComplete
                }
            }
            return element;
        }));
    }   

    return (
        <div className="todo" >
            <div className={`todo-item ${todo.isComplete ? "completed" : ""}`} > {todo.text}  </div>   
{/*             <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>  */} 
            <div className='icons'>
                <IoIosCheckmarkCircle className="complete-btn" onClick={completeHandler} />               
                <RiCloseCircleLine className="trash-btn" onClick={deleteHandler} />                
            </div>
        </div>

/*             </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        /> 
      </div> */

        
    )
}

export default Todo
