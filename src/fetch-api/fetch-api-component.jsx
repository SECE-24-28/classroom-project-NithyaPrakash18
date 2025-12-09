import React, { useState, useEffect } from "react";

const ApiExampleComponent = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [dummyUsers, setDummyUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      let urls = [
        "https://jsonplaceholder.typicode.com/users",
        "https://dummyjson.com/products",
        "https://dummyjson.com/todos",
        "https://dummyjson.com/users",
      ];

      let promises = urls.map((url) => fetch(url).then(res => res.json()));
      let data = await Promise.all(promises);

      setUsers(data[0]);
      setProducts(data[1].products);
      setTodos(data[2].todos);
      setDummyUsers(data[3].users);
      setLoading(false);
    } catch (error) {
      console.log("Error:", error);
      setLoading(false);
    }
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>JSONPlaceholder Users</h1>
      <ul>
        {users.slice(0, 5).map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>

      <h1>Products</h1>
      <ul>
        {products.slice(0, 5).map((product) => (
          <li key={product.id}>{product.title} - ${product.price}</li>
        ))}
      </ul>

      <h1>Todos</h1>
      <ul>
        {todos.slice(0, 5).map((todo) => (
          <li key={todo.id}>{todo.todo} - {todo.completed ? "✓" : "✗"}</li>
        ))}
      </ul>

      <h1>Dummy Users</h1>
      <ul>
        {dummyUsers.slice(0, 5).map((user) => (
          <li key={user.id}>{user.firstName} {user.lastName} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiExampleComponent;