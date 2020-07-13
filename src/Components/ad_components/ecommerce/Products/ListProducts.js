import React, { useState, useEffect } from 'react'
import { Container, Form, Row, Col, Image } from 'react-bootstrap'
import CardProducts from './CardProducts'
import EditProducts from './EditProducts';
import Search from '../Search/Search'

import SliderProduct from '../../../cli_components/ecommerce/Products/SliderProducts'
import LogoProduct from '../../../resources/products.png'

export default function ListProductos(props) {

    const [products, setProducts] = useState([]);

    //State para Editar 
    const [Add, setAdd] = useState("Add")


    // State para categoria 
    const [category, setCategory] = useState([]);

    //State para la categoria Seleccionada
    //Para Local
    //const [selectCategory, setSelectCategory] = useState("5f06878ca6c36442a0988837");

    //Para Atlas
    const [selectCategory, setSelectCategory] = useState("5ef15be7c397f100172b2520");


    // Obtener los Productos
    const getProducts = async () => {
        const request = await fetch(process.env.REACT_APP_BACKEND_URL + "listProducts", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const response = await request.json();
        if (response.success) {
            setProducts(response.products);
        } else {
            setProducts([]);
        }


    }

    //Obtener los Productos por Categoria
    const getProductsByCategory = async (catselec) => {
        const request = await fetch(process.env.REACT_APP_BACKEND_URL + 'listProductByCategory/' + catselec, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            } 
        });

        const response = await request.json();
        if (response.success) {
            setProducts(response.products);
        } else {
            setProducts([]);
        }
    }

    // Obtener las categorias
    const getCategory = async () => {
        const request = await fetch(process.env.REACT_APP_BACKEND_URL + "listCategory", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const response = await request.json();
        if (response.success) {
            setCategory(response.categorys);
        }
    };

    const selectedCategory = (e) => {
        setSelectCategory(e);
    }

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        getProductsByCategory(selectCategory);
    }, [selectCategory]);

    useEffect(() => {
        getCategory()
    }, []);


    return (
        <Container>

            <Row>
                <Container fluid>
                    <hr style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .1,
                        borderColor: '#000000'
                    }} ></hr>
                    <Row>
                        <Col xs={4}>
                            <Search getProd={getProducts} products={products} setProducts={setProducts} />
                        </Col>
                        <Col>

                            <Image width="500px" fluid src={LogoProduct} />

                        </Col>
                    </Row>
                    <hr style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .1,
                        borderColor: '#000000'
                    }} ></hr>
                </Container>
            </Row>
            <SliderProduct products={products} />
            <Row>

                <Col className="mt-3">
                    <Form.Group controlId="ListProducts">
                        <Form.Label>Categorias</Form.Label>
                        <Form.Control as="select" onChange={e => selectedCategory(e.target.value)} >

                            {
                                category.length > 0 ?
                                    category.map(category => {
                                        return (
                                            <option key={category._id} value={category._id} genero={category._id}>
                                                {category.name}
                                            </option>
                                        );
                                    }) : ""}
                        </Form.Control>
                    </Form.Group>
                </Col>

                {props.isAdmin.isAdmin ?
                    <EditProducts products={products} Add={Add} setAdd={setAdd} isAction={props.isAction} setisAction={props.setisAction} getProd={getProductsByCategory} selecCategory={selectCategory} userState={props.userState} />
                    : ''}

                <CardProducts products={products} setProducts={setProducts} carProduct={props.carProduct} setCarProduct={props.setCarProduct} isAdmin={props.isAdmin} isAction={props.isAction} setisAction={props.setisAction} getProd={getProductsByCategory} selecCategory={selectCategory} kntcat={props.kntcat} setKntcat={props.setKntcat} price={props.price} setTotalPrice={props.setTotalPrice} functionPrice={props.functionPrice} setFunctionPrice={props.setFunctionPrice} userState={props.userState} />
            </Row>

          

        </Container>
    )
}