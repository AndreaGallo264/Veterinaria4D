import React, { Fragment, useEffect } from 'react'
import { Button, Modal, Row, Col, Image } from 'react-bootstrap'


export default function CL_DetailShoopingCart(props) {

    const calculatePrice = () => {

        if (props.carrito.length > 0) {
            let price = 0;

            props.carrito.forEach(product => {
                price += parseFloat(product.price) * parseInt(product.knt);
            });

            props.setTotalPrice(price);
        }



    }

    useEffect(() => {
        calculatePrice();
    }, []);


    return (

        <Col>
            <h4> Resumen </h4>
            <h5> SubTotal : {props.price} </h5>
            <h5> Total    : {props.price} </h5>

        </Col>

    )
}