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


    } ; 

    const deleteitem = (title) => {

        props.setCarProduct(props.carProduct.filter(item => item.title !== title));

    } ; 

    const cancelPurchase = () =>{
        props.setCarProduct([]);
    } ; 

    useEffect(() => {
        calculatePrice();
    }, [props.carProduct]);


    return (

        <Container className="bg-white" fluid >
            <Row>
            <Col xs={2}></Col>
                <Col xs={5}>
                    <h1> MI CARRITO DE COMPRAS </h1>
                    <ListGroup horizontal>

                        {props.carProduct.length > 0 ? props.carProduct.map(product => (

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={product.urlimg} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>
                                        <Row>  Precio  : $ {product.price}</Row>
                                        <Row>  Cantidad :{product.knt}</Row>
                                        <Row>  Detalle : {product.details}</Row>
                                    </Card.Text>
                                </Card.Body>
                                <Button variant="danger" onClick={() => deleteitem(product.title)}>Eliminar</Button>
                            </Card>
                        ))
                            :
                            <Container>
                                <Row>
                                    <Col></Col>
                                    <Col xs={5}>
                                        <Row> <h5>SIN PRODUCTOS EN EL CARRITO</h5></Row>
                                        <Row><Image fluid width="400px" src={LogoOps} /></Row>
                                    </Col>
                                    <Col></Col>
                                </Row>
                            </Container>
                        }

                    </ListGroup>
                </Col>
                {props.carProduct.length > 0 ?
                <Col>
                    <Row className="">
                        <Col ><h1> Resumen </h1> </Col>
                    </Row>

                    <Row className="">
                        <Col ><h4> Compra </h4> </Col>
                        <Col >${props.price > 0 ? props.price : "0"}</Col>
                    </Row>

                    <Row className="">
                        <Col ><h4>SubTotal </h4> </Col>
                        <Col >${props.price > 0 ? props.price : "0"}</Col>
                    </Row>
                    <hr style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .1,
                        borderColor: '#000000'
                    }} ></hr>
                    <Row className="">

                        <Col ><h4>Total </h4> </Col>
                        <Col >${props.price > 0 ? props.price : "0"}</Col>
                    </Row>

                    {
                        props.isPurchase ? "" :
                            <Row className="justify-content-center mt-4">
                                <Button variant="danger" onClick={() => cancelPurchase()} className="mr-2">Cancelar</Button>
                                {
                                    props.user.usuario ? <Link to="/purchase" className="btn btn-primary"  >Continuar y Pagar</Link> :
                                        <Link to="/Login" className="btn btn-primary" > Iniciar Sesión para Continuar </Link>
                                }
                            </Row>
                    }

                </Col>
                :""}
                <Col xs={2}></Col>
            </Row>
        </Container>
    )
}