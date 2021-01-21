import React from 'react'
import { useHistory } from 'react-router-dom';
import { Container, Card, Input, Button, Col, Text } from './styles';

function Login() {
    const history = useHistory()
    return (
        <Container>
            <Card>
                <Text>Log In</Text>
                <Col>
                    <Input placeholder="Usuário"></Input>
                    <Input placeholder="Senha" type="password"></Input>
                    <Button onClick={()=>history.push('cadastro')}>Login</Button>
                </Col>
            </Card>
        </Container>
    )
}

export default Login
