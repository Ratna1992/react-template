import { useCallback } from 'react';

export const useIncrement = () => {
  // Define the increment function
  const increment = useCallback(() => {
    console.log('Incrementing...');
  }, []);

  return increment;
};
