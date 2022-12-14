import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Anecdote=({anecdote, vote})=>{
  return(
    <>
      <h2>{anecdote}</h2>
      <p>has {vote}</p>
    </>
  )
}


const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState([0, 0, 0, 0, 0, 0])

  const max = anecdotes.length;
  const handleRandom = () => setSelected(Math.floor(Math.random() * max))

  //arrow function copy of array of votes and setState copy array before increment in one
  const copy = [...vote ]
  const handleVote = () => {
    // increment the property 2 value by one
    copy[selected]++
    setVote(copy)
  }
  const most = vote.indexOf(Math.max(...vote))


  return (
    <div>
      <Anecdote anecdote={anecdotes[selected]} vote={vote[selected]}/>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleRandom}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <Anecdote anecdote={anecdotes[most]} vote={vote[most]}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App anecdotes={anecdotes} />
);


