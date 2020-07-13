import React, { useState, useEffect } from 'react'
import Cards from 'react-credit-cards';
import { Col, Row, Button, Form } from 'react-bootstrap'
import DetailShoopingCart from '../ShoopingCar/DetailShoopingCart'

import {
    Link
} from "react-router-dom";

//Shipping Detail 
import ShippingDetail from '../ShippingDetail/ShippingDetail'

//MyCart
import ShoopingCar from '../ShoopingCar/ShoopingCar'



export default function Purchase(props) {

    const [finishPurchase, setfinishPurchase] = useState(false)
    const [State, setState] = useState({
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: ''
    });

    const { cvc, expiry, name, number } = State;

    const [paymentId, setPaymentId] = useState([]);
    const [purchaseId, setPurchaseId] = useState([]);
    const [totalPrice] = useState({
        totalprice: props.price
    });

    const [saveProduct, setSaveProduct] = useState({
        details: '',
        title: '',
        knt: '',
        price: '',
        users: '',
        purchase: '',
        product: '',
        payment: ''
    });

    const { province, location, postalcode, dataadress } = props.Shippingdetail;


    const handleInputFocus = e => {
        setState({
            ...State,
            ["focus"]: "cvc"
        });
    }

    const handleInputFocusFront = e => {
        setState({
            ...State,
            ["focus"]: "number"
        });
    }

    const onchangecreditcard = e => {
        setState({
            ...State,
            [e.target.name]: e.target.value
        });
    };

    const savePurchase = () => {

        if (province.length > 0 && location.length > 0 && postalcode.length > 0 && dataadress) {
            if (cvc.length > 0 && expiry.length > 0 && name.length > 0 && number.length > 0) {
                AddPayment();
            } else {
                alert('Campos Obligatorios : Datos de Pago');
            }
        } else {
            alert('Campos Obligatorios : Datos de Envio');
        }
    }

    const AddPayment = async () => {

        State.users = props.userState.usuario._id;
        const request = await fetch(process.env.REACT_APP_BACKEND_URL + "addPayment", {
            method: 'POST',
            body: JSON.stringify(State),
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        });

        const response = await request.json();

        if (response.payments._id) {
            setPaymentId(response.payments._id);
            setSaveProduct({ payment: response.payments._id })
            AddPurchase();
        }

    }

    const AddPurchase = async () => {

        totalPrice.user = props.userState.usuario._id;
        totalPrice.address =  province +' ' + location +' ' +   postalcode +' ' +  dataadress
        const request = await fetch(process.env.REACT_APP_BACKEND_URL + "addPurchase", {
            method: 'POST',
            body: JSON.stringify(totalPrice),
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        });

        const response = await request.json();
        if (response.purchases._id) {
            setPurchaseId(response.purchases._id);
            setSaveProduct({ purchase: response.purchases._id })
        }

    }

    const AddCardProduct = async () => {
        props.carProduct.forEach(async product => {

            //mejorar
            var newproduc = {};

            newproduc.user     = props.userState.usuario._id;
            newproduc.payment  = paymentId;
            newproduc.purchase = purchaseId;
            newproduc.product  = product._id;
            newproduc.details  = product.details;
            newproduc.title    = product.title;
            newproduc.knt      = product.knt;
            newproduc.price    = product.price

            if (paymentId.length > 0 && purchaseId.length > 0) {
                await fetch(process.env.REACT_APP_BACKEND_URL + "addCardProduct", {
                method: 'POST',
                body: JSON.stringify(newproduc),
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': props.userState.token
                }
            });

                setfinishPurchase(true);
                props.setCarProduct([]);
            }
        });


    }

    useEffect(() => {
        AddCardProduct();
    }, [purchaseId]);

    useEffect(() => {

    }, [finishPurchase]);



    return (
        <div id="PaymentForm">

            <ShoopingCar carProduct={props.carProduct} setCarProduct={props.setCarProduct} user={props.userState} price={props.price} setTotalPrice={props.setTotalPrice} kntcat={props.kntcat} setKntcat={props.setKntcat} isPurchase={true} />
            <ShippingDetail Shippingdetail={props.Shippingdetail} setShippingDetail={props.setShippingDetail} />

            <h2> Detalle de Pago </h2>
            <Row className="mt-5" fluid>

                <Col xs={2} style={{ backgroundColor: '#ffffff' }} className="mx-5 my-2">
                    <DetailShoopingCart price={props.price} setTotalPrice={props.setTotalPrice} carProduct={props.carProduct} setCarProduct={props.setCarProduct} functionPrice={props.functionPrice} setFunctionPrice={props.setFunctionPrice} kntcat={props.kntcat} setKntcat={props.setKntcat} />
                </Col>
                <Col style={{ backgroundColor: '#ffffff' }} className="my-2" >
                    <Cards
                        cvc={State.cvc}
                        expiry={State.expiry}
                        focused={State.focus}
                        name={State.name}
                        number={State.number}
                    />

                </Col>
                <Col xs={6} style={{ backgroundColor: '#ffffff' }} className="my-2">
                    <Row className="my-4">
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group controlId="cardnumber">
                                        <Form.Control
                                            type="tel"
                                            name="number"
                                            placeholder="Número de Tarjeta"
                                            onChange={onchangecreditcard}
                                            onFocus={handleInputFocusFront}
                                            maxLength="16"
                                            required />
                                        <Form.Text className="text-muted">
                                            Número de Tarjeta
                            </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="nameperson">
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="Nombre"
                                            onChange={onchangecreditcard}
                                            required
                                        />
                                        <Form.Text className="text-muted">
                                            Nombre
                            </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group controlId="expiry">
                                <Form.Control
                                    type="tel"
                                    name="expiry"
                                    placeholder="Vencimiento"
                                    onChange={onchangecreditcard}
                                    maxLength="4"
                                    required
                                />
                                <Form.Text className="text-muted">
                                    Vencimiento
                            </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="cvc">
                                <Form.Control
                                    type="tel"
                                    name="cvc"
                                    placeholder="CVC"
                                    onChange={onchangecreditcard}
                                    onFocus={handleInputFocus}
                                    maxLength="3"
                                    required
                                />
                                <Form.Text className="text-muted">
                                    Código de Seguridad
                            </Form.Text>
                            </Form.Group>

                        </Form>
                    </Row>

                    <Row >
                        {props.carProduct.length > 0 && paymentId.length === 0 ?
                            <Button variant="primary" className="my-1"
                                onClick={() => { savePurchase() }}
                            >Validar Datos de la Tarjeta</Button> : ""}



                        {finishPurchase === true ?
                            <Link className="btn btn-primary my-1" to='/finishpurchase' >Finalizar Compra </Link>
                            : ""
                        }
                    </Row>
                </Col>
            </Row>
        </div>
    )
}