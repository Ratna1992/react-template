import React, { useRef } from 'react';
import { EmployeeProps } from './hooks-types';

export const UseRefHook = ({initialName}:EmployeeProps) =>{

      // Create a ref to store the input element
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus on the input element when the component mounts
  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <h4>Employee Details</h4>
      <form>
        <label>
          Name:
          <input ref={inputRef} type="text" defaultValue={initialName} />
        </label>
      </form>
    </div>
  )
}