import React , {useState} from 'react'
import {Container ,Row , Col, Image} from 'react-bootstrap'
import pikuImg from '../../resources/piku.jpeg';

//Components 
import ShiftsList from './ShiftsList'
import AddShifts from './AhhShifts'

export default function ShiftsPanel(props){

    const [loadshifts , setLoadShifs] = useState([]) ; 
    return (
        <Container>
            <Row className="d-flex justify-content-center align-items-center">
                { props.userState.isAdmin? "" : <Col xs={12} md={6} className="mt-3">  <AddShifts  loadshifts={loadshifts} setLoadShifs={setLoadShifs} userState={props.userState}  /> </Col>}
                <Col xs={6} md={6} className='mt-3'>
                <Image fluid width='80%' src={pikuImg} className="rounded shadow" />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>  <ShiftsList loadshifts={loadshifts} setLoadShifs={setLoadShifs} userState={props.userState} /> </Col>
            </Row>
        </Container>
      
    )
}