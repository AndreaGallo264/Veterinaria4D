import React ,  {useState} from 'react'
import { Container, Form, Col } from 'react-bootstrap'

export default function ShippingDetail(props) {


    const {province , location , postalcode , dataadress } = props.Shippingdetail ; 

    const onchangeShipping = e => {
        props.setShippingDetail({
            ...props.Shippingdetail,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Container fluid>
            <h1> Detalle de Envio  </h1>
            <Form >
                <Form.Group controlId="">
                    <Form.Label>Datos de Domicilio </Form.Label>
                    <Col>
                        <Form.Control
                            type="text"
                            name="dataadress"
                            placeholder="Ejemplo : Calle Buenos Aires 252"
                            onChange = {onchangeShipping}
                            value={dataadress}
                        />
                    </Col>
                </Form.Group>

                <Form.Group controlId="">
                    <Form.Label
                    >Localidad
               </Form.Label>
                    <Col >
                        <Form.Control
                            type="text"
                            name="location"
                            placeholder="Localidad"
                            onChange = {onchangeShipping}
                            defaultValue="San Miguel de Tucuman"
                            value={location}
                        />
                    </Col>
                </Form.Group>

                <Form.Group controlId="">
                    <Form.Label >Provincia
               </Form.Label>
                    <Col >
                        <Form.Control
                            type="text"
                            name="province"
                            placeholder="Provincia"
                            onChange = {onchangeShipping}
                            defaultValue="Tucuman"
                            value={province}
                        />
                    </Col>
                </Form.Group>

                <Form.Group controlId="">
                    <Form.Label
                    >Codigo Postal
               </Form.Label>
                    <Col >
                        <Form.Control
                            type="number"
                            min = "1"
                            defaultValue="4000"
                            name="postalcode"
                            placeholder="Codigo Postal"
                            onChange = {onchangeShipping}
                            value={postalcode}
                        />
                    </Col>
                </Form.Group>

               
            </Form>
        </Container>

    )

}