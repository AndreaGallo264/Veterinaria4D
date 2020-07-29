import React, { useState, useEffect, Fragment } from 'react';
import { Container, Form, Row, Col, Image, Pagination, Button } from 'react-bootstrap';
import CardProducts from './CardProducts';
import EditProducts from './EditProducts';
import Search from '../Search/Search';
import LogoProduct from '../../../resources/products.png';
import BunnyLoader from '../../../resources/rabbit.gif';

export default function ListProductos(props) {
    const [isLoading, setIsLoading] = useState(true);

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
            setIsLoading(false);
    }

    const getProductsByCategory = async (catselec) => {
        setIsLoading(true);
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
            setTimeout(()=>{setIsLoading(false);},1500)
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
        <Container className='bg-white my-3 shadow' >
            <Row className='py-3 mb-4 border-bottom border-warning'>
                <Image width="80%" src={LogoProduct} className='mx-auto d-block' />
            </Row>
            {
                isLoading ?
                    (<div className='text-center text-orange-fenix font-weight-bold'>
                        <Image width="20%" src={BunnyLoader} className='mx-auto d-block' />
                        <span>Estamos buscando entre nuestros productos...</span>
                        <p>Esperanos unos segunditos</p>
                    </div>)
                    :
                    (
                        <Fragment>
                            <Row>
                                <Col className="mt-2" >
                                    <Form.Group controlId="ListProducts">
                                        <Col>
                                            <Form.Control as="select" onChange={e => selectedCategory(e.target.value)} >
                                                <option key="all" value="all" >
                                                    Seleccione una Categoría...
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

                            <Row className="mt-5 justify-content-center">
                                <Pagination>
                                    <Pagination >{items}</Pagination>
                                </Pagination>
                            </Row>
                        </Fragment>
                    )
            }


        </Container>
    )
}