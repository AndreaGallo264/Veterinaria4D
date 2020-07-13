import React, { useState, useEffect } from 'react'
import { ListGroup, Container, Button, Row, Col ,Image } from 'react-bootstrap'
import LogoOps from '../../resources/logoopps.png'


export default function ListSpeciality(props) {

    const [listSpeciality, setlistSpeciality] = useState([]);
    const [deletSpeciality, setDeleteSpeciality] = useState([]);

    // Obtener las Categorias
    const getSpeciality = async () => {
        const request = await fetch(process.env.REACT_APP_BACKEND_URL + "listSpeciality", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token

            }
        });

        const response = await request.json();
        if (response.success) {
            setlistSpeciality(response.specialitys);
        }
    }

    const deleteSpeciality = async (item) => {

        const request = await fetch(process.env.REACT_APP_BACKEND_URL + "deleteSpeciality/" + item._id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        });

        const response = await request.json();
        setDeleteSpeciality(response);
    }

    useEffect(() => {
        getSpeciality();
        props.setLoadSpeciality({ getSpeciality: getSpeciality });
    }, [deletSpeciality]);

    useEffect(() => {
        getSpeciality();
        props.setLoadSpeciality({ getSpeciality: getSpeciality });
    }, []);

    return (

        <Container>
            <h1>Listado de Especialidades</h1>
            <ListGroup className="list-group-flush">

                {
                    listSpeciality.length > 0?
                    listSpeciality.map(function (item, i) {

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
                                    <Button variant="danger" onClick={() => deleteSpeciality(item)}>X</Button>
                                </Col>
                            </Row>)

                    })
                    : <Image fluid src={LogoOps} />
                }
            </ListGroup>
        </Container>

    )
}