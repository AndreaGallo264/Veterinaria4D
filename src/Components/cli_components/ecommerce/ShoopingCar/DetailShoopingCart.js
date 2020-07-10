import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'


export default function DetailShoopingCart(props) {

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
    }, [props.price]);


    return (

        <Container>
            <h4>  </h4>
            <Col>
                <Row className="justify-content-left">
                    <Col xs={10}><h5> Compra </h5> </Col>
                    <Col xs={1}>${props.price > 0 ? props.price : "0"}</Col>
                </Row>

                <Row className="justify-content-left">
                    <Col xs={10}><h5>SubTotal </h5> </Col>
                    <Col xs={1}>${props.price > 0 ? props.price : "0"}</Col>
                </Row>
                <hr style={{
                    color: '#000000',
                    backgroundColor: '#000000',
                    height: .1,
                    borderColor: '#000000'
                }} ></hr>
                <Row className="justify-content-left">

                    <Col xs={10}><h5>Total </h5> </Col>
                    <Col xs={1}>${props.price > 0 ? props.price : "0"}</Col>
                </Row>

            </Col>
        </Container>

    )
}