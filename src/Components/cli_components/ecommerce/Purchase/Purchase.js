import React, { useState, useEffect } from 'react'
import Cards from 'react-credit-cards';
import { Col, Row, Button, Form, Container, Image } from 'react-bootstrap'
import DetailShoopingCart from '../ShoopingCar/DetailShoopingCart'
import alertify from 'alertifyjs';
import PaymentImg from '../../../resources/pay.png';
import { useHistory } from 'react-router-dom';
import {
    onKeyPressValidateNumbers,
    onKeyPressValidateDate,
    onKeyPressLetters
} from '../../../resources/CommonValidations';
import {
    Link
} from "react-router-dom";
//Shipping Detail 
import ShippingDetail from '../ShippingDetail/ShippingDetail'

export default function Purchase(props) {
    const history = useHistory();
    const [IsPaying, setIsPaying] = useState(false);
    const [IsSelectingShipment, setIsSelectingShipment] = useState(true);

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
        if (province.length > 0 && location.length > 0 && postalcode.length > 0 && dataadress && document.getElementsByTagName('form')[0].checkValidity()) {
            AddPayment();
        } else {
            return;
        }
    }

    const AddPayment = async () => {
        
        State.users = props.userState.usuario._id;
        await fetch(process.env.REACT_APP_BACKEND_URL + "addPayment", {
            method: 'POST',
            body: JSON.stringify(State),
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        }).then(async res => await res.json())
            .then(
                (result) => {
                    if (result.payments._id) {
                        setPaymentId(result.payments._id);
                        setSaveProduct({ payment: result.payments._id })
                        AddPurchase();
                    }
                },
                (error) => {
                    alertify.error("Ocurrio un Error, reintente nuevamente");
                }
            );
    }

    const AddPurchase = async () => {

        totalPrice.user = props.userState.usuario._id;
        totalPrice.address = province + ' ' + location + ' ' + postalcode + ' ' + dataadress
        await fetch(process.env.REACT_APP_BACKEND_URL + "addPurchase", {
            method: 'POST',
            body: JSON.stringify(totalPrice),
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        }).then(async res => await res.json())
            .then(
                (result) => {
                    if (result.purchases._id) {
                        setPurchaseId(result.purchases._id);
                        setSaveProduct({ purchase: result.purchases._id });
                    }
                },
                (error) => {
                    alertify.error("Ocurrio un Error, reintente nuevamente");
                }
            );
    }

    const AddCardProduct = async () => {
        props.carProduct.forEach(async product => {

            //mejorar
            var newproduc = {};

            newproduc.user = props.userState.usuario._id;
            newproduc.payment = paymentId;
            newproduc.purchase = purchaseId;
            newproduc.product = product._id;
            newproduc.details = product.details;
            newproduc.title = product.title;
            newproduc.knt = product.knt;
            newproduc.price = product.price

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
            }
        });
    }

    const cleanCarProduct = () => {
        props.setCarProduct([]);
        props.setKntcat([1]);
        history.push('/finishpurchase');
        alertify.success('Su compra ha sido realizada con éxito');
    }


    useEffect(() => {
        AddCardProduct();
    }, [purchaseId]);

    useEffect(() => {

    }, [finishPurchase]);



    return (
        <Container className='bg-white my-3 rounded shadow py-3'>
            {
                IsSelectingShipment ?
                    <div>
                        <ShippingDetail setIsPaying={setIsPaying} setIsSelectingShipment={setIsSelectingShipment} Shippingdetail={props.Shippingdetail} setShippingDetail={props.setShippingDetail} />
                    </div>
                    :
                    ""
            }

            {
                IsPaying ?
                    <div>
                        <h1 className='text-orange-fenix text-center font-weight-bold pt-2'>
                            Detalle de Pago <Image src={PaymentImg} alt=''></Image>
                        </h1>
                        <Row className="mt-5">
                            <Col xs={12} md={3} className="my-2">
                            <h4 className='text-orange-fenix text-center mb-3'>Resumen de compra</h4>
                                <DetailShoopingCart price={props.price} setTotalPrice={props.setTotalPrice} carProduct={props.carProduct} setCarProduct={props.setCarProduct} functionPrice={props.functionPrice} setFunctionPrice={props.setFunctionPrice} kntcat={props.kntcat} setKntcat={props.setKntcat} />
                            </Col>
                            <Col xs={12} md={9} className="my-2" >
                                <Row>
                                    <Col xs={12} md={6}>
                                        <Cards
                                            cvc={State.cvc}
                                            expiry={State.expiry}
                                            focused={State.focus}
                                            name={State.name}
                                            number={State.number}
                                        />
                                    </Col>
                                    <Col xs={12} md={6} className='mt-2'>
                                        <Form onSubmit={e=> {e.preventDefault();}}>
                                            <Row>
                                                <Col xs={12}>
                                                    <Form.Group controlId="cardnumber">
                                                        <Form.Control
                                                            type="tel"
                                                            name="number"
                                                            placeholder="Número de Tarjeta"
                                                            onChange={onchangecreditcard}
                                                            onFocus={handleInputFocusFront}
                                                            maxLength="16"
                                                            minLength="16"
                                                            pattern='[0-9]{16}'
                                                            onKeyPress={onKeyPressValidateNumbers}
                                                            required />
                                                        <Form.Text className="text-muted">
                                                            Número de Tarjeta
                                                        </Form.Text>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12}>
                                                    <Form.Group controlId="nameperson">
                                                        <Form.Control
                                                            type="text"
                                                            name="name"
                                                            placeholder="Nombre"
                                                            onChange={onchangecreditcard}
                                                            required
                                                            onKeyPress={onKeyPressLetters}
                                                            pattern='[a-zA-Z áéíóúÁÉÍÓÚÑñ]{3,30}'
                                                            minLength='3'
                                                            maxLength='30'
                                                        />
                                                        <Form.Text className="text-muted">
                                                            Nombre
                                                        </Form.Text>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} md={6}>
                                                    <Form.Group controlId="expiry">
                                                        <Form.Control
                                                            type="tel"
                                                            name="expiry"
                                                            placeholder="Vencimiento"
                                                            onChange={onchangecreditcard}
                                                            maxLength="5"
                                                            minLength="5"
                                                            pattern='\b(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})\b'
                                                            required
                                                            onKeyPress={onKeyPressValidateDate}
                                                        />
                                                        <Form.Text className="text-muted">
                                                            Vencimiento
                                                        </Form.Text>
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={12} md={6}>
                                                    <Form.Group controlId="cvc">
                                                        <Form.Control
                                                            type="tel"
                                                            name="cvc"
                                                            placeholder="CVC"
                                                            onChange={onchangecreditcard}
                                                            onFocus={handleInputFocus}
                                                            maxLength="3"
                                                            minLength='3'
                                                            onKeyPress={onKeyPressValidateNumbers}
                                                            required
                                                        />
                                                        <Form.Text className="text-muted">
                                                            Código de Seguridad
                                                        </Form.Text>
                                                    </Form.Group>
                                                </Col>
                                            </Row>



                                            <Row >
                                                {props.carProduct.length > 0 && paymentId.length === 0 ?
                                                    <Button variant="primary" className="my-1" type='submit' block
                                                        onClick={() => { savePurchase() }}
                                                    >Validar Datos de la Tarjeta</Button> : ""}

                                                {finishPurchase === true ?
                                                    <Link className="btn btn-primary my-1" onClick={() => { cleanCarProduct() }} to='/finishpurchase' >Finalizar Compra </Link>
                                                    : ""
                                                }
                                            </Row>
                                        </Form>
                                    </Col>
                                </Row>

                            </Col>


                        </Row>
                    </div>
                    :
                    ""
            }



        </Container>
    )
}