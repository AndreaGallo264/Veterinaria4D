import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image, Container, Form, Button, Card, Alert } from 'react-bootstrap';
import { onKeyPressValidateEmail, onKeyPressValidatePassword } from '../../resources/CommonValidations';
import ImgEmail from '../../resources/mail.png';
import ImgPass from '../../resources/security.png';
import ImgAdd from '../../resources/add.png';
import Perritos from '../../resources/perritos.jpg';
import alertify from 'alertifyjs';

export default function Login({ autenticado, setAutenticado }) {

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
                        setAutenticado(true);
                        alertify.success('Bienvenido!!!');
                    } else {
                        alertify.error('Intenta nuevamente por favor');
                        setAutenticado(false);
                        setLoginerr(true);
                        alert("Datos Incorrectos");
                        setUsuario({
                            email: '',
                            password: ''
                        });
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
                autenticado === true ?
                    <Alert variant='success'>
                        Usuario Logueado
                </Alert>
                    :
                    <Card className='my-2 text-center px-5'>
                        {loginerr ? <Alert variant='danger' className='mt-2'> Email o contraseña incorrecto/s </Alert> : ""}
                        <Card.Body>

                            <Form onSubmit={onSubmitLogin}>
                                <Form.Group controlId="formLoginEmail" className='pt-1 text-left'>
                                    <Form.Label className='pl-2'>
                                        <Image src={ImgEmail} alt='' className='mr-2' />Email
                                    </Form.Label>
                                    <Form.Control
                                        type="email"
                                        required
                                        name="email"
                                        placeholder="Ingrese su email"
                                        onChange={onChangeUsuario}
                                        value={email}
                                        maxLength='50'
                                        pattern='(?=^.{5,50}$)([A-Za-z0-9_.-]+@[A-Za-z0-9_.-]+\.[A-Za-z]{2,5})'
                                        onKeyPress={onKeyPressValidateEmail}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formLoginPassword" className='pt-3 text-left'>
                                    <Form.Label className='pl-2'>
                                        <Image src={ImgPass} alt='' className='mr-2' /> Password
                                    </Form.Label>
                                    <Form.Control
                                        type="password"
                                        required
                                        name="password"
                                        placeholder="Ingrese su password"
                                        onChange={onChangeUsuario}
                                        value={password}
                                        minLength='3'
                                        maxLength='20'
                                        pattern='[a-zA-Z0-9!?-_]{3,20}'
                                        onKeyPress={onKeyPressValidatePassword}
                                    />
                                </Form.Group>
                                <Button
                                    variant="warning"
                                    block
                                    className='mr-3 font-weight-bold'
                                    type="submit">INGRESA AL SITIO
                                </Button>
                                <p className='text-center text-dark mt-3'>
                                    <Link to="/register">
                                        <Image src={ImgAdd} alt='' className='mr-2' />Crear usuario
                                    </Link>
                                </p>
                            </Form>
                            <Image width='50%' src={Perritos} alt='' className='text-center' />

                        </Card.Body>
                    </Card>
            }
        </Container>


    )
}
