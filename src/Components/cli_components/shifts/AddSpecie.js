import React, { useState } from 'react'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'

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
        await fetch(process.env.REACT_APP_BACKEND_URL + "addSpecie", {
            method: 'POST',
            body: JSON.stringify(shifts),
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        }).then(async res => await res.json())
            .then(
                (result) => {
                    if (result.success) {
                        props.loadSpecie.getspecie();
                    } else {
                        alert("Ocurrio un Error, reintente nuevamente : " + result.msg);
                    }
                },
                (error) => {
                    alert("Ocurrio un Error, reintente nuevamente");
                }
            );
    }


    return (
        <Container fluid className='bg-white p-2 m-2 border shadow'>
            <h1 className="AdmTitle"> Registro de Especie </h1>
            <Row className="mt-5">
                <Col>
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
                            minLength='3'
                            maxLength='20'
                            pattern='[a-zA-Z0-9!?-_ ]{3,50}'
                            required

                        />
                    </Form.Group>
                    <Button
                        className="mr-3"
                        variant="primary"
                        type="submit">Registrar Especie
                    </Button>
                    </Form>
                </Col>
                
            </Row>
        </Container>

    )
}