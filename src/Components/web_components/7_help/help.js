import React from 'react'
import { Container, Col, Row, Accordion, Button, Card } from 'react-bootstrap'
import Back from '../../resources/backprof.jpg'

export default function help() {

    let imgUrl = Back;

    return (

        <Container fluid style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
        }}>
            <Row>
                <Col className=" bg-white text-center text-gray"><h2>Preguntas Frecuentes</h2></Col>
            </Row>
            <Row >
                <Col>
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                ¿Cómo me Registro en el Sitio?
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Para Registrarte en el Sitio , debes acceder a la Opción del Menú Registrarme. Alli debes completar tus datos. Y Listo, tu cuenta estará creada!</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                               ¿Cómo Agregar Productos a Mi Carrito?
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Debes acceder a la Opción Tienda. Busca el Producto Deseado. Puedes elegir productos por Categorias. Haz Clic en el Botón Añadir al Carrito. Y listo, tus productos estarán en el Carrito. Sigue los Pasos para Finalizar la Compra.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                               ¿Cómo Puedo reservar un Turno para mi Mascota?
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>Para reservar un Turno, debes registrarte en el Sitio. Una vez realizado ese paso, al ingresar al mismo, podrás ver la Funcion "Solicitar Turno". Accede a la misma, podrás ver el formulario de Registro de Turno. Elige un dia y un horario disponible y la especialidad y reserva tu turno!</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                               ¿Otras Consultas?
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>Envianos un Mensaje desde nuestro Sitio. Nos llegará Directamente! <a href="https://api.whatsapp.com/send?phone=+543815699049" target='_blank'>Click para Enviarnos tu Consulta!</a></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                </Col>
            </Row>
        </Container>
    )
}