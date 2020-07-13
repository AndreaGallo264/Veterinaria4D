import React, { useState } from 'react'
import { Container, Form, Col } from 'react-bootstrap'

export default function ShippingDetail(props) {


    const { province, location, postalcode, dataadress } = props.Shippingdetail;
    const [selectlocation, setselectlocation] = useState([]);

    const datalocation = [

        { id: 1, value: 'YerbaBuena' },
        { id: 2, value: 'San Miguel de Tucuman' }
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
                            onChange={onchangeShipping}
                            value={dataadress}
                        />
                    </Col>
                </Form.Group>

                <Form.Group controlId="">
                    <Form.Label
                    >Localidad
               </Form.Label>
                    <Col >
                        <Form.Control as="select" name="location" required onChange={e => selectedLoc(e)}  >
                            <option>Seleccione una Localidad...</option>
                            {datalocation.map(location => {
                                return (
                                    <option name="location" key={location.id} value={location.value} >
                                        {location.value}
                                    </option>
                                );
                            })}
                        </Form.Control>
                    </Col>
                </Form.Group>

                <Form.Group controlId="">
                    <Form.Label hidden >Provincia
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
                    <Form.Label hidden
                    >Codigo Postal
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


            </Form>
        </Container>

    )

}