import React,{useState} from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import './Todo.style.css'
import db from '../firebase'
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Modal from '@mui/material/Modal';



function Todo(props) {
  const[open,setOpen] = useState(false)
  const[input, setInput] = useState('')

  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set({
      todo: input
    }, {merge: true})
    setOpen(false)
  }



  
  return (
    <>
    <Modal
      open={open}
      onClose={e => setOpen(false)}
    >
      <div>
        <h1>I am a modal</h1>
         <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
        <Button onClick={updateTodo}>Update Todo</Button>
      </div>
    </Modal>
    <List className='todo_list' >
       <ListItem>
           <ListItemText primary={props.todo.todo} secondary='Dummy Lorem'/>
       </ListItem>
       <Button onClick={e => setOpen(true)}>Edit Me</Button>
       <DeleteForeverIcon  onClick={event => 
         db.collection('todos').doc(props.todo.id).delete()}/>
    </List>
    </>
  )
}

export default Todo