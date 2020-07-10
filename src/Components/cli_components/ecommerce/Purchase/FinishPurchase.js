import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import Logo from '../../../resources/logo.png';



export default function CL_FinishPurchase() {

    return (
        <Container fluid>
            <Row>
                <Col className="mt-5">
                    <h1>Gracias por tu Compra. Nos contactaremos a la brevedad para confirmar los Datos Ingresados!</h1>
                </Col>
                <Col>
                    <Image width='300px' src={Logo}></Image>
                </Col>
            </Row>
        </Container>
    )
}