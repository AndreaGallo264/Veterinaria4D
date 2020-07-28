import React, { useState, useEffect } from 'react';
import { Container, Row, Card, Button, Image, Col } from 'react-bootstrap'
import LogoOps from '../../../resources/logoopps.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faCrown } from '@fortawesome/free-solid-svg-icons';

export default function UserList(props) {

    const [listUsr, setListUsr] = useState([]);
    const [isAdmin, setIsAdmin] = useState([]);

    const GetListUsr = () => {
        getusrs();
    }

    const getusrs = async () => {
        await fetch(process.env.REACT_APP_BACKEND_URL + "listUsrs", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        }).then(async res => await res.json())
            .then(
                (result) => {
                    if (result.success === true) {
                        setListUsr(result.users);
                    } else {
                       // alert("Ocurrio un Error, reintente nuevamente");
                    }
                },
                (error) => {
                    alert("Ocurrio un Error, reintente nuevamente");
                }
            );
    };

    const saveAdmin = (listusr, isadmin) => {
        listusr.isadmin = isadmin;
        EditUsr(listusr);
    }

    const EditUsr = async (listusr) => {
        await fetch(process.env.REACT_APP_BACKEND_URL + "auth/" + listusr._id, {
            method: 'PUT',
            body: JSON.stringify(listusr),
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        }).then(async res => await res.json())
            .then(
                (result) => {
                    if (result.success) {
                        setIsAdmin(result);
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
        GetListUsr();
    }, [isAdmin]);

    return (
        <Container className="bg-white">
            <h1>Lista de Usuarios</h1>
            <Row className="row-cols-1">

                {
                    listUsr.length > 0 ?
                        listUsr.map(listusr => (

                            <Card border="dark" style={{ width: "44rem" }} className="m-1"> <Card.Body>
                                <Card.Title className="text-orange-fenix">Usuario : {listusr.nombre} 
                                {listusr.isadmin && <FontAwesomeIcon icon={faCrown} className="ml-2" />}
                                </Card.Title>
                                <Row>
                                    <Col xs={12} sm={6} md={8}>
                                    Rol : {listusr.isadmin ? "Administrador" : "Cliente"} <br/>
                                    Fecha de Creacion : {listusr.Date} <br/>
                                    Email : {listusr.email}
                                    </Col>

                                    <Col xs={12} sm={6} md={4} className="d-flex justify-content-center">
                                    {listusr.isadmin ? <Button variant="danger" onClick={() => { saveAdmin(listusr, false) }} >
                                    <FontAwesomeIcon icon={faTimes} size="2x" /> <br/>
                                        Quitar Admin</Button>
                                        : <Button variant="warning" className="mx-2" onClick={() => { saveAdmin(listusr, true) }}>  
                                        <FontAwesomeIcon icon={faCheck} size="2x" /> <br/>
                                            Hacer Admin</Button>
                                    }
                                    </Col>
                                </Row>
                            </Card.Body>
                            </Card>

                        ))
                        : <Image fluid src={LogoOps} />
                }

            </Row>
        </Container>
    )

}