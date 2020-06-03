import React, { useState } from 'react'
import Cards from 'react-credit-cards';
import { Container, Col, Row, Button } from 'react-bootstrap'
import DetailShoopingCart from '../CL-MainShoopingCart/CL-DetailShoopingCart'


export default function CL_Purchase(props) {

    const [State, setState] = useState({
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: ''
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

    return (
        <div id="PaymentForm">
            <h2> </h2>
            <Row>
                <Col xs={2}>
                    <DetailShoopingCart price={props.price} setTotalPrice={props.setTotalPrice} carrito={props.carrito} setCarrito={props.setCarrito} />
                </Col>
                <Col >
                    <Cards
                        cvc={State.cvc}
                        expiry={State.expiry}
                        focused={State.focus}
                        name={State.name}
                        number={State.number}
                    />

                </Col>
                <Col xs={6}>
                    <Row>
                        <form>
                            <div>
                                <input
                                    type="tel"
                                    name="number"
                                    placeholder="Número de Tarjeta"
                                    onChange={onchangecreditcard}
                                    onFocus={handleInputFocusFront}
                                    maxLength="16"

                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Nombre"
                                    onChange={onchangecreditcard}

                                />
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    name="expiry"
                                    placeholder="Vencimiento"
                                    onChange={onchangecreditcard}
                                    maxLength="4" />


                                <input
                                    type="tel"
                                    name="cvc"
                                    placeholder="CVC"
                                    onChange={onchangecreditcard}
                                    onFocus={handleInputFocus}
                                    maxLength="3" />
                            </div>
                        </form>
                    </Row>

                    <Row >
                        <Button variant="primary">Confirmar Compra</Button>{' '}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}