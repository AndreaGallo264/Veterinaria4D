import React, { useState } from 'react'
import { Container, Col, Row, Card, Form , Button } from 'react-bootstrap'

export default function AddSpeciality(props) {

    const [speciality, setSpeciality] = useState({
        name: ''
    });

    const { name } = speciality;

    const onChangeSpeciality = e => {
        setSpeciality({
            ...speciality,
            [e.target.name]: e.target.value
        });
    };
   
    const onSubmitSpecie = e => {
        e.preventDefault();
        AddSpeciality(speciality);
        setSpeciality({
            name: ''
        })
    }

    const AddSpeciality = async (shspecialityifts) => {
  
        /*const request =*/ await fetch(process.env.REACT_APP_BACKEND_URL + "addSpeciality", {
            method: 'POST',
            body: JSON.stringify(speciality),
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        });
        //const response = await request.json()
        props.loadSpeciality.getSpeciality();
    }


    return (
        <Container>
            <Row className="mt-5" fluid>
                <Col >
                    <Card bg="light">
                        <Card.Header>Registro de Especialidad</Card.Header>
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
                                        onChange={onChangeSpeciality}
                                        value={name}

                                    />
                                </Form.Group>
                                <Button
                                    className="mr-3"
                                    variant="primary"
                                    type="submit">Registrar Especialidad
                            </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}