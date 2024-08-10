import { getTodos } from '@/services/example.services';
import React, { useEffect, useState } from 'react';

const ExamplePage = () => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState();

  const fetchTodos = async () => {
    setLoading(true);
    const todos = await getTodos();
    setLoading(false);
    setTodos(todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  console.log(todos)

  return <div>index</div>;
};

export default ExamplePage;
