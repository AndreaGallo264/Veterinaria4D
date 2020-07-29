import React, { useState, useEffect } from 'react';
import { Button, Modal, Col, Image, Form, Container, Row } from 'react-bootstrap';
import Cart from '../../../resources/cart.png';

export default function AddToCart(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
        } else {
            alert("Stock Insuficiente");
        }
    }

    const onAddToCart = e => {
        e.preventDefault();
        const findprod = props.carProduct.filter(prod => {
            return prod.title.includes(props.title);
        })

        if (findprod.length > 0) {
            if (props.realstock >= knt * 1) {
                handleClose();
                props.setCarProduct([...props.carProduct, cart]);
            } else {
                alert("Sin Stock : Productos Agregados en el Carrito")
            }
        } else {
            if (knt > 0) {
                handleClose();
                props.setCarProduct([...props.carProduct, cart]);
            }else {
                alert("Agregue al Menos un Producto");
            }
        }
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
    };



    useEffect(() => {
        calculatePrice();
    }, [props.carProduct]);



    useEffect(() => {
        const findprod = props.carProduct.filter(prod => {
            return prod.title.includes(props.title);
        })
        if (findprod.length > 0) {
            var kntprod = props.stock;
            for (var i = 0; findprod.length > i; i++) {
                kntprod = kntprod - findprod[i].knt * 1
            }
            props.setRealStock(kntprod);
        }
    }, [show]);

    useEffect(() => {
        const findprod = props.carProduct.filter(prod => {
            return prod.title.includes(props.title);
        })
        if (findprod.length > 0) {
            var kntprod = props.stock;
            for (var i = 0; findprod.length > i; i++) {
                kntprod = kntprod - findprod[i].knt * 1
            }
            props.setRealStock(kntprod);
        }
    }, [props.carProduct]);

    return (

        <Container className='d-flex justify-content-center pb-2'>
            <Button variant="outline-light" onClick={handleShow}>
                <Image src={Cart} alt=''></Image>
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
                            Precio : $ {props.price}
                        </Row>
                        <Row>
                            Stock : {props.stock > 0 ? props.stock - knt : "AGOTADO"}
                        </Row>
                        <Row>
                            Detalle : {props.details}
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
                        {props.stock > 0 ? <Button type="submit">Agregar</Button> : ""}


                    </Form>

                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}