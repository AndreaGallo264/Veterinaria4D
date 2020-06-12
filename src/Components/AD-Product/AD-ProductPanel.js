import React , {useState} from 'react'
import {Container , Col , Row} from 'react-bootstrap'

import AddProduct     from './AD-AddProduct'
import ManageProducts from './AD-ManageProduct'


export default function AD_ProductPanel(){


    const [loadProduct, setLoadProducts] = useState([]);
    const [selCategory, setSelecCategory] = useState([]);
    const  [selectProduct , setselectProduct] = useState([]) ; 

    return (

        <Container>
            <Row>
                <Col xs={3}><AddProduct     loadProduct={loadProduct} setLoadProducts={setLoadProducts}   selCategory={selCategory} setSelecCategory={setSelecCategory} selectProduct={selectProduct} setselectProduct={setselectProduct} /></Col>
                <Col xs={9}><ManageProducts loadProduct={loadProduct} setLoadProducts={setLoadProducts}   selCategory={selCategory} setSelecCategory={setSelecCategory} selectProduct={selectProduct} setselectProduct={setselectProduct} /></Col>
            </Row>
        </Container>


    )
}