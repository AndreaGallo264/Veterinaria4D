import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Card, Image, Button, Modal } from 'react-bootstrap'
import LogoOps from '../../../resources/logoopps.png'


export default function PurchaseDetail(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <Container fluid>
            <Button variant="primary" onClick={handleShow}>
                Detalles de Compra
            </Button>

            {
                        <Modal show={show} onHide={handleClose}>

                            <Modal.Header closeButton>
                                <Modal.Title>Fecha de Compra : {new Date(props.purchase.dateship).toISOString().slice(0, 10)}</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <Row>Usuario : {props.purchase.users.length > 0 ? props.purchase.users[0].nombre : "SIN USUARIO"}</Row>
                                <Row> Productos a Entregar </Row>
                                {props.purchase.cartproducts.map(products => (
                                    products ?
                                        <Container>

                                            <Row>
                                                - {products.title}
                                            </Row>
                                            <Row>
                                                Cantidad : {products.knt}
                                            </Row>
                                        </Container>
                                        : "Sin Productos"
                                ))}
                                <Row>Dirección de Entrega: {props.purchase.users.length > 0 ? props.purchase.users[0].address ? props.purchase.users[0].address : props.purchase.address : "SIN DIRECCION"} </Row>
                                <Row>Total Compra : {props.purchase.totalprice}</Row>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cerrar
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    
            }

        </Container>
    )
}