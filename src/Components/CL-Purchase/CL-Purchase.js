import React, { useState, useEffect } from 'react'
import Cards from 'react-credit-cards';
import { Col, Row, Button, Form } from 'react-bootstrap'
import DetailShoopingCart from '../CL-MainShoopingCart/CL-DetailShoopingCart'

import {
    Link
} from "react-router-dom";


export default function CL_Purchase(props) {

    const [finishPurchase, setfinishPurchase] = useState(false)
    const [State, setState] = useState({
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: ''
    });

    const { cvc, expiry, focus, name, number } = State;

    const [paymentId, setPaymentId] = useState([]);
    const [purchaseId, setPurchaseId] = useState([]);
    const [totalPrice, setTotalPrice] = useState({
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

        if (cvc.length > 0 && expiry.length > 0 && name.length > 0 && number.length > 0) {
            AddPayment();
        } else {
            alert('Campos Obligatorios');
        }
    }

    const AddPayment = async () => {
        //categoria.id = uuidv4();

        State.users = "5ec88335e82b7a2d64097bbd";
        const solicitud = await fetch("http://localhost:4000/api/addPayment", {
            method: 'POST',
            body: JSON.stringify(State),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const respuesta = await solicitud.json();

        if (respuesta.payments._id) {
            setPaymentId(respuesta.payments._id);
            setSaveProduct({ payment: respuesta.payments._id })
            AddPurchase();
        }

    }

    const AddPurchase = async () => {
        //categoria.id = uuidv4();
        totalPrice.users = "5ec88335e82b7a2d64097bbd";
        const solicitud = await fetch("http://localhost:4000/api/addPurchase", {
            method: 'POST',
            body: JSON.stringify(totalPrice),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const respuesta = await solicitud.json();
        if (respuesta.purchases._id) {
            setPurchaseId(respuesta.purchases._id);
            setSaveProduct({ purchase: respuesta.purchases._id })
        }

    }

    const AddCardProduct = async () => {
        props.carrito.forEach(async product => {

            var newproduc = {};

            newproduc.users = "5ec88335e82b7a2d64097bbd";
            newproduc.payment = paymentId;
            newproduc.purchase = purchaseId;
            newproduc.product = product._id;
            newproduc.details = product.detail;
            newproduc.title = product.title;
            newproduc.knt = product.knt;
            newproduc.price = product.price

            if (paymentId.length > 0 && purchaseId.length > 0) {
                const solicitud = await fetch("http://localhost:4000/api/addCardProduct", {
                    method: 'POST',
                    body: JSON.stringify(newproduc),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                setfinishPurchase(true);
            }
        });


    }

    useEffect(() => {
        AddCardProduct()
    }, [purchaseId]);

    useEffect(() => {

    }, [finishPurchase]);



    return (
        <div id="PaymentForm">
            <h2> </h2>
            <Row>
                <Col xs={2} style={{ backgroundColor: '#ffffff' }} className="mx-5 my-2">
                    <DetailShoopingCart price={props.price} setTotalPrice={props.setTotalPrice} carrito={props.carrito} setCarrito={props.setCarrito} functionPrice={props.functionPrice} setFunctionPrice={props.setFunctionPrice} />
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
                                            maxLength="16" />
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
                                />
                                <Form.Text className="text-muted">
                                    Código de Seguridad
                            </Form.Text>
                            </Form.Group>

                        </Form>
                    </Row>

                    <Row >
                        {props.carrito.length > 0 && paymentId.length === 0  ?
                            <Button variant="primary" className="my-1"
                                onClick={() => { savePurchase() }}
                            >Validar Datos de la Tarjeta</Button> : ""}



                        {finishPurchase === true ?
                            <Link className="btn btn-primary my-1" to='/CL-FinishPurchase' >Finalizar Compra </Link>
                            : ""
                        }
                    </Row>
                </Col>
            </Row>
        </div>
    )
}