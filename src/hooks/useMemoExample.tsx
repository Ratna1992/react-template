import React, { useMemo } from 'react';

interface Props {
  a: number;
  b: number;
}

const MemoizedResult: React.FC<Props> = ({ a, b }) => {
  const result = useMemo(() => {
    console.log('Calculating result...');
    return a + b;
  }, [a, b]);

  return <div>Result: {result}</div>;
};

export default MemoizedResult;
