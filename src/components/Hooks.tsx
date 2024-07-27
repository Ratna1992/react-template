
import React from 'react';
import { DepartmentProvider } from '../hooks/DepartmentContext';
import { Employee } from '../hooks/Employee';
import UseCallBackHook from '../hooks/UseCallBackHook';
import { UseEffectHook } from '../hooks/UseEffectHook';
import UseMeomoResult from '../hooks/UseMemoResult';
import { UseRefHook } from '../hooks/UseRefHook';
import { UseStateHook } from '../hooks/UseStateHook';
import { UsereducerHook } from '../hooks/UsereducerHook';

const Hooks: React.FC = () => {
  const departmentData = { id: 1, name: 'Engineering' };
  const name:string = 'Ratna'
  return (
    <>
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
    </>
  );
};

export default Hooks;
