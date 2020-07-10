import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import Back from '../../resources/backprof.jpg'

export default function help() {

    let imgUrl = Back ; 

    return (

        <Container fluid style={{
            backgroundImage: `url(${ imgUrl })` , 
            backgroundRepeat  : 'repeat',
            backgroundPosition: 'center',
        }}>
            <Row>
                <Col className="text-center text-gray"><h2>Preguntas Frecuentes</h2></Col>
            </Row>
            <Row className="mt-3">
                

            </Row>
        </Container>
    )
}