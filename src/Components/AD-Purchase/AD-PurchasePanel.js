import React , {useState} from 'react'
import {Container , Col , Row} from 'react-bootstrap'

import ManagePurchase from './AD-PurchaseList'

export default function AD_PurchasePanel(){

    return (

        <Container>
            <Row>
                <Col xs={9}><ManagePurchase /></Col>
            </Row>
        </Container>


    )
}