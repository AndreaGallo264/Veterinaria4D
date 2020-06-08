import React , {useState} from 'react'
import {Container , Col , Row} from 'react-bootstrap'

import AddCategory  from './AD-Category'
import ListCategory from './AD-ListCategory'


export default function AD_CategoryPanel(){

    const  [loadCategory , setLoadCategory] = useState([]) ; 
    const  [selectCategory , setSelectCategory] = useState([]) ; 


    return (

        <Container>
            <Row>
                <Col xs={3}><AddCategory  loadCategory ={loadCategory} setLoadCategory={setLoadCategory} selectCategory={selectCategory} setSelectCategory={setSelectCategory}   /></Col>
                <Col xs={9}><ListCategory loadCategory ={loadCategory} setLoadCategory={setLoadCategory} selectCategory={selectCategory} setSelectCategory={setSelectCategory}  /></Col>
            </Row>
        </Container>


    )
}