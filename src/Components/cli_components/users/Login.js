import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

export default function Login(props) {

    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });

    const [loginerr, setLoginerr] = useState(false);
    const { email, password } = usuario;

    const onChangeUsuario = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    };

    const onSubmitLogin = e => {
        e.preventDefault();
        LoginUsr(usuario);
    }


    const LoginUsr = async (usuario) => {

        await fetch(process.env.REACT_APP_BACKEND_URL + "auth", {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(async res => await res.json())
            .then(
                (result) => {
                    if (result.success) {
                        localStorage.setItem('usuario', JSON.stringify(result.datausr));
                        localStorage.setItem('token', result.token);
                        props.setAutenticado(true);
                    } else {
                        props.setAutenticado(false);
                        setLoginerr(true);
                        alert("Datos Incorrectos");
                    }
                },
                (error) => {
                    alert("Ocurrio un Error, reintente nuevamente");
                }
            );
    }


    return (

        <Container>
            {
                props.autenticado === true ? <Alert variant='success'>
                    Usuario Logueado
              </Alert> :

                    <Row className="mt-5">
                        <Col xs={12} sm={8} md={6} className="mx-auto">
                            <Card bg="light">
                                <Card.Header>Login</Card.Header>
                                {loginerr ? <Alert variant='danger'> Datos Incorrectos </Alert> : ""}
                                <Card.Body>
                                    <Form onSubmit={onSubmitLogin} >
                                        <Form.Group controlId="formLoginEmail">
                                            <Form.Label>
                                                Email
                                    </Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                placeholder="Ingrese su email"
                                                onChange={onChangeUsuario}
                                                value={email}
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formLoginPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                name="password"
                                                placeholder="Ingrese su password"
                                                onChange={onChangeUsuario}
                                                value={password}
                                                required
                                            />
                                        </Form.Group>
                                        <Button
                                            className="mr-3"
                                            variant="primary"
                                            type="submit">Iniciar Sesión
                                 </Button>
                                        <Link to="/register">Crear usuario</Link>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            }
        </Container>

    )
}
