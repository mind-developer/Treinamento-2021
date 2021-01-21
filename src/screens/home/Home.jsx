import React, { useState, useEffect } from 'react';
import {
  Container,
  MenuItem,
  MenusContainer,
  MenuUserContainer,
  NavBar,
  Table,
  TableWrapper,
} from './styles';

const usersData = [ ...Array(10).keys() ]
  .map(x => ({
    id: x, name: `Usuário ${x}`,
    email: `usuario${x}@mindconsulting.com.br`,
  }));

const Home = () => {
  const [ users, setUsers ] = useState([]);
  const [ loggedUser, setLoggedUser ] = useState(undefined);

  useEffect(() => {
    setUsers(usersData);
    setLoggedUser(usersData[0])
  }, [])

  return (
    <Container>
      <header>
        <NavBar>
          <MenusContainer>
            <MenuItem>
              <a href={"/home"}> Home </a>
            </MenuItem>
          </MenusContainer>
          <MenuUserContainer>
            <MenuItem>
              <a href={"/perfil"}>{loggedUser && loggedUser.name}</a>
            </MenuItem>
            <MenuItem>
              <a href={"/"}>Sair</a>
            </MenuItem>
          </MenuUserContainer>
        </NavBar>
      </header>
      <TableWrapper>
        <h1>Lista de Usuários</h1>
        <Table>
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
        </Table>
      </TableWrapper>
    </Container>
  );
}

export default Home;
