import React, { useState, useEffect } from 'react';

export const UseEffectHook = () =>{
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
          setCount((count) => count + 1);
        }, 1000);
        return ()=>clearTimeout(timer)
      },[]);
    
      return <div>count: {count}</div>;
}