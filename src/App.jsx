import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);

  // GET: Fetch all users
  const getUsers = async () => {
    try {
      const res = await axios.get("/users");
      setUsers(res.data);
      console.log('GET:', res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // POST: Create a new user
  const createUser = async () => {
    try {
      const res = await axios.post("/users", {
        name: 'diwkk',
      });
      console.log('POST:', res.data);
    } catch (error) {
      console.log('POST Error:', error);
    }
  };

  // PUT: Update user by ID (e.g., ID 4)
  const updateUser = async () => {
    try {
      const res = await axios.put("/users/32", {
        name: 'diwkk',
      });
      console.log('PUT:', res.data);
    } catch (error) {
      console.log('PUT Error:', error);
    }
  };

  // DELETE: Remove user by ID (e.g., ID 2)
  async function deleteUser() {
    try {
      const res = await axios.delete("/users/2");
      console.log('DELETE:', res.data);
    } catch (error) {
      console.log('DELETE Error:', error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <button onClick={() => getUsers()}>Get User</button>
      <button onClick={() => createUser()}>Create User</button>
      <button onClick={() => updateUser()}>Update User</button>
      <button onClick={() => deleteUser()}>Delete User</button>

      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default App;