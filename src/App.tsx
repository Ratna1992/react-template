import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greeting } from './components/Greetings';

function App() {
  return (
    <div className="App">
      <Greeting msg='How are You!'/>
    </div>
  );
}

export default App;
