import React, { Fragment, useState } from 'react'
import { Button, Modal, Row, Col, Image } from 'react-bootstrap'
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

    }



    return (

        <Fragment>

            <a className="nav-link" ><img src={carritoImg} alt="" width="30px" className="carrito-nav" onClick={handleShow} /></a>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Mi Carrito de Compras</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {props.carrito ? props.carrito.map(product => (

                        <Row>
                            <Col>  <Image src={product.urlimg} thumbnail="true" rounded /> </Col>
                            <Col> {product.title} </Col>
                            <Col>  Precio  : {product.price} </Col>
                            <Col>  Cantidad :{product.knt}  </Col>
                        </Row>
                    ))
                        : "Agrega un Producto"}

                    <DetailShoopingCart price={props.price} setTotalPrice={props.setTotalPrice} carrito={props.carrito} setCarrito={props.setCarrito} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                     </Button>
                     
                    
                    <Link className="btn btn-primary" to='/purchase' onClick={handleClose}> Finalizar Compra </Link>
                    


                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}