import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}
const Stadistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td> {value}</td>
    </tr>
  )
}

const Stadistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = good / all;
  const positive = `${average * 100} %`
  return all > 0 ? (
    <>
      <table>
        <tbody>
          <Stadistic text='good' value={good} />
          <Stadistic text='neutral' value={neutral} />
          <Stadistic text='bad' value={bad} />
          <Stadistic text='average' value={average} />
          <Stadistic text='positive' value={positive} />
        </tbody>
      </table>
    </>
  ) : (
    <p>no feedback given</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }
  const handleBadClick = () => {
    setBad(bad + 1);
  }
  return (
    <div>
      <h1>give feedback</h1>

      <Button text='good' onClick={handleGoodClick} />
      <Button text='neutral' onClick={handleNeutralClick} />
      <Button text='bad' onClick={handleBadClick} />

      <h1>stadistics</h1>

      <Stadistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <App />
);


