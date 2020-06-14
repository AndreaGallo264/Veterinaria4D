import React, { useState, useEffect } from 'react'
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

    const [paymentId, setPaymentId] = useState([]);
    const [purchaseId, setPurchaseId] = useState([]);
    const [totalPrice, setTotalPrice] = useState({
        totalprice: props.price
    });

    const [saveProduct , setSaveProduct] = useState ({
        details : ''  , 
        title   : ''  , 
        knt     : ''  ,
        price   : ''  , 
        users   : ''  , 
        purchase : '' ,
        product  : '' , 
        payment  : ''
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
        AddPayment();
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
            setSaveProduct({payment : respuesta.payments._id})
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
            setSaveProduct({purchase : respuesta.purchases._id})
        }

    }

    const AddCardProduct = async () => {
        props.carrito.forEach(async product => {

            var newproduc = {}; 
        
            newproduc.users    =   "5ec88335e82b7a2d64097bbd" ; 
            newproduc.payment  = paymentId;
            newproduc.purchase = purchaseId;
            newproduc.product = product._id;
            newproduc.details = product.detail ;
            newproduc.title   = product.title ;
            newproduc.knt     = product.knt ;
            newproduc.price   = product.price 
    

            const solicitud = await fetch("http://localhost:4000/api/addCardProduct", {
                method: 'POST',
                body: JSON.stringify(newproduc),
                headers: {
                    'Content-Type': 'application/json',
                }
            });

        });

    }

    useEffect(() => {
        AddCardProduct()
    }, [purchaseId]);


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
                        <Button variant="primary"
                            onClick={() => { savePurchase() }}
                        >Confirmar Compra</Button>{' '}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}