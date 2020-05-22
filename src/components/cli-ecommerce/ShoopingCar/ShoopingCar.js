import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";


export default function ShoopingCar({ carProduct, setCarProduct, user , price , setTotalPrice }) {


    const calculatePrice = () => {

        let price = 0;
        carProduct.forEach(product => {
            price += parseFloat(product.price) * parseInt(product.knt);
        });

        setTotalPrice(price);


    }

    useEffect(() => {
        calculatePrice();
    }, []);


    return (

        <Container>
            <Row>
                <Col>
                    <h1> Carrito de compras </h1>
                    <ListGroup horizontal>

                        {carProduct.map(product => (

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={product.urlimg} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>
                                        Detalle : {product.details}
                                        Precio  : {product.price}
                                        Cantiad :{product.knt}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                        }

                    </ListGroup>
                </Col>
                <Col>
                    <h1> Resumen </h1>
                    <h3> SubTotal : {price} </h3>
                    <h3> Total    : {price} </h3>

                    <Button variant="secondary">Cancelar</Button>

                    {
                        user.usuario ? <Link to="/Pago"  >Continuar y Pagar</Link> :
                            <Link to="/Login" > Iniciar Sesión para Continuar </Link>
                    }
                </Col>
            </Row>
        </Container>
    )
}