import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import Back from '../../resources/backprof.jpg'

export default function team() {

    let imgUrl = Back ; 

    return (

        <Container fluid style={{
            backgroundImage: `url(${ imgUrl })` , 
            backgroundRepeat  : 'repeat',
            backgroundPosition: 'center',
        }}>
            <Row>
                <Col className="text-center text-gray"><h2>Nuestros Equipo de Profesionales</h2></Col>
            </Row>
            <Row className="mt-3">

                <Col className="mb-3"> <Image fluid width='150px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgXRbmPOBQghTjD5f1bQBp6c68bA6N_RD3i_HqBIm_Zt-OaoAa&usqp=CAU" roundedCircle /></Col>
                <Col className="mb-3"> <Image fluid width='150px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgXRbmPOBQghTjD5f1bQBp6c68bA6N_RD3i_HqBIm_Zt-OaoAa&usqp=CAU" roundedCircle /></Col>
                <Col className="mb-3"> <Image fluid width='150px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgXRbmPOBQghTjD5f1bQBp6c68bA6N_RD3i_HqBIm_Zt-OaoAa&usqp=CAU" roundedCircle /></Col>
                <Col className="mb-3"> <Image fluid width='150px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgXRbmPOBQghTjD5f1bQBp6c68bA6N_RD3i_HqBIm_Zt-OaoAa&usqp=CAU" roundedCircle /></Col>

            </Row>
        </Container>
    )
}