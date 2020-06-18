import React, { Fragment, useState, useEffect } from 'react'
import { Button, Modal, Row, Col, Image , Container } from 'react-bootstrap'
import carritoImg from './../../img/carrito.png';
import DetailShoopingCart from './CL-DetailShoopingCart'

import {
    Link
} from "react-router-dom";


export default function CL_MainShoopingCart(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const gotoPurchase = () => {
        setShow(false);
    };

    const deleteitem = (title) => {

        props.setCarrito(props.carrito.filter(item => item.title !== title));

    }

    const calculatePrice = () => {

        let price = 0;
        if (props.carrito.length > 0) {
            props.carrito.forEach(product => {
                price += parseFloat(product.price) * parseInt(product.knt);
            });
        }
        props.setTotalPrice(price);
    }

    useEffect(() => {
        calculatePrice();
    }, [props.carrito]);


    return (

        <Fragment>

            <a className="nav-link" ><img src={carritoImg} alt="" width="30px" className="carrito-nav" onClick={handleShow} /></a>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>MI CARRITO DE COMPRAS</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {props.carrito.length > 0 ? props.carrito.map(product => (
                        <Container>
                        <Row>
                            <Col>  <Image src={product.urlimg} thumbnail="true" rounded /> </Col>
                            <Col  xs={5}> {product.title} </Col>
                            <Col> {product.knt}  </Col>
                            <Col> $ {product.price} </Col>
                            <Button variant="danger" onClick={() => deleteitem(product.title)}> X </Button>
                        </Row>
                      
                        </Container>
                    ))
                        : "AUN NO TIENES PRODUCTOS EN TU CARRITO DE COMPRAS"}

                    {props.carrito.length > 0 ?
                        <DetailShoopingCart price={props.price} setTotalPrice={props.setTotalPrice} carrito={props.carrito} setCarrito={props.setCarrito}  />
                        : ""}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                     </Button>

                    {props.carrito.length > 0 ?
                        <Link className="btn btn-primary" to='/purchase' onClick={handleClose}> Finalizar Compra </Link>
                        : "Agregue Productos al Carrito"
                    }
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}