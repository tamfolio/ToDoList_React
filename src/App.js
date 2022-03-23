import {useState} from 'react'
import './App.css'
import Button from '@mui/material/Button';

function App() {
  const [todos, setTodos] = useState(['Take the dog out for a walk','Take the rubbish out',"building amazing things"])
  const [input,setInput]= useState('')
  console.log(input)

  const addTodo = (event) => {
    event.preventDefault();
    console.log('i am working')
    setTodos([...todos, input])
    setInput('');
  }
  return (
    <div className="App">
      <form>
        <input 
        value={input}
        onChange={event =>setInput(event.target.value)}/>
        <Button disabled={!input} type='submit' variant="contained" onClick={addTodo}>Add Todo</Button>
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
