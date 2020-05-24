import React from 'react'
import { Card, Button, Col, Row, Container } from 'react-bootstrap'

import EditProducts from './EditProducts'
import AddToCart from '../../cli-ecommerce/Products/AddToCart'

export default function CardProducts({ products, setProducts, carProduct, setCarProduct, isAdmin, isAction, setisAction, getProd, selecCategory }) {

    const deleteproduct = async (id) => {

        const solicitud = await fetch(process.env.REACT_APP_BACKEND_URL + "/product/" + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const respuesta = await solicitud.json();
        getProducts();
    }

    const getProducts = async () => {
        const solicitud = await fetch(process.env.REACT_APP_BACKEND_URL + "/ListProducts", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const respuesta = await solicitud.json();
        setProducts(respuesta.products);
    }


    return (
        <Container>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4">

                {
                    products.map(products => (
                        
                            <Card key={products._id} border="dark" style={{ height: "44rem" }}>
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

                                {isAdmin.isAdmin ?
                                    <Card.Footer>
                                        <Row>
                                            <Col><EditProducts products={products} isAction={isAction} setisAction={setisAction} getProd={getProd} selecCategory={selecCategory} /></Col>
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
                                        carProduct={carProduct}
                                        setCarProduct={setCarProduct}
                                        category={products.category}
                                    />
                                }
                            </Card>
                    
                    ))
                }

            </Row>
        </Container>

    )
}