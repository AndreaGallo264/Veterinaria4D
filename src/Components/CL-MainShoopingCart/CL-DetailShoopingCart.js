import React, { Fragment, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'


export default function CL_DetailShoopingCart(props) {

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
    }, [props.price]);


    return (

        <Container>
            <h4>  </h4>
            <Col>
                <Row>
                    <Col xs={14}><h5>Valor de la Compra </h5> </Col>
                    <Col xs={1}>${props.price > 0 ? props.price : "0"}</Col>
                </Row>

                <Row>
                    <Col xs={14}><h5>SubTotal </h5> </Col>
                    <Col xs={1}>${props.price > 0 ? props.price : "0"}</Col>
                </Row>
                <hr style={{
                    color: '#000000',
                    backgroundColor: '#000000',
                    height: .1,
                    borderColor: '#000000'
                }} ></hr>
                <Row>

                    <Col xs={14}><h5>Total </h5> </Col>
                    <Col xs={1}>${props.price > 0 ? props.price : "0"}</Col>
                </Row>

            </Col>
        </Container>

    )
}