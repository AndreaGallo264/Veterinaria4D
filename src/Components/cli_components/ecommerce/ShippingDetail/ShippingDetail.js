import React from 'react';
import { Container, Form, Col, Button, Image, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { onKeyPressLettersAndNumbers } from '../../../resources/CommonValidations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheck, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Milo from '../../../resources/Milo.jpg';
import Truck from '../../../resources/car.png';


export default function ShippingDetail(props) {
    const history = useHistory();

    const { province, postalcode, dataadress } = props.Shippingdetail;
    const datalocation = [
        { id: 1, value: 'YerbaBuena' },
        { id: 2, value: 'San Miguel de Tucumán' }
    ];

    const onchangeShipping = e => {
        props.setShippingDetail({
            ...props.Shippingdetail,
            [e.target.name]: e.target.value
        });
    };

    const selectedLoc = e => {
        onchangeShipping(e);
    }

    const sendForm = e => {
        e.preventDefault();
        props.setIsSelectingShipment(false);
        props.setIsPaying(true);
    }

    const goBackToCart = () => {
        history.push('/MyCart');
    }

    const onBlurText = e => {
        props.setShippingDetail({
            ...props.Shippingdetail,
            [e.target.name]: e.target.value.trim()
        });
    }

    return (
        <Container className='bg-white'>
            <h1 className='text-center text-orange-fenix'>  Detalle de Envío <Image src={Truck} alt=''></Image></h1>
            <Row >
                <Col xs={12} md={6}>
                    <Image src={Milo} alt='' width='100%' roundedCircle></Image>
                </Col>
                <Col xs={12} md={6} className='pt-5'>
                    <Form onSubmit={sendForm} className='px-4'>
                        <Form.Group controlId="address">
                            <Form.Label>Datos de Domicilio</Form.Label>
                            <Form.Control
                                type="text"
                                name="dataadress"
                                placeholder="Ejemplo : Calle Buenos Aires 252"
                                onChange={onchangeShipping}
                                value={dataadress}
                                pattern='[a-zA-Z0-9 ]{3,50}'
                                onKeyPress={onKeyPressLettersAndNumbers}
                                onBlur={onBlurText}
                                required
                                minLength='3'
                                maxLength='50'
                            />
                        </Form.Group>

                        <Form.Group controlId="city" className='pt-3'>
                            <Form.Label>
                                Localidad
                            </Form.Label>
                            <Form.Control value='San Miguel de Tucumán' as="select" name="location" required onChange={e => selectedLoc(e)}  >
                                {datalocation.map(location => {
                                    return (
                                        <option name="location" key={location.id} value={location.value} >
                                            {location.value}
                                        </option>
                                    );
                                })}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="">
                            <Form.Label hidden>
                                Provincia
                            </Form.Label>
                            <Col >
                                <Form.Control
                                    type="text"
                                    name="province"
                                    placeholder="Provincia"
                                    onChange={onchangeShipping}
                                    defaultValue="Tucuman"
                                    value={province}
                                    hidden
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group controlId="">
                            <Form.Label hidden>
                                Código Postal
                            </Form.Label>
                            <Col >
                                <Form.Control
                                    type="number"
                                    min="1"
                                    defaultValue="4000"
                                    name="postalcode"
                                    placeholder="Codigo Postal"
                                    onChange={onchangeShipping}
                                    value={postalcode}
                                    hidden
                                />
                            </Col>
                        </Form.Group>
                        <div className='d-flex justify-content-center pt-3'>
                            <Button onClick={goBackToCart} variant='danger'>
                                <FontAwesomeIcon icon={faShoppingCart} className='mr-2' />Volver al carrito
                            </Button>
                            <Button type='submit' variant='success' className='ml-5'>
                                <FontAwesomeIcon icon={faMoneyCheck} className='mr-2' />Ir a pagar
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>

    )

}