import './App.css';
import { Greeting } from './components/Greetings';
import Counter from './classes/Counter';
import { Alert } from './components/Alert';
import { Welcome } from './components/Welcome';
import { AlphaList } from './components/AlphaList';
import { UseStateHook } from './hooks/UseStateHook';
import { UseEffectHook } from './hooks/UseEffectHook';
import { DepartmentProvider } from './hooks/DepartmentContext';
import { Employee } from './hooks/Employee';
import { UseRefHook } from './hooks/UseRefHook';
import { UsereducerHook } from './hooks/UsereducerHook';
import UseCallBackHook from './hooks/UseCallBackHook';
import UseMeomoResult from './hooks/UseMemoResult';
import RegistrationForm from './forms/RegistrationForm';
import FormValidation from './forms/FormValidation';
import Todos from './apis/Todos';
import { UseFetchAPITodos } from './apis/UseFetchAPITodos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routing/Home';
import About from './routing/About';
import Contact from './routing/Contact';


function App() {
  const isLoggedIn:boolean=false
  const alphalist = ['a','b','c','d','e','f']
  const departmentData = { id: 1, name: 'Engineering' };
  const name:string = 'Ratna'
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
      <h2>useEffect()</h2>
      <UseEffectHook/>
      <h2>useContext()</h2>
      <DepartmentProvider department={departmentData}>
        <Employee/>
      </DepartmentProvider>
      <h2>useRef()</h2>
      <UseRefHook initialName={name}/>
      <h2>useReducer()</h2>
      <UsereducerHook/>
      <h2>useCallback()</h2>
      <UseCallBackHook/>
      <h2>useMemoback()</h2>
      <UseMeomoResult/>
      <h1>React Forms</h1>
      <RegistrationForm />
      <h1>React Form Validation</h1>
      <FormValidation/>
      <h1>React Integration with APIS</h1>
      <h2>Todos Fetch with AXIOS</h2>
      <Todos/>
      <h2>Todos Fetch with FETCH()</h2>
      <UseFetchAPITodos/>
      <h1>React Routing</h1>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
   
      
    </div>
  );
}

export default App;
