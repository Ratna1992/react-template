import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greeting } from './components/Greetings';
import Counter from './classes/Counter';

function App() {
  return (
    <div className="App">
      <Greeting msg='How are You!'/>
      <Counter/>
    </div>
  );
}

export default App;
