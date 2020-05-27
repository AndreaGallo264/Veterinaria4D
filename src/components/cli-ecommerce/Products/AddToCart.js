import React, { Fragment, useState } from 'react'
import { Button, Modal, Col, Image, Form } from 'react-bootstrap'

export default function AddToCart(products) {

    //const [titulo , detalle , imagen ] = descripcion ; 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // State Carrito 
    const [cart, setCart] = useState({
        knt: 0,
        title: products.title,
        details: products.details,
        Id: products.id , 
        urlimg:products.urlimg , 
        price:products.price 
    })

    // Extraemos del pago
    const { knt, title, details, id  } = cart;

    // Cuando el usuario cambia el input
    const onChangeCart = e => {
        setCart({
            ...cart,
            [e.target.name]: e.target.value
        })
    }

    //Cuando agrego al carrito 
    // Cuando se crea un pago
    const onAddToCart = e => {

        e.preventDefault();
        console.log("Agrega al Carrito");
        handleClose();

        products.setCarProduct([...products.carProduct , cart]);


    }

    return (

        <Fragment>
            <Button variant="primary" onClick={handleShow}>
                Añadir al Carrito
             </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{products.title}</Modal.Title>
                    <Col xs={6} md={4}>
                        <Image src={products.urlimg} thumbnail="true" />
                    </Col>
                </Modal.Header>
                <Modal.Body>

                    Precio : {products.price}
                    Stock : {products.stock}
                    Detalle = {products.details}
                    Id      ={products.id}

                    <Form onSubmit={onAddToCart}>
                        <Form.Group controlId="knt">
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control
                                type="number"
                                name="knt"
                                onChange={onChangeCart}
                                value={knt}
                            ></Form.Control>
                        </Form.Group>
                        <Button type="submit">Agregar</Button>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}