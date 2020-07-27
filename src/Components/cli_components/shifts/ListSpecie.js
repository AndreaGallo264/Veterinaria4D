import React, { useState, useEffect } from 'react'
import { ListGroup, Container, Button, Row, Col, Image } from 'react-bootstrap'
import LogoOps from '../../resources/logoopps.png'


export default function ListSpecie(props) {

    const [listSpecie, setlistSpecie] = useState([]);
    const [deletSpecie, setDeleteSpecie] = useState([]);

    const getspecie = async () => {
        await fetch(process.env.REACT_APP_BACKEND_URL + "listSpecie", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token

            }
        }).then(async res => await res.json())
            .then(
                (result) => {
                    if (result.success) {
                        setlistSpecie(result.species);
                    }
                },
                (error) => {
                    alert("Ocurrio un Error, reintente nuevamente");
                }
            );
    }

    const deletespecie = async (item) => {

        await fetch(process.env.REACT_APP_BACKEND_URL + "deleteSpecie/" + item._id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        }).then(async res => await res.json())
            .then(
                (result) => {
                    if (result.success) {
                        setDeleteSpecie(result);
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
        getspecie();
        props.setLoadSpecie({ getspecie: getspecie });
    }, [deletSpecie]);

    useEffect(() => {
        getspecie();
        props.setLoadSpecie({ getspecie: getspecie });
    }, []);

    return (

        <Container fluid>
            <h1>Listado de Especies</h1>
            <ListGroup className="list-group-flush">

                {
                    listSpecie.length > 0 ?
                        listSpecie.map(function (item, i) {

                            return (
                                <Row fluid>
                                    <Col >
                                        <ListGroup.Item
                                            as="button"
                                            className="list-group-item-action"
                                            dataSpecie={JSON.stringify(item)}
                                        >{item.name}
                                        </ListGroup.Item>
                                    </Col>
                                    <Col xs={1}>
                                        <Button variant="danger" onClick={() => deletespecie(item)}>X</Button>
                                    </Col>
                                </Row>)

                        })
                        : <Image fluid src={LogoOps} />
                }
            </ListGroup>
        </Container>

    )
}