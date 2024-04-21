import React from 'react';
import { useIncrement } from './UseIncrement';

const UseCallBackHook: React.FC = () => {
  const increment = useIncrement();

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default UseCallBackHook;
