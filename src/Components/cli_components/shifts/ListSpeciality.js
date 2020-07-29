import React, { useState, useEffect } from 'react'
import { ListGroup, Container, Button, Row, Col, Image } from 'react-bootstrap'
import LogoOps from '../../resources/logoopps.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';

export default function ListSpeciality(props) {

    const [listSpeciality, setlistSpeciality] = useState([]);
    const [deletSpeciality, setDeleteSpeciality] = useState([]);

    const getSpeciality = async () => {
        await fetch(process.env.REACT_APP_BACKEND_URL + "listSpeciality", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token

            }
        }).then(async res => await res.json())
            .then(
                (result) => {
                    if (result.success) {
                        setlistSpeciality(result.specialitys);
                    }
                },
                (error) => {
                    alert("Ocurrio un Error, reintente nuevamente");
                }
            );
    }

    const deleteSpeciality = async (item) => {

        await fetch(process.env.REACT_APP_BACKEND_URL + "deleteSpeciality/" + item._id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        }).then(async res => await res.json())
        .then(
            (result) => {
                if (result.success) {
                    setDeleteSpeciality(result);
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
        getSpeciality();
        props.setLoadSpeciality({ getSpeciality: getSpeciality });
    }, [deletSpeciality]);

    useEffect(() => {
        getSpeciality();
        props.setLoadSpeciality({ getSpeciality: getSpeciality });
    }, []);

    return (

        <Container  className='bg-white p-2 m-2 border shadow'>
            <h1 className="AdmTitle">Listado de Especialidades</h1>
            <ListGroup className="list-group-flush">

                {
                    listSpeciality.length > 0 ?
                        listSpeciality.map(function (item, i) {

                            return (
                                <Row className="d-flex align-items-center justify-content-center">
                                    <Col xs={9}>
                                        <ListGroup.Item
                                            as="button"
                                            className="list-group-item-action"
                                            dataSpecie={JSON.stringify(item)}
                                        >{item.name}
                                        </ListGroup.Item>
                                    </Col>
                                        <Button variant="danger" onClick={() => deleteSpeciality(item)}>
                                        <FontAwesomeIcon icon={faTrashAlt}/>
                                        </Button>
                                </Row>)

                        })
                        : <Image fluid src={LogoOps} />
                }
            </ListGroup>
        </Container>

    )
}