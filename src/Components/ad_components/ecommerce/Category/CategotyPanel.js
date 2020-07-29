import React , {useState} from 'react'
import {Container , Col , Row} from 'react-bootstrap'

import AddCategory  from './Category'
import ListCategory from './ListCategory'


export default function CategoryPanel(props){

    const  [loadCategory , setLoadCategory] = useState([]) ; 
    const  [selectCategory , setSelectCategory] = useState([]) ; 
    return (

        <Container>
            <Row className="d-flex justify-content-center">
                <Col xs={8} sm={6}><AddCategory  userState={props.userState}  loadCategory ={loadCategory} setLoadCategory={setLoadCategory} selectCategory={selectCategory} setSelectCategory={setSelectCategory}   /></Col>
                <Col xs={8} sm={6}><ListCategory userState={props.userState} loadCategory ={loadCategory} setLoadCategory={setLoadCategory} selectCategory={selectCategory} setSelectCategory={setSelectCategory}  /></Col>
            </Row>
        </Container>
    )
}