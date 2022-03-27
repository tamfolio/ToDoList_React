import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import './Todo.style.css'
import Button from '@mui/material/Button';
import db from '../firebase'


function Todo(props) {
  return (
    <List className='todo_list' >
       <ListItem>
           <ListItemText primary={props.todo.todo} secondary='Dummy Lorem'/>
       </ListItem>
       <Button onClick={event => 
         db.collection('todos').doc(props.todo.id).delete()}>DELETE ME</Button>
    </List>
  )
}

export default Todo