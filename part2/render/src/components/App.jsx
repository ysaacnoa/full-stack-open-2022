import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Note } from './Note';

export const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)


  useEffect(()=>{
    console.log('promise');
    axios
      .get('http://localhost:3001/notes')
      .then(response=>{
        console.log('promise fulfilled');
        setNotes(response.data)
      })
  },[])
  
  console.log('render', notes.length, 'notes');
  return (
    <div>App</div>
  )
}
