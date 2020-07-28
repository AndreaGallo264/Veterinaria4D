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
    const [selectedtime, setselectedtime] = useState([]);

    const time = [
        { id: 1, value: "9:00 a 9:30" },
        { id: 2, value: "9:30 a 10:00" },
        { id: 3, value: "10:00 a 10:30" },
        { id: 4, value: "10:30 a 11:00" },
        { id: 5, value: "11:30 a 12:00" },
    ]

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

    const selecttime = async (e) => {
        setselectedtime(e);
    }

    const getshiftsdisponibility = async () => {
        await fetch(process.env.REACT_APP_BACKEND_URL + "listShiftsbydatetime/" + dateshifts + "/" + selectedtime+"/"+ selectspeciality, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        }).then(async res => await res.json())
            .then(
                (result) => {
                    if (result.success) {
                        alert("Turno No Disponible. Elija Otro turno");
                        //setselectedtime([]);
                    } else {
                        setselectedtime(selectedtime);
                    }
                },
                (error) => {
                   // alert("Ocurrio un Error, reintente nuevamente");
                }
            );
    }


    const AddShifts = async (shifts) => {

        shifts.specie = selectspecie;
        shifts.speciality = selectspeciality;
        shifts.user = props.userState.usuario;
        shifts.timeshifts = selectedtime;
        if (selectedtime.length > 0 && selectspeciality.length >0 && selectspecie.length>0  ) {
            await fetch(process.env.REACT_APP_BACKEND_URL + "addShifts", {
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
                            props.loadshifts.LoadList();
                            setShifts({
                                dateshifts: '',
                                petname: ''
                            })
                            setSelectSpeciality([]);
                            setSelectSpecie([]);
                            setselectedtime([]);
                        } else {
                            alert("Ocurrio un Error, reintente nuevamente : "+ result.msg);
                        }
                    },
                    (error) => {
                        alert("Ocurrio un Error, reintente nuevamente");
                    }
                );
        } else {
            alert("Verifique : Horario, Especie , Especialidad");
        }
    }

    const getSpecie = async () => {
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
                        setListSpecie(result.species);
                    } else {
                        //alert("Ocurrio un Error, reintente nuevamente");
                    }
                },
                (error) => {
                    alert("Ocurrio un Error, reintente nuevamente");
                }
            );
    };

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
                        setListSpeciality(result.specialitys);
                    } else {
                        //alert("Ocurrio un Error, reintente nuevamente");
                    }
                },
                (error) => {
                    alert("Ocurrio un Error, reintente nuevamente");
                }
            );
    };

    useEffect(() => {
        getSpecie();
        getSpeciality();
    }, []);

    useEffect(() => {
        getshiftsdisponibility();
    }, [selectspeciality]);

    useEffect(() => {
        getshiftsdisponibility();
    }, [selectspecie]);

    useEffect(() => {
        getshiftsdisponibility();
    }, [selectedtime]);


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
                                        min={new Date().toISOString().split("T")[0]}

                                    />
                                </Form.Group>

                                <Form.Group controlId="timeshifts">
                                    <Form.Label>Hora</Form.Label>
                                    <Form.Control as="select" onChange={e => selecttime(e.target.value)} >
                                        <option key="all" value="all" >
                                            Todos...
                                        </option>
                                        {
                                            time.length > 0 ?
                                                time.map(time => {
                                                    return (
                                                        <option key={time._id} value={time._id} >
                                                            {time.value}
                                                        </option>
                                                    );
                                                }) : ""}

                                    </Form.Control>
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