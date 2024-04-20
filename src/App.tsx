import './App.css';
import { Greeting } from './components/Greetings';
import Counter from './classes/Counter';
import { Alert } from './components/Alert';
import { Welcome } from './components/Welcome';

function App() {
  const isLoggedIn:boolean=false
  return (
    <div className="App">
      <h1>Components & Props in React</h1>
      <Greeting msg='How are You!'/>
      <h1>Life Cycle State in React</h1>
      <Counter/>
      <h1>Handling Events in React</h1>
      <Alert msg='Warning! Shoot out Happening'/>
      <h1>Conditional Rendering</h1>
      <Welcome isLoggedIn={isLoggedIn}/>
    </div>
  );
}

export default App;
