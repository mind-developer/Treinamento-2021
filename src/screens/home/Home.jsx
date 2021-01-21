import React, { useState, useEffect } from 'react';

const usersData = [...Array(10).keys()]
  .map(x => ({
    id: x,
    name: `Usuário ${x}`,
    email: `usuario${x}@mindconsulting.com.br`,
  }));

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(usersData);
  }, [])

  return (
    <table>
      <thead>
      <tr>
        <th>Nome</th>
        <th>E-mail</th>
      </tr>
      </thead>
      <tbody>
      {users.map(u => (
        <tr key={u.id}>
          <td>{u.name}</td>
          <td>{u.email}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default Home;
