import React from 'react'
import { Container, Accordion, Card, Button, Image, Row, Col } from 'react-bootstrap'
import Logistics from '../../resources/logistics.png';
import Products from '../../resources/pets.png';
import Appointments from '../../resources/phone.png';
import WhatsappSm from '../../resources/whatsapp-sm.png';
import Questions from '../../resources/dog.gif';
import Faq from '../../resources/faq.png';
import { Link } from 'react-router-dom';

export default function help() {

    return (

        <Container className='bg-white mt-5 rounded py-3'>
            <h2 className="text-center text-warning py-2">Preguntas Frecuentes<Image src={Faq} className='ml-2'></Image></h2>
            <Row>
                <Col xs={12} md={6}>
                    <Image src={Questions} width='100%'>

                    </Image>
                </Col>
                <Col xs={12} md={6}>
                    <Accordion>
                        <Card>
                            <Card.Header className='bg-light'>
                                <Accordion.Toggle as={Button} variant="link" className='text-dark font-weight-bold' eventKey="0">
                                    <Image src={Logistics} className='mr-2'></Image>Sobre nuestros envíos
                                 </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Si tuviste algún problema o tenés consulta por tu envío por favor contactanos a nuestro whatsapp haciendo click aquí
                        <a href="https://api.whatsapp.com/send?phone=+543815699049" target='_blank' className='ml-2'><Image src={WhatsappSm}></Image></a>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header className='bg-light'>
                                <Accordion.Toggle as={Button} variant="link" className='text-dark font-weight-bold' eventKey="1">
                                    <Image src={Appointments} className='mr-2'></Image>Sobre nuestros turnos
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <ul>
                                        <li>Si querés cancelar tu turno...</li>
                                        <li>Si querés cambiar de día u horario tu turno...</li>
                                        <li>Si necesitás un turno para tu mascotita hacé click <Link to='/shiftspanel'>aquí.</Link> Recordá que tenés que estar logueado para acceder</li>
                                    </ul>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header className='bg-light'>
                                <Accordion.Toggle as={Button} variant="link" className='text-dark font-weight-bold' eventKey="2">
                                    <Image src={Products} className='mr-2'></Image>Sobre nuestros productos
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>Todos los productos que ofrecemos están avalados por instituciones de prestigio. No ofrecemos nada que no hayamos probado antes con nuestros compañeritos.
                            <br></br>Igualmente, si tuviste algún problema, estás disconforme con algo que compraste, contactanos a nuestro whatsapp haciendo click aquí
                        <a href="https://api.whatsapp.com/send?phone=+543815699049" target='_blank' className='ml-2'><Image src={WhatsappSm}></Image></a>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    )
}