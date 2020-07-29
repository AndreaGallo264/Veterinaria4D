import React, { useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import pikuImg from '../../resources/piku.jpeg';

//Components 
import ShiftsList from './ShiftsList'
import AddShifts from './AhhShifts'

export default function ShiftsPanel(props) {

    const [loadshifts, setLoadShifs] = useState([]);
    return (
        <Container>
            {props.userState.isAdmin ? "" : 
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={12} md={7} >  <AddShifts loadshifts={loadshifts} setLoadShifs={setLoadShifs} userState={props.userState} /> </Col>
                    <Col xs={6} md={12} lg={5} className="d-none d-lg-block">
                        <Image fluid width='95%' src={pikuImg} className="rounded shadow my-2" />
                    </Col>
                </Row>}
            <Row className="d-flex justify-content-center">
                <Col xs={12}>  <ShiftsList loadshifts={loadshifts} setLoadShifs={setLoadShifs} userState={props.userState} /> </Col>
            </Row>
        </Container>

    )
}