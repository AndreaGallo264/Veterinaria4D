import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Card, Form, Button } from 'react-bootstrap'

export default function AddShifts(props) {

    const [shifts, setShifts] = useState({
        dateshifts: '',
        petname: ''
    });

    const [listspecie, setListSpecie] = useState([]);
    const [listspeciality, setListSpeciality] = useState([]);

    const [selectspeciality, setSelectSpeciality] = useState([]);
    const [selectspecie, setSelectSpecie] = useState([]);

    const { dateshifts, petname } = shifts;
 
    const onChangeShifts = e => {
        setShifts({
            ...shifts,
            [e.target.name]: e.target.value
        });
    };
  
    const onSubmitShifts = e => {
        e.preventDefault();
        AddShifts(shifts);
    }

    const selectedSpeciality = (speciality) => {
        setSelectSpeciality(speciality);
    }

    const selectedSpecie = (specie) => {
        setSelectSpecie(specie);
    }


    const AddShifts = async (shifts) => {
        
        shifts.specie = selectspecie;
        shifts.speciality = selectspeciality;
        shifts.user = props.userState.usuario;
        /*const request =*/ await fetch(process.env.REACT_APP_BACKEND_URL + "addShifts", {
            method: 'POST',
            body: JSON.stringify(shifts),
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        });
        //const response = await request.json() ; 
        props.loadshifts.LoadList();
    }

    //GetSpecie - Speciality
    const getSpecie = async () => {
        const request = await fetch(process.env.REACT_APP_BACKEND_URL + "listSpecie", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        });
        const response = await request.json();
        if (response.success) {
            setListSpecie(response.species);
        }
    };

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
            setListSpeciality(response.specialitys);
        }
    };

    useEffect(() => {
        getSpecie();
        getSpeciality();
    }, []);


    return (
        <Container>
            <Row className="mt-5">
                <Col xs={12} sm={8} md={6} className="mx-auto">
                    <Card bg="light">
                        <Card.Header>Registro de Turno</Card.Header>
                        <Card.Body>
                            <Form onSubmit={onSubmitShifts}>
                                <Form.Group controlId="dateshifts">
                                    <Form.Label>
                                        Fecha
                                </Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="dateshifts"
                                        placeholder="Ingrese Fecha"
                                        onChange={onChangeShifts}
                                        value={dateshifts}
                                        required

                                    />
                                </Form.Group>
                                <Form.Group controlId="speciality">
                                    <Form.Label>Especie</Form.Label>
                                    <Form.Control as="select" defaultValue="" required onChange={e => selectedSpecie(e.target.value)} >
                                        <option >
                                            Seleccione una Opcion...
                                        </option>
                                        {listspecie.length > 0 ?
                                            listspecie.map(specie => {
                                                return (
                                                    <option key={specie._id} value={specie._id} genero={specie._id}>
                                                        {specie.name}
                                                    </option>
                                                );
                                            }) : ""}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formRegistroPassword">
                                    <Form.Label>Especialidad</Form.Label>
                                    <Form.Control as="select" defaultValue="" required onChange={e => selectedSpeciality(e.target.value)} >
                                        <option >
                                            Seleccione una Opcion...
                                        </option>
                                        {
                                            listspeciality.length > 0 ?
                                                listspeciality.map(speciality => {
                                                    return (
                                                        <option key={speciality._id} value={speciality._id} genero={speciality._id}>
                                                            {speciality.name}
                                                        </option>
                                                    );
                                                }) : ""}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="name">
                                    <Form.Label>
                                        Nombre de Mascota
                                </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="petname"
                                        placeholder="Ingrese Nombre"
                                        onChange={onChangeShifts}
                                        value={petname}
                                        required

                                    />
                                </Form.Group>
                                <Button
                                    className="mr-3"
                                    variant="primary"
                                    type="submit">Registrar Turno
                            </Button>

                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}