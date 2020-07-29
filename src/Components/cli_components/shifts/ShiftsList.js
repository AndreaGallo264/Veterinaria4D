import React, { useState, useEffect } from 'react'
import { Container, Row, Card, Button, Image, Pagination } from 'react-bootstrap'
import LogoOps from '../../resources/logoopps.png'
import ShiftsListCancel from './ShiftsListCancel'

export default function ShiftsList(props) {

    const [listShips, setListShips] = useState([]);
    const [editShifts, setEditShips] = useState([]);
    const [totalShips, setTotalShips] = useState([]);
    const [page, setpage] = useState(1);

    const GetShifts = () => {
        getShifts();
    }

    const getShifts = async () => {

        if (props.userState.isAdmin) {
            await fetch(process.env.REACT_APP_BACKEND_URL + "listShifts" + "?page=" + page + "&limit=4", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': props.userState.token
                }
            }).then(async res => await res.json())
                .then(
                    (result) => {
                        if (result.success) {
                            setTotalShips(result);
                            setListShips(result.data);
                        } else {
                            //alert("Ocurrio un Error, reintente nuevamente");
                        }
                    },
                    (error) => {
                        alert("Ocurrio un Error, reintente nuevamente");
                    }
                );
        } else {
            if (props.userState.usuario) {
                await fetch(process.env.REACT_APP_BACKEND_URL + "listShiftsByUsr/" + props.userState.usuario._id + "?page=" + page + "&limit=4", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': props.userState.token
                    }
                }).then(async res => await res.json())
                .then(
                    (result) => {
                        if (result.success) {
                            setTotalShips(result);
                            setListShips(result.data);
                        } else {
                           // alert("Ocurrio un Error, reintente nuevamente");
                        }
                    },
                    (error) => {
                       alert("Ocurrio un Error, reintente nuevamente");
                    }
                );
            }
        }
    };

    const cancshift = async (shift) => {

        shift.state = true;
        await fetch(process.env.REACT_APP_BACKEND_URL + "editShifts/" + shift._id, {
            method: 'PUT',
            body: JSON.stringify(shift),
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        }).then(async res => await res.json())
        .then(
            (result) => {
                if (result.success) {
                    setEditShips(result);
                } else {
                    alert("Ocurrio un Error, reintente nuevamente");
                }
            },
            (error) => {
                alert("Ocurrio un Error, reintente nuevamente");
            }
        );
    }

    const newpage = (number) => {
        setpage(number);
    }

    let items = [];
    for (let number = 1; number <= totalShips.totalPages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === page} >
                <Button variant="" onClick={() => newpage(number)}>{number}</Button>
            </Pagination.Item>,
        );
    }


    useEffect(() => {
        GetShifts();
        props.setLoadShifs({ LoadList: GetShifts });
    }, []);

    useEffect(() => {
        GetShifts();
        props.setLoadShifs({ LoadList: GetShifts });
    }, [editShifts]);

    useEffect(() => {
        GetShifts();
    }, [page]);

    return (
        <Container className='bg-white p-2 m-2 border shadow'>
            <h3 className="AdmTitle">Mis Próximos Turnos</h3>
            <Row className="row-cols-1 row-cols-sm-3 row-cols-md-4 d-flex justify-content-center">

                {
                    listShips.length > 0 ?
                        listShips.map(listShips => (

                            listShips.state === false ?
                                <Card bg={listShips.state === false ? "light" : "danger"} border="dark" className="m-1"> <Card.Body>

                                    <Card.Title>Turno {new Date(listShips.dateshifts).toISOString().slice(0, 10)}</Card.Title>

                                    {props.userState.isAdmin ?
                                        <Row>
                                            Cliente : {listShips.users[0] ? listShips.users[0].nombre : "SIN USUARIO"}
                                        </Row> : ""
                                    }

                                    <Row>
                                        Horario : {listShips.timeshifts ? listShips.timeshifts : "SIN HORARIO"}
                                    </Row>
                                    <Row>
                                        Especialidad : {listShips.specialitys[0] ? listShips.specialitys[0].name : "SIN ESPECIALIDAD"}
                                    </Row>
                                    <Row>
                                        Especie : {listShips.species[0] ? listShips.species[0].name : "SIN ESPECIE"}
                                    </Row>
                                    <Row>
                                        Mascota : {listShips.petname}
                                    </Row>

                                    <Row>
                                        Estado : {listShips.state === false ? "CONFIRMADO" : "CANCELADO/CONSULTAR"}
                                    </Row>
                                </Card.Body>
                                    <Card.Footer className="d-flex justify-content-center">

                                        {listShips.state === false ? <Button variant="warning" onClick={() => cancshift(listShips)}>Cancelar Turno</Button> : ""}

                                    </Card.Footer>
                                </Card>
                                : null

                        )) : <Image fluid src={LogoOps} />
                }

            </Row>
            <Row className="d-flex justify-content-center m-2">
                <ShiftsListCancel shifts={listShips} items={items} userState={props.userState} />
                <Row >
                    <Pagination>
                        <Pagination >{items}</Pagination>
                    </Pagination>
                </Row>
            </Row>
        </Container>
    )
}