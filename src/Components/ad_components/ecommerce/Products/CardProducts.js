import React from 'react'
import { Card, Button, Col, Row, Container, Image } from 'react-bootstrap'

import EditProducts from './EditProducts'
import AddToCart from '../../../cli_components/ecommerce/Products/AddToCart'
import LogoOps from '../../../resources/logoopps.png';

export default function CardProducts(props) {

    const deleteproduct = async (id) => {

        await fetch(process.env.REACT_APP_BACKEND_URL + "deleteProduct/" + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        }).then(async res => await res.json())
            .then(
                (result) => {
                    if (result.success) {
                        if (props.selecCategory === "all") {
                            props.getProducts();
                        } else {
                            props.getProd(props.selecCategory);
                        }
                    } else {
                        alert('Ocurrio un Error, reintente nuevamente : '+result.msg);
                    }
                },
                (error) => {
                    alert("Ocurrio un Error, reintente nuevamente");
                }
            );
    }

    return (
        <Row className="d-flex justify-content-center px-4">
            {props.products.length > 0 ?
                props.products.map(products => (
                    <Col xs={12} md={3}>
                        <Card key={products._id} border="dark" className="mt-1 mb-2 bg-white h-100">
                            <Card.Body className='text-center text-orange-fenix'>
                                <Row className='mt-2 d-flex justify-content-center'>
                                    <h5>{products.title}</h5>
                                </Row>
                                <Row>
                                    <Col xs={6}>
                                        <Image width='100%' rounded src={products.urlimg}></Image>
                                    </Col>
                                    <Col xs={6} className='d-flex align-items-center'>
                                        <h5>$ {products.price}</h5>
                                    </Col>
                                </Row>
                            </Card.Body>

                            {props.isAdmin.isAdmin ?
                                <Card.Footer>
                                    <EditProducts products={products} isAction={props.isAction} setisAction={props.setisAction} getProd={props.getProd} selecCategory={props.selecCategory} userState={props.userState} Add={props.Add} setAdd={props.setAdd} getProducts={props.getProducts} />
                                    <Col className="mt-1">
                                        <Button block variant="danger" onClick={() => { deleteproduct(products._id) }}>Eliminar </Button>
                                    </Col>
                                </Card.Footer>
                                :
                                <Card.Footer>
                                    <AddToCart
                                        title={products.title}
                                        price={products.price}
                                        stock={products.stock}
                                        details={products.detail}
                                        id={products._id}
                                        urlimg={products.urlimg}
                                        carProduct={props.carProduct}
                                        setCarProduct={props.setCarProduct}
                                        category={products.category}
                                        kntcat={props.kntcat}
                                        setKntcat={props.setKntcat}
                                        setTotalPrice={props.setTotalPrice}
                                        functionPrice={props.functionPrice}
                                        setFunctionPrice={props.setFunctionPrice}
                                        realstock={props.realstock}
                                        setRealStock={props.setRealStock}
                                    />
                                </Card.Footer>
                            }
                        </Card>
                    </Col>

                ))
                : <Image fluid src={LogoOps} />}

        </Row>
    )
}