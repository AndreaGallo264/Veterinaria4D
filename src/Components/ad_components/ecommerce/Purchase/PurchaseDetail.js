import React, { useState } from 'react'
import { Container, Row, Image, Button, Modal, Col } from 'react-bootstrap'
import Purchase from '../../../resources/purchase.png';
import moment from 'moment';
import BunnyCart from '../../../resources/BunnyCart.jpg';

export default function PurchaseDetail(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container fluid className="d-flex justify-content-end">
            <Button variant="primary" onClick={handleShow}>
                <Image fluid width="40px" src={Purchase} />
            </Button>
            {
                <Modal centered show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className='text-orange-fenix'>Fecha de Compra : {
                        moment(props.purchase.dateship).format("DD-mm-YYYY")}</Modal.Title>
                    </Modal.Header>
                    <Row className='pr-2 pb-2'>
                        <Col xs={12} md={8}>
                    <Modal.Body>
                        <p><strong>Usuario:</strong> {props.purchase.users.length > 0 ? props.purchase.users[0].nombre : "SIN USUARIO"}</p>
                        <p className='font-weight-bold'>Productos a Entregar </p>
                        {props.purchase.cartproducts.map(products => (
                            products ?
                                <ul>
                                    <li>
                                    {products.knt} {products.title}
                                    </li>
                                </ul>
                                : "Sin Productos"
                        ))}
                        <p><strong>Dirección de entrega:</strong> {props.purchase.users.length > 0 ? props.purchase.users[0].address ? props.purchase.users[0].address : props.purchase.address : "SIN DIRECCION"} </p>
                        <p><strong>Total compra:</strong> ${props.purchase.totalprice}</p>
                    </Modal.Body>
                    </Col>
                    <Col xs={12} md={4} className='d-flex align-items-end'>
                        <Image src={BunnyCart} width='100%' alt=''></Image>
                    </Col>
                    </Row>
                </Modal>
            }
        </Container>
    )
}