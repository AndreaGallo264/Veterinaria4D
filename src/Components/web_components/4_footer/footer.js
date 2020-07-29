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
            <Container fluid className='bg-menu px-3 py-3'>
                <Row className="d-flex align-items-center">
                    {/* Col inicial: Google maps */}
                    <Col xs={2}  className="d-flex justify-content-start display-row-phone">
                        <OverlayTrigger
                            placement={"top"}
                            overlay={
                                <Tooltip id={`tooltip-${"top"}`}>
                                    Encontranos en el mapa
                                </Tooltip>
                            }
                        >
                            <a target='_blank' href='https://www.google.com.ar/maps/place/Lola+Polola+Pension+Canina+y+Veterinaria/@-26.8209314,-65.1691573,17z/data=!3m1!4b1!4m5!3m4!1s0x94225c0f0b68cc9b:0x7485750c562fade0!8m2!3d-26.8209314!4d-65.1669686'>
                                <Image fluid src={ImgMaps} rounded />
                            </a>

                        </OverlayTrigger>
                    </Col>
                    {/* Col central:WPP */}
                    <Col xs={5} md={6} >
                        <h4 className='d-flex justify-content-center'><a href="https://api.whatsapp.com/send?phone=+543815699049" target='_blank'><Image src={WhatsappSm} className='mr-2'></Image></a>155699049</h4>
                        <h5 className='d-none d-lg-block text-center'>Lun a Vie de 08:00 hs. a 17:00 hs.</h5>
                    </Col>
                    {/* Col final: Redes Sociales */}        
                    <Col xs={4} md={4} className="fluid d-flex justify-content-end">
                        <Col className='d-flex justify-content-end'>
                            <h5 className="text-dark d-none d-lg-block">Redes Sociales</h5>
                        </Col>
                        <Col className='d-flex justify-content-around'>
                            <a href='https://www.facebook.com/' target='_blank'  rel="noopener noreferrer"><Image src={Facebook}></Image></a>
                            <a href='https://www.instagram.com/' target='_blank'  rel="noopener noreferrer"><Image src={Instagram}></Image></a>
                            <a href="https://api.whatsapp.com/send?phone=+543815699049" target='_blank'><Image src={Whatsapp}></Image></a>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}