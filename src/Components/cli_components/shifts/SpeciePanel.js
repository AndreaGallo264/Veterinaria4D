import React , {useState} from 'react'
import {Container , Col , Row} from 'react-bootstrap'

import AddSpecie  from './AddSpecie'
import ListSpecie from './ListSpecie'

export default function SpeciePanel(props){
    const  [loadSpecie , setLoadSpecie] = useState([]) ; 
    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <Col xs={8} sm={6} md={6}><AddSpecie  userState={props.userState} loadSpecie={loadSpecie} setLoadSpecie={setLoadSpecie}  /></Col>
                <Col xs={8} sm={6} md={6}><ListSpecie userState={props.userState} loadSpecie={loadSpecie} setLoadSpecie={setLoadSpecie}  /></Col>
            </Row>
        </Container>


    )
}