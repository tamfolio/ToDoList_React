import {useState, useEffect} from 'react'
import './App.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Todo from './components/Todo';
import db from './firebase'
import firebase from 'firebase'
 


function App() {
  const [todos, setTodos] = useState([]);
  const [input,setInput]= useState('');

useEffect(() => {
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
    // console.log(snapshot.docs.map(doc => doc.data()))
    setTodos(snapshot.docs.map(doc => doc.data().todo))
  })
},[])

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp:  firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input])
    setInput('');
  }
  return (
    <div className="App">
      
      <form>
         <TextField  label="Write a ToDo" variant="standard"
         value={input} 
         onChange={event =>setInput(event.target.value)}/>
        <Button disabled={!input} type='submit' variant="contained" onClick={addTodo}>Add Todo</Button>
      </form>
      

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
