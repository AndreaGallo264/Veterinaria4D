import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

export default function Register(props) {

    const [loginerr, setLoginerr] = useState(false);
    const [user, setUsr] = useState({
        nombre: '',
        email: '',
        password: '',
        passwordconfirm: '' ,
        address: ''
    });

    const { nombre, email, password, passwordconfirm , address } = user;
   
    const onChangeUsuario = e => {
        setUsr({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const onSubmitRegistro = e => {
        e.preventDefault();


        if (props.autenticado === true) {
            EditUsr(user);
        } else {
            AddUser(user);
        }

        setUsr({
            nombre: '',
            email: '',
            password: '',
            passwordconfirm: '' ,
            address : ''
        })
    }


    const AddUser = async (user) => {
   
        const request = await fetch(process.env.REACT_APP_BACKEND_URL + "users", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const response = await request.json();

        if (response.success) {
            localStorage.setItem('usuario', JSON.stringify(response.users));
            localStorage.setItem('token', response.token);
            props.setAutenticado(true);
            alert("Usuario Registrado");
        } else {
            props.setAutenticado(false);
            setLoginerr(true);
            alert("Datos Incorrectos");
        }
    }


    const EditUsr = async (user) => {

        /*const solicitud =*/ await fetch(process.env.REACT_APP_BACKEND_URL+"auth/"+props.userState.usuario._id, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        //const respuesta = await solicitud.json();

    }



    return (

        <Container>
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
                                    />
                                </Form.Group>
                                <Button
                                    className="mr-3"
                                    variant="primary"
                                    type="submit">{props.autenticado === true ? "Modificar Datos" : "Registrarme"}
                                </Button>
                                {props.autenticado === true ? "" :
                                    <Link to="/login">Iniciar sesión</Link>
                                }
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>


    )
}

