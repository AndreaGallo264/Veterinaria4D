import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image, Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { onKeyPressValidateEmail, onKeyPressValidatePassword, onKeyPressLettersAndNumbers, onKeyPressLetters } from '../../../resources/CommonValidations';
import Manuela from '../../../resources/manuela_vert.jpg';
import ImgEmail from '../../../resources/mail.png';
import ImgPass from '../../../resources/security.png';
import ImgPassword from '../../../resources/password.png';
import ImgAddress from '../../../resources/address.png';
import ImgUser from '../../../resources/user.png';
export default function Register(props) {

    const [loginerr, setLoginerr] = useState(false);
    const [user, setUsr] = useState({
        nombre: '',
        email: '',
        password: '',
        passwordconfirm: '',
        address: ''
    });

    const { nombre, email, password, passwordconfirm, address } = user;

    const onChangeUsuario = e => {
        setUsr({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const onBlurText = e => {
        setUsr({
            ...user,
            [e.target.name]: e.target.value.trim()
        });
    }

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
            passwordconfirm: '',
            address: ''
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

        /*const solicitud =*/ await fetch(process.env.REACT_APP_BACKEND_URL + "auth/" + props.userState.usuario._id, {
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
            <Row className="my-3">
                <Card>
                    <Card.Header className='bg-warning text-center font-weight-bold text-uppercase'>Registro de Usuario</Card.Header>
                    <Card.Body>
                        <Form onSubmit={onSubmitRegistro}>
                            <Row>
                                <Col xs={12} md={6}>
                                    <Image src={Manuela} width='60%' rounded className='mx-auto d-block'>

                                    </Image>
                                </Col>
                                <Col xs={12} md={6} className='mt-5'>

                                    <Form.Group controlId="formRegistroNombre">
                                        <Form.Label>
                                        <Image src={ImgUser} alt='' className='mr-2'/>Nombre
                                    </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="nombre"
                                            placeholder="Ingrese su nombre"
                                            onChange={onChangeUsuario}
                                            value={nombre}
                                            required
                                            minLength='3'
                                            maxLength='20'
                                            pattern='[a-zA-Z ]{3,20}'
                                            onKeyPress={onKeyPressLetters}
                                            onBlur={onBlurText}

                                        />
                                    </Form.Group>
                                    <Row className='mt-4'>
                                    <Col xs={12}>
                                            <Form.Group controlId="formRegistroEmail">
                                                <Form.Label>
                                                <Image src={ImgEmail} alt='' className='mr-2'/>Email
                                            </Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    placeholder="Ingrese su email"
                                                    onChange={onChangeUsuario}
                                                    value={email}
                                                    required
                                                    pattern='(?=^.{5,50}$)([A-Za-z0-9_.-]+@[A-Za-z0-9_.-]+\.[A-Za-z]{2,5})'
                                                    onKeyPress={onKeyPressValidateEmail}
                                                />
                                            </Form.Group>
                                            </Col>
                                            </Row>
                                        <Row>
                                        <Col xs={12}>
                                            <Form.Group controlId="formRegisterAdress">
                                                <Form.Label>
                                                <Image src={ImgAddress} alt='' className='mr-2'/>Dirección
                                    </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="address"
                                                    placeholder="Ingrese su Dirección Postal"
                                                    onChange={onChangeUsuario}
                                                    value={address}
                                                    required
                                                    minLength='3'
                                                    maxLength='50'
                                                    pattern='[a-zA-Z0-9 ]{3,50}'
                                                    onKeyPress={onKeyPressLettersAndNumbers}
                                                    onBlur={onBlurText}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className='mt-4'>
                                        <Col xs={12} md={6}>
                                            <Form.Group controlId="formRegistroPassword">
                                                <Form.Label>
                                                    <Image src={ImgPassword} alt='' className='mr-2'/>Contraseña
                                                </Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    name="password"
                                                    placeholder="Ingrese su contraseña"
                                                    onChange={onChangeUsuario}
                                                    value={password}
                                                    required
                                                    minLength='3'
                                                    maxLength='20'
                                                    pattern='[a-zA-Z0-9!?-_]{3,20}'
                                                    onKeyPress={onKeyPressValidatePassword}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <Form.Group controlId="formRegistroPasswordconfirm">
                                                <Form.Label>
                                                    <Image src={ImgPass} alt='' className='mr-2'/>Confirmar contraseña
                                                </Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    name="passwordconfirm"
                                                    placeholder="Confirme contraseña"
                                                    onChange={onChangeUsuario}
                                                    value={passwordconfirm}
                                                    required
                                                    minLength='3'
                                                    maxLength='20'
                                                    pattern='[a-zA-Z0-9!?-_]{3,20}'
                                                    onKeyPress={onKeyPressValidatePassword}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <div className='text-center'>
                                        <Button
                                            className="mr-3 mt-4 font-weight-bold text-dark"
                                            variant="warning"
                                            block
                                            type="submit">{props.autenticado === true ? "Modificar Datos" : "Registrarme"}
                                        </Button>
                                        {props.autenticado === true ? "" :
                                            <p className="mt-2"><Link to="/login" >Iniciar sesión</Link></p>
                                        }
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>

            </Row>
        </Container>


    )
}

