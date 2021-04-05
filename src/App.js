import React , {useState} from 'react'
import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
  
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  
  return (
    <div className="todo-app">
      <Header />
      {/* Pass function setInput to TodoForm to set the state i.e. input */}
      <TodoForm input ={input} setInput={setInput} todos={todos} setTodos={setTodos} /> 
      <TodoList todos={todos} setTodos={setTodos}/>        
    </div>
  );
}

export default App;
