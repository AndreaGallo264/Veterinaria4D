import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

export default function EditData(props) {

    const [user, setUsr] = useState({
        nombre: props.datusr[0] ? props.datusr[0].nombre : '',
        email: props.datusr[0] ? props.datusr[0].email : '',
        password: '',
        passwordconfirm: '',
        address: props.datusr[0] ? props.datusr[0].address : '',
    });

    const [edit, setEdit] = useState(false);
    const { nombre, email, password, passwordconfirm, address } = user;

    const onChangeUsuario = e => {
        setUsr({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const onSubmitRegistro = e => {
        e.preventDefault();

        if (password === passwordconfirm) {
            if (props.userState.autenticado === true) {
                EditUsr(user);
            }
        } else {
            return alert("Password y Confirmacion Password no coinciden");
        }
    }

    const EditUsr = async (user) => {

        await fetch(process.env.REACT_APP_BACKEND_URL + "auth/" + props.userState.usuario._id, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        }).then(async res => await res.json())
            .then(
                (result) => {
                    if (result.success) {
                        setEdit(true);
                        getusrbyId();
                        setUsr({
                            nombre: '',
                            email: '',
                            password: '',
                            passwordconfirm: '',
                            address: ''
                        })
                    } else {
                        alert("Ocurrio un Error, reintente nuevamente:" + result.msg);
                    }
                },
                (error) => {
                    alert("Ocurrio un Error, reintente nuevamente");
                }
            );
    };

    const getusrbyId = async () => {
        await fetch(process.env.REACT_APP_BACKEND_URL + "listUsrsbyId/" + props.userState.usuario._id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        }).then(async res => await res.json())
        .then(
            (result) => {
                if (result.success) {
                    props.setDatUsr(result.users);
                } else {
                    alert("Ocurrio un Error, reintente nuevamente");
                }
            },
            (error) => {
                alert("Ocurrio un Error, reintente nuevamente");
            }
        );
    }

    useEffect(() => {
        if (props.userState.autenticado === true) {
            getusrbyId();
        }
    }, [edit]);

    useEffect(() => {
        if (props.userState.autenticado === true) {
            getusrbyId();
        }
    }, []);


    return (

        <Container>
            {
                edit === true ? <Alert variant='success'> Datos Modificados</Alert> :
                    <Row className="mt-5">
                        <Col xs={12} sm={8} md={6} className="mx-auto">
                            <Card bg="light">
                                <Card.Header>Registro de Usuario</Card.Header>
                                <Card.Body>
                                    <Form onSubmit={onSubmitRegistro}>
                                        <Form.Group controlId="formRegistroNombre">
                                            <Form.Label>
                                                Nombre
                                    </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="nombre"
                                                placeholder="Ingrese su nombre"
                                                onChange={onChangeUsuario}
                                                value={nombre}
                                                required

                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formRegistroEmail">
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

                                        <Form.Group controlId="formRegisterAdress">
                                            <Form.Label>
                                                Dirección
                                    </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="address"
                                                placeholder="Ingrese su Dirección Postal"
                                                onChange={onChangeUsuario}
                                                value={address}
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formRegistroPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                name="password"
                                                placeholder="Ingrese su password"
                                                onChange={onChangeUsuario}
                                                value={password}
                                                required
                                                minLength="6"
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formRegistroPasswordconfirm">
                                            <Form.Label>Confirmar Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                name="passwordconfirm"
                                                placeholder="Ingrese su password de nuevo"
                                                onChange={onChangeUsuario}
                                                value={passwordconfirm}
                                                required
                                                minLength="6"
                                            />
                                        </Form.Group>
                                        <Button
                                            className="mr-3"
                                            variant="primary"
                                            type="submit">Modificar Datos
                                </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            }
        </Container>


    )
}

