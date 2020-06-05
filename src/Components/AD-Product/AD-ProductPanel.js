import React from 'react'
import {Container , Col , Row} from 'react-bootstrap'

import AddProduct     from './AD-AddProduct'
import ManageProducts from './AD-ManageProduct'


export default function AD_ProductPanel(){




    return (

        <Container>
            <Row>
                <Col xs={3}><AddProduct /></Col>
                <Col xs={9}><ManageProducts /></Col>
            </Row>
        </Container>


    )
}