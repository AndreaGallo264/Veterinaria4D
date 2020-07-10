import React, { Fragment, useState, useEffect } from 'react'
import { Button, Modal, Col, Image, Form, Container, Row } from 'react-bootstrap'

export default function AddToCart(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // State Carrito 
    const [cart, setCart] = useState({
        knt: 1,
        title: props.title,
        details: props.details,
        Id: props.id,
        urlimg: props.urlimg,
        price: props.price
    })

    const { knt } = cart;

    const onChangeCart = e => {

        if (e.target.value <= props.stock) {
            setCart({
                ...cart,
                [e.target.name]: e.target.value
            })
        }else {
            alert("Stock Insuficiente");
        }
    }

    //Cuando agrego al carrito

    const onAddToCart = e => {

        e.preventDefault();
        console.log("Agrega al Carrito");
        handleClose();

        props.setCarProduct([...props.carProduct, cart]);
        
    }

    const calculatePrice = () => {

        let price = 0;
        let kntproduct = 0;
        props.carProduct.forEach(product => {
            price += parseFloat(product.price) * parseInt(product.knt);
            kntproduct = kntproduct + 1
        });

        props.setTotalPrice(price);
        props.setKntcat(kntproduct);


    }

    useEffect(() => {
        calculatePrice();
    }, [props.carProduct]);

    return (

        <Fragment>
            <Button variant="primary" onClick={handleShow}>
                Añadir al Carrito
             </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                    <Col xs={6} md={4}>
                        <Image src={props.urlimg} thumbnail="true" />
                    </Col>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            Precio : {props.price}
                        </Row>
                        <Row>
                            Stock : {props.stock}
                        </Row>
                        <Row>
                            Detalle = {props.details}
                        </Row>
                    </Container>
                    <Form onSubmit={onAddToCart}>
                        <Form.Group controlId="knt">
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control
                                type="number"
                                name="knt"
                                onChange={onChangeCart}
                                value={knt}
                                min="1"
                                defaultValue="1"
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