import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Back from '../../resources/backfenix.jpg';
import Logo from '../../resources/logo.png';
import tobyImg from '../../resources/toby.png';
import sansonImg from '../../resources/sanson.jpeg';
import oliverImg from '../../resources/oliver.jpeg';
import chanchoImg from '../../resources/chancho.jpeg';
import pierreImg from '../../resources/pierre.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingMedical, faPaw } from '@fortawesome/free-solid-svg-icons';
import './services.css';

export default function services() {

    let imgUrl = Back;

    return (
        <section id="aboutus">
            <Row className='bg-white mb-2 pb-5'>
                    <Col>
                        <Row className="mt-5 justify-content-center mb-3 ">
                            <h2 className="text-warning font-weight-bolder text-uppercase"> <FontAwesomeIcon icon={faPaw} className='mr-2' />Nuestros clientitos </h2>
                        </Row>
                        <Row className="mt-5">
                            <Col xs={12} md={3}>
                                <Image fluid width='100%' src={sansonImg} roundedCircle />
                            </Col>
                            <Col xs={12} md={3} className='cols-margin-top'>
                                <Image fluid width='100%' src={oliverImg} roundedCircle />
                            </Col>
                            <Col xs={12} md={3} className='cols-margin-top'>
                                <Image fluid width='100%' src={chanchoImg} roundedCircle />
                            </Col>
                            <Col xs={12} md={3} className='cols-margin-top'>
                                <Image fluid width='100%' src={pierreImg} roundedCircle />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            <Container fluid className='pl-5 background-gradient bg-white'>
                
                <Row>
                    <Col>
                        <Row className="mt-5 justify-content-center mb-3 ">
                            <h2 className="text-warning font-weight-bolder text-uppercase"> <FontAwesomeIcon icon={faHandHoldingMedical} className='mr-2' />Nuestros Servicios </h2>
                        </Row>
                        <Row>
                            <p className="text-gray text-justify text-center font-weight-bold px-4">
                                Brindamos la mejor atención veterinaria para tu mascota. Para ello, seleccionamos los mejores profesionales veterinarios, quienes continúan en capacitación y formación constante, para darle la más cálida y profesional atención a tu mascota.
                            </p>
                        </Row>
                        <Row className="mt-2">
                            <Col xs={12} md={6}>
                                <Image rounded fluid width='100%' src="https://veterinariapanda.com.ar/wp-content/uploads/2019/04/Dias-y-horarios-de-atencion-1-1.jpg" rounded />
                            </Col>
                            <Col xs={12} md={6} className='cols-margin-top'>
                                <Image fluid width='100%' src={tobyImg} rounded />
                            </Col>
                        </Row>
                        <Row className="mt-3 mb-2 pb-2 border-bottom border-warning">
                            <Col xs={3} md={1} className='d-flex align-items-center'>
                                <Image fluid src={Logo} width='100%' />
                            </Col>
                            <Col xs={9} md={11}>
                                <h5 className="text-gray text-justify pt-3 text-services">
                                    Consultas y diagnóstico: Atendemos tus inquietudes para brindarte la mejor respuesta.
                                </h5>
                            </Col>
                        </Row>
                        <Row className='mb-2 pb-2 border-bottom border-warning'>
                            <Col xs={3} md={1} className='d-flex align-items-center'>
                                <Image fluid src={Logo} width='100%' />
                            </Col>
                            <Col xs={9} md={11} >
                                <h5 className="text-gray text-justify pt-3 text-services">
                                    Plan de vacunación completo: acompañamos el sano crecimiento de tu cachorro y completamos su vacunación en su etapa adulta.
                                </h5>
                            </Col>
                        </Row>
                        <Row className='mb-2 pb-2 border-bottom border-warning'>
                            <Col xs={3} md={1} className='d-flex align-items-center'>
                                <Image fluid src={Logo} width='100%' />
                            </Col>
                            <Col xs={9} md={11}>
                                <h5 className="text-gray text-justify pt-3 text-services">
                                    Desparasitaciones: Internas y externas.
                                </h5>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col xs={3} md={1} className='d-flex align-items-center'>
                                <Image fluid src={Logo} width='100%' />
                            </Col>
                            <Col xs={9} md={11}>
                                <h5 className="text-gray text-justify pt-3 text-services">
                                    Castraciones: Castraciones de machos y hembras, caninos y felinos.
                                </h5>
                            </Col>
                        </Row>

                    </Col>

                </Row>
            </Container>
        </section>


    )
}