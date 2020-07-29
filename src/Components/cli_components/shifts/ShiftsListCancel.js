import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import LogoOps from '../../resources/logoopps.png'

export default function ShiftsListCancel(props) {

    return (

        <Container fluid>
            <h4 className="AdmTitle">Turnos Cancelados/Pasados</h4>
            <Row className="d-flex justify-content-center">
                <Col xs={11}>
                    <Row className="mt-1" style={{
                        backgroundColor: 'orange'
                    }}>
                        <Col><h5>Fecha </h5></Col>
                        {props.userState.isAdmin ?
                            <Col><h5>Cliente</h5></Col> : ""}
                        <Col><h5>Especialidad </h5> </Col>
                        <Col><h5>Especie </h5> </Col>
                        <Col><h5>Mascota </h5> </Col>
                    </Row>

                    {
                        props.shifts.length > 0 ?
                            props.shifts.map(shift => (

                                shift.state === true ?

                                    <Row className="mt-2 d-flex align-items-center">
                                        <Col>{new Date(shift.dateshifts).toISOString().slice(0, 10)} </Col>

                                        {props.userState.isAdmin ?
                                            <Col>{shift.users[0] ? shift.users[0].nombre : "SIN USUARIO"}</Col>
                                            : ""}
                                        <Col>{shift.specialitys[0] ? shift.specialitys[0].name : "SIN ESPECIALIDAD"}</Col>
                                        <Col>{shift.species[0] ? shift.species[0].name : "SIN ESPECIE"}</Col>
                                        <Col>{shift.petname.length > 0 ? shift.petname : "SIN MASCOTA"} </Col>

                                    </Row>
                                    : ""

                            )) : <Image fluid src={LogoOps} />
                    }

                </Col>
            </Row>
        </Container>
    )
}