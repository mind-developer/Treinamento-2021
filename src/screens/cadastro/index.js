import React from 'react';

import { Button, Container, Input } from './styles';

function cadastro() {
  return (
  <Container>
  <Input placeholder = 'Nome'></Input>
  <Input placeholder = 'Email'></Input>
  <Input placeholder = 'Senha'></Input>
  <Button>Cadastrar-se</Button>
  </Container>
  );

}

export default cadastro;