import React, { useState } from 'react';
import MemoizedResult from './useMemoExample';

const UseMeomoResult: React.FC = () => {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);

  return (
    <div>
      <input
        type="number"
        value={valueA}
        onChange={(e) => setValueA(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={valueB}
        onChange={(e) => setValueB(parseInt(e.target.value))}
      />
      <MemoizedResult a={valueA} b={valueB} />
    </div>
  );
};

export default UseMeomoResult;
