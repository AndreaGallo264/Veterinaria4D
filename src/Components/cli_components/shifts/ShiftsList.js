import React, { useState, useEffect } from 'react'
import { Container, Row, Card, Button , Image } from 'react-bootstrap'
import LogoOps from '../../resources/logoopps.png'

export default function ShiftsList(props) {

    const [listShips, setListShips] = useState([]);
    const [editShifts, setEditShips] = useState([]);


    const GetShifts = () => {
        getShifts();
    }


    const getShifts = async () => {

        if (props.userState.isAdmin) {
            const request = await fetch(process.env.REACT_APP_BACKEND_URL + "listShifts", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': props.userState.token
                }
            });
            const response = await request.json();
            setListShips(response.data);
        } else {
            if (props.userState.usuario) {
                const request = await fetch(process.env.REACT_APP_BACKEND_URL + "listShiftsByUsr/" + props.userState.usuario._id, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': props.userState.token
                    }
                });
                const response = await request.json();
                setListShips(response.data);
            }
        }

    };

    const cancshift = async (shift) => {

        shift.state = true;
        const request = await fetch(process.env.REACT_APP_BACKEND_URL + "editShifts/" + shift._id, {
            method: 'PUT',
            body: JSON.stringify(shift),
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        });
        const response = await request.json();
        setEditShips(response);
    }


    useEffect(() => {
        GetShifts();
        props.setLoadShifs({ LoadList: GetShifts });
    }, []);

    useEffect(() => {
        GetShifts();
        props.setLoadShifs({ LoadList: GetShifts });
    }, [editShifts]);

    return (
        <Container className="mt-5 text-white">
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-2">

                {
                     listShips.length > 0 ?
                    listShips.map(listShips => (

                        <Card bg={listShips.state === false ? "success" : "danger"} border="dark" style={{ width: "44rem" }}> <Card.Body>

                            <Card.Title>Turno {new Date(listShips.dateshifts).toISOString().slice(0, 10)}</Card.Title>
                            <Row>
                                Especialidad : {listShips.specialitys[0] ? listShips.specialitys[0].name : "SIN ESPECIALIDAD"}
                            </Row>
                            <Row>
                                Especie : {listShips.species[0] ? listShips.species[0].name : "SIN ESPECIE"}
                            </Row>
                            <Row>
                                Mascota = {listShips.petname}
                            </Row>

                            <Row>
                                Estado = {listShips.state === false ? "CONFIRMADO" : "CANCELADO/CONSULTAR"}
                            </Row>
                        </Card.Body>
                            <Card.Footer>

                                {listShips.state === false ? <Button variant="warning" onClick={() => cancshift(listShips)}>Cancelar Turno</Button> : ""}

                            </Card.Footer>
                        </Card>

                    ))
                    : <Image fluid src={LogoOps} />
                }

            </Row>
        </Container>
    )
}