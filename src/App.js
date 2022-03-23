import {useState} from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState(['Take the dog out for a walk','Take the rubbish out',"building amazing things"])
  const [input,setInput]= useState('')
  console.log(input)

  const addTodo = (event) => {
    event.preventDefault();
    console.log('i am working')
    setTodos([...todos, input])
  }
  return (
    <div className="App">
      <form>
        <input 
        value={input}
        onChange={event =>setInput(event.target.value)}/>
        <button onClick={addTodo}>Add Todo</button>
      </form>
      

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
