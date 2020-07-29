import React, { useState } from 'react'
import { Container, Row, Image, Button, Modal } from 'react-bootstrap'
import Purchase from '../../../resources/purchase.png'

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
                        <Modal.Title>Fecha de Compra : {new Date(props.purchase.dateship).toISOString().slice(0, 10)}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className="pl-2">
                        <p>Usuario : {props.purchase.users.length > 0 ? props.purchase.users[0].nombre : "SIN USUARIO"}</p>
                        <p>Productos a Entregar </p>
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
                        <p>Dirección de Entrega: {props.purchase.users.length > 0 ? props.purchase.users[0].address ? props.purchase.users[0].address : props.purchase.address : "SIN DIRECCION"} </p>
                        <p bold>Total Compra: ${props.purchase.totalprice}</p>
                        </Row>
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