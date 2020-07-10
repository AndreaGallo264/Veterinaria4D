import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Back from '../../resources/backfenix.jpg'
import Logo from '../../resources/logo.png'


export default function services() {

    let imgUrl = Back ; 

    return (

        <section id="aboutus">
            <Container fluid style={{
                backgroundImage: `url(${ imgUrl })` , 
                backgroundRepeat  : 'repeat',
                backgroundPosition: 'center',
            }}>
                <Row>
                    <Col>
                        <Row className="mt-5">
                            <h2 className="text-gray" >Nuestros Servicios </h2>
                        </Row>
                        <Row>
                            <h5 className="text-gray text-justify">
                                Brindamos la mejor atención veterinaria para tu mascota. Para ello, seleccionamos los mejores profesionales veterinarios, quienes continúan en capacitación y formación constante, para darle la más cálida y profesional atención a tu mascota.
                        </h5>
                        </Row>
                        <Row className="mt-2">
                            <Col><Image fluid width='300px' src="https://veterinariapanda.com.ar/wp-content/uploads/2019/04/Dias-y-horarios-de-atencion-1-1.jpg" rounded />
                            </Col>
                            <Col><Image fluid width='300px' src="https://veterinariapanda.com.ar/wp-content/uploads/2019/04/Dias-y-horarios-de-atencion-1-1.jpg" rounded />
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <h5 className="text-gray text-justify"><Image fluid src={Logo}  width='50px' /> Consultas y diagnóstico: Atendemos tus inquietudes para brindarte la mejor respuesta. </h5>
                        </Row>
                        <Row>
                           <h5 className="text-gray text-justify"><Image fluid src={Logo}  width='50px' /> Plan de vacunación completo: acompañamos el sano crecimiento de tu cachorro y completamos su vacunación en su etapa adulta.</h5>
                        </Row>
                        <Row>
                          <h5 className="text-gray text-justify"><Image fluid src={Logo}  width='50px' /> Desparasitaciones: Internas y externas.</h5>
                        </Row>
                        <Row>
                           <h5 className="text-gray text-justify"><Image fluid src={Logo}  width='50px' /> Castraciones: Castraciones de machos y hembras, caninos y felinos.</h5>
                        </Row>

                    </Col>
                    <Col>
                        <Row className="mt-5">
                            <Col><Image fluid width='300px' src="https://i1.wp.com/institutobalcarcecr.com/wp-content/uploads/2018/11/VETERINARIA.png" rounded />
                            </Col>
                            <Col><Image fluid width='300px' src="https://i1.wp.com/institutobalcarcecr.com/wp-content/uploads/2018/11/VETERINARIA.png" rounded />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-3"><Image fluid width='300px' src="https://i1.wp.com/institutobalcarcecr.com/wp-content/uploads/2018/11/VETERINARIA.png" rounded />
                            </Col>
                            <Col className="mb-3"><Image fluid width='300px' src="https://i1.wp.com/institutobalcarcecr.com/wp-content/uploads/2018/11/VETERINARIA.png" rounded />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>


    )
}