import React from 'react'
import { Card, Button, Col, Row, Container, Image } from 'react-bootstrap'

import EditProducts from './EditProducts'
import AddToCart from '../../../cli_components/ecommerce/Products/AddToCart'
import LogoOps from '../../../resources/logoopps.png'
import Back from '../../../resources/backprof.jpg'

export default function CardProducts(props) {

    let imgUrl = Back;

    const deleteproduct = async (id) => {

        /*const request = */ await fetch(process.env.REACT_APP_BACKEND_URL + "deleteProduct/" + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': props.userState.token
        }
    });

        //const response = await request.json();
        getProducts();
    }

    const getProducts = async () => {
        const request = await fetch(process.env.REACT_APP_BACKEND_URL + "listProducts", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const response = await request.json();
        if (response.success) {
            props.setProducts(response.products);
        }
    }


    return (
        <Container>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4">

                {props.products.length > 0 ?
                    props.products.map(products => (

                        <Card key={products._id} border="dark"
                            style={{
                                height: "33rem", backgroundImage: `url(${imgUrl})`,
                                backgroundRepeat: 'repeat',
                                backgroundPosition: 'center',
                            }}>
                            <Card.Img variant="top" src={products.urlimg} className="card-img-top" />
                            <Card.Body>
                                <Card.Title>{products.title}</Card.Title>
                                <Row>
                                    Precio : {products.price}
                                </Row>
                                <Row>
                                    Stock : {products.stock}
                                </Row>
                                <Row>
                                    Detalle = {products.detail}
                                </Row>
                            </Card.Body>

                            {props.isAdmin.isAdmin ?
                                <Card.Footer>
                                    <Row>
                                        <Col><EditProducts products={products} isAction={props.isAction} setisAction={props.setisAction} getProd={props.getProd} selecCategory={props.selecCategory} userState={props.userState} Add={props.Add} setAdd={props.setAdd} /></Col>
                                        <Col> <Button variant="danger" onClick={() => { deleteproduct(products._id) }}>Eliminar </Button></Col>
                                    </Row>
                                </Card.Footer>
                                :
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
                                />
                            }
                        </Card>

                    ))
                    : <Image fluid src={LogoOps} />}

            </Row>
        </Container>

    )
}