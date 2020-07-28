import React, { useState, useEffect } from 'react'
import { Container, Form, Row, Col, Image, Pagination, Button } from 'react-bootstrap'
import CardProducts from './CardProducts'
import EditProducts from './EditProducts';
import Search from '../Search/Search'

import SliderProduct from '../../../cli_components/ecommerce/Products/SliderProducts'
import LogoProduct from '../../../resources/products.png'

export default function ListProductos(props) {

    const [products, setProducts] = useState([]);
    const [dataProduct, setDataProduct] = useState([]);
    const [Add, setAdd] = useState("Add")
    const [page, setpage] = useState(1);
    const [category, setCategory] = useState([]);
    const [selectCategory, setSelectCategory] = useState("all");

    const getProducts = async () => {
        await fetch(process.env.REACT_APP_BACKEND_URL + "listProducts?page=" + page + "&limit=4", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(async res => await res.json())
            .then(
                (result) => {
                    if (result.success) {
                        if (result.success) {
                            setProducts(result.products);
                            setDataProduct(result);
                        } else {
                            setProducts([]);
                        }
                    } else {
                        alert("Ocurrio un Error, reintente nuevamente");
                    }
                },
                (error) => {
                    alert("Ocurrio un Error, reintente nuevamente");
                }
            );
    }

    const getProductsByCategory = async (catselec) => {
        await fetch(process.env.REACT_APP_BACKEND_URL + 'listProductByCategory/' + catselec + "?page=" + page + "&limit=4", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async res => await res.json())
            .then(
                (result) => {
                    if (result.success) {
                        if (result.success) {
                            setProducts(result.products);
                            setDataProduct(result);
                        } else {
                            setProducts([]);
                        }
                    } else {
                        alert("Ocurrio un Error, reintente nuevamente");
                    }
                },
                (error) => {
                    alert("Ocurrio un Error, reintente nuevamente");
                }
            );
    }

    const getCategory = async () => {
        await fetch(process.env.REACT_APP_BACKEND_URL + "listCategory", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async res => await res.json())
            .then(
                (result) => {
                    if (result.success) {
                        if (result.success) {
                            setCategory(result.categorys);
                        }
                    } else {
                        //alert("Ocurrio un Error, reintente nuevamente");
                    }
                },
                (error) => {
                    alert("Ocurrio un Error, reintente nuevamente");
                }
            );
    };

    const selectedCategory = (e) => {
        setSelectCategory(e);
        setpage(1);
    }

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        if (selectCategory === "all") {
            getProducts();
        } else {
            getProductsByCategory(selectCategory);
        }
    }, [page]);

    useEffect(() => {
        if (selectCategory === "all") {
            getProducts();
        } else {
            getProductsByCategory(selectCategory);
        }
    }, [selectCategory], [page]);

    const newpage = (number) => {
        setpage(number);
    }

    let items = [];
    for (let number = 1; number <= dataProduct.totalPages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === page} >
                <Button variant="" onClick={() => newpage(number)}>{number}</Button>
            </Pagination.Item>,
        );
    }

    useEffect(() => {
        getCategory()
    }, []);


    return (
        <Container >
            <Row>
                <Container fluid>
                    <hr style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .1,
                        borderColor: '#000000'
                    }} ></hr>
                    <Row>
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
            {
                props.isAdmin.isAdmin ? "" : <SliderProduct products={products} />
            }
            <Row>
                <Col  className="mt-2" >
                    <Form.Group controlId="ListProducts">
                        <Col>
                            <Form.Control as="select" onChange={e => selectedCategory(e.target.value)} >
                                <option key="all" value="all" >
                                    Seleccione una Categoria...
                            </option>
                                {
                                    category.length > 0 ?
                                        category.map(category => {
                                            return (
                                                <option key={category._id} value={category._id} >
                                                    {category.name}
                                                </option>
                                            );
                                        }) : ""}

                            </Form.Control>
                        </Col>
                    </Form.Group>
                </Col>
                <Col className="mt-2" xs={4}>
                    <Search getProd={getProducts} getProductsByCategory={getProductsByCategory} selectCategory={selectCategory} setSelectCategory={setSelectCategory} products={products} setProducts={setProducts} />
                </Col>
                {props.isAdmin.isAdmin ?
                    <EditProducts products={products} Add={Add} setAdd={setAdd} isAction={props.isAction} setisAction={props.setisAction} getProd={getProductsByCategory} selecCategory={selectCategory} userState={props.userState} getProducts={getProducts} />
                    : ''}

                <CardProducts products={products} setProducts={setProducts} carProduct={props.carProduct} setCarProduct={props.setCarProduct} isAdmin={props.isAdmin} isAction={props.isAction} setisAction={props.setisAction} getProd={getProductsByCategory} selecCategory={selectCategory} kntcat={props.kntcat} setKntcat={props.setKntcat} price={props.price} setTotalPrice={props.setTotalPrice} functionPrice={props.functionPrice} setFunctionPrice={props.setFunctionPrice} userState={props.userState} getProducts={getProducts} realstock={props.realstock} setRealStock={props.setRealStock} />
            </Row>

            <Row className="mt-5">
                <Pagination>
                    <Pagination >{items}</Pagination>
                </Pagination>
            </Row>

        </Container>
    )
}