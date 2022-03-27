import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import './Todo.style.css'
import Button from '@mui/material/Button';


function Todo({todo}) {
  return (
    <List className='todo_list' >
       <ListItem>
           <ListItemText primary={todo} secondary='Dummy Lorem'/>
       </ListItem>
       <Button>DELETE ME</Button>
    </List>
  )
}

export default Todo