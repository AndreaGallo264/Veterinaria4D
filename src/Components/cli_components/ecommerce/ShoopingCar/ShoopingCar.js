import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LogoOps from '../../../resources/emptyCart.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear, faBan, faStore, faTimes, faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
            {props.carProduct.length > 0 ? <h1 className='font-weight-bold mb-3'> MI CARRITO DE COMPRAS </h1> : ""}
            <Row>
                {props.carProduct.length > 0 ?
                    (<Col xs={12} md={6}>
                        {props.carProduct.map(product => (
                            <Row className='border border-warning shopping-items mb-2 p-2'>
                                <Image width='50%' src={product.urlimg} />
                                <div className='py-2 font-weight-bold text-align-left shopping-details text-dark'>
                                    <h3>{product.title}</h3>
                                    <p>  Precio: $ {product.price}</p>
                                    <p>  Cantidad:{product.knt}</p>
                                    <p>  Detalle: {product.details}</p>
                                </div>
                                <Button variant="danger" size='lg' block onClick={() => deleteitem(product.title)}>
                                    <FontAwesomeIcon icon={faBan} className='mr-2' /> Eliminar
                            </Button>
                            </Row>
                        ))}
                    </Col>)
                    :
                    <Container className='text-center'>
                        <h1><FontAwesomeIcon icon={faSadTear} className='mr-2' />Tu carrito de compras está vacío</h1>
                        <Link to='/listproduct' className='text-orange-fenix font-weight-bold text-decoration-none'>
                            <p>Llenalo en la tienda <FontAwesomeIcon icon={faStore} className='mr-2' /> o el cobayo llorará</p>
                        </Link>
                        <Image fluid width="60%" src={LogoOps} className='mt-4' />
                    </Container>
                }
                {props.carProduct.length > 0 ?
                    <Col xs={12} md={6}>
                        <h1> Resumen </h1>                       
                            {
                                props.carProduct.map(product => (
                                    <Row className='d-flex justify-content-around'>
                                        <h5> <Image src={product.urlimg} className='mr-1' width='50px'></Image>{product.title} </h5>
                                        <h3>$ {product.price}</h3>
                                    </Row>
                                ))
                            }
                        <Row className='d-flex justify-content-around border-top border-warning pt-2 mx-2'>
                            <h5>TOTAL</h5>
                            <h3>${props.price > 0 ? props.price : "0"}</h3>
                        </Row>
                        {
                            props.isPurchase ? "" :
                                <Row className="justify-content-center mt-4">
                                    <Button variant="danger" onClick={() => cancelPurchase()} className="mr-2">
                                        <FontAwesomeIcon icon={faTimes} className='mr-2' />    Cancelar
                                    </Button>
                                    {
                                        props.user.usuario ? <Link to="/purchase" className="btn btn-success">
                                            <FontAwesomeIcon icon={faArrowRight} className='mr-2' /> Continuar</Link> :
                                            <Link to="/Login" className="btn btn-primary" > Iniciar Sesión para Continuar </Link>
                                    }
                                </Row>
                        }
                    </Col>
                    : ""}
            </Row>

        </Container>
    )
}