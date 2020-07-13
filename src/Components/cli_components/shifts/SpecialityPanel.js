import React , {useState} from 'react'
import {Container , Col , Row} from 'react-bootstrap'

import AddSpeciality  from './AddSpeciality'
import ListSpeciality from './ListSpeciality'


export default function SpecialityPanel(props){

    const  [loadSpeciality , setLoadSpeciality] = useState([]) ; 

    return (

        <Container>
            <Row>
                <Col xs={3}><AddSpeciality  userState={props.userState} loadSpeciality={loadSpeciality} setLoadSpeciality={setLoadSpeciality}  /></Col>
                <Col xs={9}><ListSpeciality userState={props.userState} loadSpeciality={loadSpeciality} setLoadSpeciality={setLoadSpeciality}  /></Col>
            </Row>
        </Container>


    )
}