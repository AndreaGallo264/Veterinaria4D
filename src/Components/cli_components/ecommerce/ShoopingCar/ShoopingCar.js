import React, { useEffect } from 'react'
import { Container, Row, Col, Card, ListGroup, Button, Image } from 'react-bootstrap'
import { Link } from "react-router-dom";
import LogoOps from '../../../resources/logoopps.png'


export default function ShoopingCar(props) {


    const calculatePrice = () => {

        let price = 0;
        let kntproduct = 0;
        props.carProduct.forEach(product => {
            price += parseFloat(product.price) * parseInt(product.knt);
            kntproduct = kntproduct + 1
        });

        props.setTotalPrice(price);
        props.setKntcat(kntproduct);


    }

    const deleteitem = (title) => {

        props.setCarProduct(props.carProduct.filter(item => item.title !== title));

    }

    useEffect(() => {
        calculatePrice();
    }, [props.carProduct]);


    return (

        <Container className="mt-4" >
            <Row>
                <Col>
                    <h1> MI CARRITO DE COMPRAS </h1>
                    <ListGroup horizontal>

                        {props.carProduct.length > 0 ? props.carProduct.map(product => (

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
                                <Button variant="danger" onClick={() => deleteitem(product.title)}>Eliminar</Button>
                            </Card>
                        ))
                            :
                            <Row>
                                <Col> <h5>SIN PRODUCTOS EN EL CARRITO</h5></Col>
                                <Col><Image fluid src={LogoOps} /></Col>
                            </Row>}

                    </ListGroup>
                </Col>
                <Col>

                    <Row className="justify-content-center">
                        <Col xs={10}><h1> Resumen </h1> </Col>
                    </Row>

                    <Row className="justify-content-left">
                        <Col xs={10}><h3> Compra </h3> </Col>
                        <Col xs={1}>${props.price > 0 ? props.price : "0"}</Col>
                    </Row>

                    <Row className="justify-content-left">
                        <Col xs={10}><h3>SubTotal </h3> </Col>
                        <Col xs={1}>${props.price > 0 ? props.price : "0"}</Col>
                    </Row>
                    <hr style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .1,
                        borderColor: '#000000'
                    }} ></hr>
                    <Row className="justify-content-left">

                        <Col xs={10}><h3>Total </h3> </Col>
                        <Col xs={1}>${props.price > 0 ? props.price : "0"}</Col>
                    </Row>

                    {
                        props.isPurchase ? "" :
                            <Row className="justify-content-center mt-4">
                                <Button variant="danger">Cancelar</Button>
                                {
                                    props.user.usuario ? <Link to="/purchase"  >Continuar y Pagar</Link> :
                                        <Link to="/Login" > Iniciar Sesión para Continuar </Link>
                                }
                            </Row>
                    }

                </Col>
            </Row>
        </Container>
    )
}