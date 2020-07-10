import React from 'react'
import { Card, Button, Col, Row, Container } from 'react-bootstrap'


export default function AD_CardProduct({ products, setProducts, carProduct, setCarProduct, isAdmin, isAction, setisAction, getProd, selecCategory }) {

    const deleteproduct = async (id) => {

        const solicitud = await fetch("http://localhost:4000/api/deleteProduct/" + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const respuesta = await solicitud.json();
        getProducts();
    }

    const getProducts = async () => {
        const solicitud = await fetch("http://localhost:4000/api/ListProducts", {
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

                        <Card key={products._id} border="dark" style={{ height: "33rem" ,  with:"44rem" }}>
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

                           
                                <Card.Footer>
                                    <Row>
                                        <Col> <Button variant="dark" onClick={() => { deleteproduct(products._id) }}>Editar </Button> </Col>
                                        <Col> <Button variant="danger" onClick={() => { deleteproduct(products._id) }}>Eliminar </Button></Col>
                                    </Row>
                                </Card.Footer>
                               

                            }
                        </Card>

                    ))
                }

            </Row>
        </Container>

    )
}