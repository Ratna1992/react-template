import { useState, useEffect } from 'react';
import axios from 'axios';
import { Todo } from './Todo';



const useAxiosTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?id=10');
        setTodos(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup function
    };
  }, []);

  return { todos, loading, error };
};

export default useAxiosTodos;
