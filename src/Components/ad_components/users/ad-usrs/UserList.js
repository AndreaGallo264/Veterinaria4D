import React, { useState, useEffect } from 'react';
import { Container, Row, Card, Button, Image } from 'react-bootstrap'
import LogoOps from '../../../resources/logoopps.png'

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
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-2">

                {
                    listUsr.length > 0 ?
                        listUsr.map(listusr => (

                            <Card border="dark" style={{ width: "44rem" }}> <Card.Body>

                                <Card.Title>Usuario : {listusr.nombre} </Card.Title>
                                <Row>
                                    Es Administrador : {listusr.isadmin ? "Administrador" : "Cliente"}
                                </Row>
                                <Row>
                                    Fecha de Creacion : {listusr.Date}
                                </Row>
                                <Row>
                                    Email : {listusr.email}
                                </Row>
                                <Card.Footer>
                                    {listusr.isadmin ? <Button variant="danger" onClick={() => { saveAdmin(listusr, false) }} >Quitar Acceso Administrador</Button>
                                        : <Button variant="warning" className="mx-2" onClick={() => { saveAdmin(listusr, true) }}>Hacer Administrador</Button>
                                    }
                                </Card.Footer>
                            </Card.Body>
                            </Card>

                        ))
                        : <Image fluid src={LogoOps} />
                }

            </Row>
        </Container>
    )

}