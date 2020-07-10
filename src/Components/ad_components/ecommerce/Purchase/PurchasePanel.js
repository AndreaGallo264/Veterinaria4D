import React  from 'react'
import {Container , Col , Row} from 'react-bootstrap'

import ManagePurchase from './PurchaseList'

export default function PurchasePanel(props){

    return (

        <Container>
            <Row>
                <Col xs={9}><ManagePurchase userState={props.userState}  /></Col>
            </Row>
        </Container>


    )
}