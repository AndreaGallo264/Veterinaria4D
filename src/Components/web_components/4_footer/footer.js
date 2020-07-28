import React from 'react';
import { Container, Col, Row, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Facebook from '../../resources/facebook.png';
import Instagram from '../../resources/social-network.png';
import Whatsapp from '../../resources/whatsapp.png';
import WhatsappSm from '../../resources/whatsapp-sm.png';
import ImgMaps from '../../resources/google-maps.png';
import './footer.css';


export default function footer() {
    return (
        <footer>
        <Container fluid className='bg-menu px-5 py-1'>
            <Row >
                <Col xs={12} md={9} className="mt-3 d-flex justify-content-start display-row-phone">
                        <OverlayTrigger
                            placement={"top"}
                            overlay={
                                <Tooltip id={`tooltip-${"top"}`}>
                                    Encontranos en el mapa
                                </Tooltip>
                            }
                            >
                            <div>
                            <a target='_blank' href='https://www.google.com.ar/maps/place/Lola+Polola+Pension+Canina+y+Veterinaria/@-26.8209314,-65.1691573,17z/data=!3m1!4b1!4m5!3m4!1s0x94225c0f0b68cc9b:0x7485750c562fade0!8m2!3d-26.8209314!4d-65.1669686'>
                                <Image fluid src={ImgMaps} rounded />
                            </a>
                    </div>
                            </OverlayTrigger>
                        <div className='ml-5'>
                            <h5 className='mt-3'><a href="https://api.whatsapp.com/send?phone=+543815699049" target='_blank'><Image src={WhatsappSm} className='mr-2'></Image></a>155699049</h5>
                            <h5>Lun a Vie de 08:00 hs. a 17:00 hs.</h5>
                        </div>
                </Col>

                    <Col xs={12} md={3} className="mt-3 footer-row">
                        <Row className='d-flex justify-content-center mb-2 '>
                            <h5 className="text-dark">Buscanos en Nuestras Redes Sociales</h5>
                        </Row>
                        <Row className='d-flex justify-content-around'>
                            <a href='#'><Image src={Facebook}></Image></a>
                            <a href='#'><Image src={Instagram}></Image></a>
                            <a href="https://api.whatsapp.com/send?phone=+543815699049" target='_blank'><Image src={Whatsapp}></Image></a>
                        </Row>
                    </Col>
            </Row>
        </Container>
        </footer>
    )
}