import React  from 'react'
import {Container , Col , Row} from 'react-bootstrap'

import ManagePurchase from './PurchaseList'

export default function PurchasePanel(props){
    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <Col xs={12}><ManagePurchase userState={props.userState}  /></Col>
            </Row>
        </Container>


    )
}