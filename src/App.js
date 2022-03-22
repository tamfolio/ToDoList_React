import {useState} from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState(['Take the dog out for a walk','Take the rubbish out',"building amazing things"])
  const [input,setInput]= useState('')
  return (
    <div className="App">
      <input 
      value={input}
       onChange={event =>setInput(event.target.value)}/>
      <button>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
