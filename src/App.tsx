import './App.css';
import { Greeting } from './components/Greetings';
import Counter from './classes/Counter';
import { Alert } from './components/Alert';
import { Welcome } from './components/Welcome';
import { AlphaList } from './components/AlphaList';
import { UseStateHook } from './hooks/UseStateHook';

function App() {
  const isLoggedIn:boolean=false
  const alphalist = ['a','b','c','d','e','f']
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
      <h1>Lists and Keys</h1>
      <AlphaList list={alphalist}/>
      <h1>React Hooks</h1>
      <h2>useState()</h2>
      <UseStateHook/>
    </div>
  );
}

export default App;
