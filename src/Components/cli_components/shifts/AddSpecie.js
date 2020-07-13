import React, { useState } from 'react'
import { Container, Col, Row, Card, Form , Button } from 'react-bootstrap'

export default function AddSpecie(props) {

    const [specie, setSpecie] = useState({
        name: ''
    });

    const { name } = specie;

    const onChangeSpecie = e => {
        setSpecie({
            ...specie,
            [e.target.name]: e.target.value
        });
    };
    
    const onSubmitSpecie = e => {
        e.preventDefault();

        AddSpecie(specie);

        setSpecie({
            name: ''
        })
    }

    const AddSpecie = async (shifts) => {
        /*const request =*/ await fetch(process.env.REACT_APP_BACKEND_URL + "addSpecie", {
            method: 'POST',
            body: JSON.stringify(shifts),
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        });
        //const response = await request.json()
        props.loadSpecie.getspecie();
    }


    return (
        <Container fluid>
            <Row className="mt-5">
                <Col >
                    <Card bg="light">
                        <Card.Header>Registro de Especie</Card.Header>
                        <Card.Body>
                            <Form onSubmit={onSubmitSpecie}>
                                <Form.Group controlId="name">
                                    <Form.Label>
                                        Nombre de Especie
                                </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder="Ingrese Nombre"
                                        onChange={onChangeSpecie}
                                        value={name}

                                    />
                                </Form.Group>
                                <Button
                                    className="mr-3"
                                    variant="primary"
                                    type="submit">Registrar Especie
                            </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}