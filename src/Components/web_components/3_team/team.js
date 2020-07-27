import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import Back from '../../resources/backprof.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNurse } from '@fortawesome/free-solid-svg-icons';

export default function team() {

    let imgUrl = Back;

    return (

        <Container fluid className='bg-white my-3'>
            <Row>
                <Col className="text-center pt-3 text-violet text-uppercase"><h2 className='font-weight-bolder'>Nuestros Equipo de Profesionales</h2></Col>
            </Row>
            <Row className="mt-3">
                <Col xs={12} md={3} className="mb-3">
                    <Image fluid width='150px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgXRbmPOBQghTjD5f1bQBp6c68bA6N_RD3i_HqBIm_Zt-OaoAa&usqp=CAU" roundedCircle />
                    <p className='text-violet font-weight-bold mt-2'><FontAwesomeIcon icon={faUserNurse} className='mr-2' />Vet. Cosme Fulanito</p>
                </Col>
                <Col xs={12} md={3} className="mb-3">
                    <Image fluid width='150px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgXRbmPOBQghTjD5f1bQBp6c68bA6N_RD3i_HqBIm_Zt-OaoAa&usqp=CAU" roundedCircle />
                    <p className='text-violet font-weight-bold mt-2'><FontAwesomeIcon icon={faUserNurse} className='mr-2' />Vet. Cosme Fulanito</p>
                </Col>
                <Col xs={12} md={3} className="mb-3">
                    <Image fluid width='150px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgXRbmPOBQghTjD5f1bQBp6c68bA6N_RD3i_HqBIm_Zt-OaoAa&usqp=CAU" roundedCircle />
                    <p className='text-violet font-weight-bold mt-2'><FontAwesomeIcon icon={faUserNurse} className='mr-2' />Vet. Cosme Fulanito</p>
                </Col>
                <Col xs={12} md={3} className="mb-3">
                    <Image fluid width='150px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgXRbmPOBQghTjD5f1bQBp6c68bA6N_RD3i_HqBIm_Zt-OaoAa&usqp=CAU" roundedCircle />
                    <p className='text-violet font-weight-bold mt-2'><FontAwesomeIcon icon={faUserNurse} className='mr-2' />Vet. Cosme Fulanito</p>
                </Col>

            </Row>
        </Container>
    )
}