import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greeting } from './components/Greetings';
import Counter from './classes/Counter';
import { Alert } from './components/Alert';

function App() {
  return (
    <div className="App">
      <h1>Components & Props in React</h1>
      <Greeting msg='How are You!'/>
      <h1>Life Cycle State in React</h1>
      <Counter/>
      <h1>Handling Events in React</h1>
      <Alert msg='Warning! Shoot out Happening'/>
    </div>
  );
}

export default App;
