import {useState} from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <input type="text" />
      <button>Add Todo</button>

      <ul>
        <li>Take the dog out for a walk</li>
        <li>Take the rubbish out</li>
      </ul>
    </div>
  );
}

export default App;
