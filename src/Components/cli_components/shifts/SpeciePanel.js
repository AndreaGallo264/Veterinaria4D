import React , {useState} from 'react'
import {Container , Col , Row} from 'react-bootstrap'

import AddSpecie  from './AddSpecie'
import ListSpecie from './ListSpecie'

export default function SpeciePanel(props){
    const  [loadSpecie , setLoadSpecie] = useState([]) ; 
    return (
        <Container className='bg-white'>
            <Row>
                <Col xs={3}><AddSpecie  userState={props.userState} loadSpecie={loadSpecie} setLoadSpecie={setLoadSpecie}  /></Col>
                <Col xs={9}><ListSpecie userState={props.userState} loadSpecie={loadSpecie} setLoadSpecie={setLoadSpecie}  /></Col>
            </Row>
        </Container>


    )
}