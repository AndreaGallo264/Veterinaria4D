import React , {useState} from 'react'
import {Container ,Row , Col} from 'react-bootstrap'

//Components 
import ShiftsList from './ShiftsList'
import AddShifts from './AhhShifts'

export default function ShiftsPanel(props){

    const [loadshifts , setLoadShifs] = useState([]) ; 
    return (
        <Container>
            <Row className="d-flex justify-content-center">
                { props.userState.isAdmin? "" : <Col>  <AddShifts  loadshifts={loadshifts} setLoadShifs={setLoadShifs} userState={props.userState}  /> </Col>}
                <Col xs={12}>  <ShiftsList loadshifts={loadshifts} setLoadShifs={setLoadShifs} userState={props.userState} /> </Col>
            </Row>
        </Container>
      
    )
}