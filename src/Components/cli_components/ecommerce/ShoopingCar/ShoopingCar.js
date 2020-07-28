import React, { useEffect } from 'react'
import { Container, Row, Col, Card, ListGroup, Button, Image } from 'react-bootstrap'
import { Link } from "react-router-dom";
import LogoOps from '../../../resources/emptyCart.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear, faBan } from '@fortawesome/free-solid-svg-icons';
import './shoppingCart.css';


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


    };

    const deleteitem = (title) => {

        props.setCarProduct(props.carProduct.filter(item => item.title !== title));

    };

    const cancelPurchase = () => {
        props.setCarProduct([]);
    };

    useEffect(() => {
        calculatePrice();
    }, [props.carProduct]);


    return (

        <Container className="bg-white text-center text-orange-fenix my-3 py-5" >
                {props.carProduct.length > 0 ? <h1 className='font-weight-bold'> MI CARRITO DE COMPRAS </h1> : ""}
                    <Col xs={12}>
                    {props.carProduct.length > 0 ? props.carProduct.map(product => (
                        <Row className='border border-warning shopping-items'>
                                <Image width='100%' src={product.urlimg} />                       
                                <p>{product.title}</p>
                                <p>  Precio  : $ {product.price}</p>
                                <p>  Cantidad :{product.knt}</p>
                                <p>  Detalle : {product.details}</p>
                                <Button variant="danger" onClick={() => deleteitem(product.title)}>
                                    <FontAwesomeIcon icon={faBan} className='mr-2' />    Eliminar
                                </Button>
                        </Row>
                    ))
                    
                        :
                        <Container className='text-center'>
                            <h1><FontAwesomeIcon icon={faSadTear} className='mr-2' />Tu carrito de compras está vacío</h1>
                            <Image fluid width="60%" src={LogoOps} className='mt-4'/>
                        </Container>
                    }
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
                : ""}

        </Container>
    )
}