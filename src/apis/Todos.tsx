import React from 'react';
import useAxiosTodos from './useAxiosTodos';

const Todos: React.FC = () => {
  const { todos, loading, error } = useAxiosTodos();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
