import React from 'react'
import { Container, Card, Input, Button, Col, Text } from './styles';

function Login() {
    return (
        <Container>
            <Card>
                <Text>Log In</Text>
                <Col>
                    <Input placeholder="Usuário"></Input>
                    <Input placeholder="Senha" type="password"></Input>
                    <Button>Login</Button>
                </Col>
            </Card>
        </Container>
    )
}

export default Login
