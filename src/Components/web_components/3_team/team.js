import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNurse } from '@fortawesome/free-solid-svg-icons';

export default function team() {

    return (
        <div className='shadow rounded bg-white my-3'>
            <h2 className='font-weight-bolder text-center pt-3 text-orange-fenix text-uppercase'>
                <FontAwesomeIcon icon={faUserNurse} className='mr-2' />    Nuestros Equipo de Profesionales
            </h2>
            <Row className="mt-3">
                <Col xs={12} md={3} className="mb-3 text-center">
                    <Image fluid width='150px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgXRbmPOBQghTjD5f1bQBp6c68bA6N_RD3i_HqBIm_Zt-OaoAa&usqp=CAU" roundedCircle />
                    <p className='text-orange-fenix font-weight-bold mt-2'><FontAwesomeIcon icon={faUserNurse} className='mr-2' />Vet. Alguito</p>
                </Col>
                <Col xs={12} md={3} className="mb-3 text-center">
                    <Image fluid width='150px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgXRbmPOBQghTjD5f1bQBp6c68bA6N_RD3i_HqBIm_Zt-OaoAa&usqp=CAU" roundedCircle />
                    <p className='text-orange-fenix font-weight-bold mt-2'><FontAwesomeIcon icon={faUserNurse} className='mr-2' />Vet. Alguito</p>
                </Col>
                <Col xs={12} md={3} className="mb-3 text-center">
                    <Image fluid width='150px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgXRbmPOBQghTjD5f1bQBp6c68bA6N_RD3i_HqBIm_Zt-OaoAa&usqp=CAU" roundedCircle />
                    <p className='text-orange-fenix font-weight-bold mt-2'><FontAwesomeIcon icon={faUserNurse} className='mr-2' />Vet. Alguito</p>
                </Col>
                <Col xs={12} md={3} className="mb-3 text-center">
                    <Image fluid width='150px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgXRbmPOBQghTjD5f1bQBp6c68bA6N_RD3i_HqBIm_Zt-OaoAa&usqp=CAU" roundedCircle />
                    <p className='text-orange-fenix font-weight-bold mt-2'><FontAwesomeIcon icon={faUserNurse} className='mr-2' />Vet. Alguito</p>
                </Col>

            </Row>
        </div>
    )
}