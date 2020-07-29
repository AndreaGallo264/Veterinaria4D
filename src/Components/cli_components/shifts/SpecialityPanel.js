import React , {useState} from 'react'
import {Container , Col , Row} from 'react-bootstrap'

import AddSpeciality  from './AddSpeciality'
import ListSpeciality from './ListSpeciality'

export default function SpecialityPanel(props){
    const  [loadSpeciality , setLoadSpeciality] = useState([]) ; 
    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <Col xs={8} sm={6}><AddSpeciality  userState={props.userState} loadSpeciality={loadSpeciality} setLoadSpeciality={setLoadSpeciality}  /></Col>
                <Col xs={8} sm={6}><ListSpeciality userState={props.userState} loadSpeciality={loadSpeciality} setLoadSpeciality={setLoadSpeciality}  /></Col>
            </Row>
        </Container>
    )
}