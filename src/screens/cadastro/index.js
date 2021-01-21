import React from "react";
import { useHistory } from "react-router-dom";

import { Button, Container, Input, Title } from "./styles";

function Cadastro() {
  const history = useHistory();
  return (
    <Container>
      <Title>Cadastro</Title>
      <Input placeholder="Nome"></Input>
      <Input placeholder="Email"></Input>
      <Input placeholder="Senha"></Input>
      <Button onClick={() => history.push("login")}>Cadastrar-se</Button>
    </Container>
  );
}

export default Cadastro;
