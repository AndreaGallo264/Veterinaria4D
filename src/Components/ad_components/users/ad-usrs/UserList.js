import React, { useState, useEffect } from 'react';
import { Container, Row, Card , Button ,Image } from 'react-bootstrap'
import LogoOps from '../../../resources/logoopps.png'

export default function UserList(props) {

    const [listUsr, setListUsr] = useState([]);
    const [isAdmin , setIsAdmin] = useState([]);

    const GetListUsr = () => {
        getusrs();
    }


    const getusrs = async () => {

        const request = await fetch(process.env.REACT_APP_BACKEND_URL + "listUsrs", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        });
        const response = await request.json();
        if(response.success === true){
            setListUsr(response.users);
        }
       

    };

    const saveAdmin = (listusr , isadmin) => {
        listusr.isadmin = isadmin;
        EditUsr(listusr );
    }

    const EditUsr = async (listusr) => {

        const request = await fetch(process.env.REACT_APP_BACKEND_URL+"auth/"+listusr._id, {
            method: 'PUT',
            body: JSON.stringify(listusr),
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        });
        const response = await request.json();
        if(response.success){
            setIsAdmin(response);
        }  

    }

    useEffect(() => {
        GetListUsr();
        //props.setLoadShifs({ LoadUsr: GetListUsr });
    }, [isAdmin]);

    return (
        <Container className="mt-5">
            <h1>Lista de Usuarios</h1>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-2">

                {
                    listUsr.length > 0?
                    listUsr.map(listusr => (

                        <Card border="dark" style={{ width: "44rem" }}> <Card.Body>

                            <Card.Title>Usuario : {listusr.nombre} </Card.Title>
                            <Row>
                                Es Administrador : {listusr.isadmin?"Administrador":"Cliente"}
                            </Row>
                            <Row>
                                Fecha de Creacion : {listusr.Date}
                            </Row>
                            <Row>
                                Email : {listusr.email}
                            </Row>
                            <Card.Footer>
                            <Button variant="warning" className="mx-2" onClick={() => { saveAdmin(listusr , true)}}>Hacer Administrador</Button>
                            <Button variant="danger"  onClick={() => {saveAdmin(listusr , false)}} >Quitar Acceso Administrador</Button>
                            </Card.Footer>
                        </Card.Body>
                        </Card>

                    ))
                    :<Image fluid src={LogoOps} />
                }

            </Row>
        </Container>
    )

}