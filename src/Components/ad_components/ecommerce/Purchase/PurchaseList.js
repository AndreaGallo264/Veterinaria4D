import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Card , Image} from 'react-bootstrap'
import LogoOps from '../../../resources/logoopps.png'


export default function AD_PurchaseList(props) {

    const [purchases, setPurchases] = useState([]);

    const getPurchases = async () => {

        if (props.userState.isAdmin) {
            const request = await fetch(process.env.REACT_APP_BACKEND_URL + "listPurchase", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': props.userState.token
                }
            });
            const response = await request.json();
            if (response.success === true) {
                setPurchases(response.data);
            }


        } else {

            if (props.userState.usuario) {
                const request = await fetch(process.env.REACT_APP_BACKEND_URL + "listPurchaseByUsr/" + props.userState.usuario._id, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': props.userState.token
                    }
                });
                const response = await request.json();
                if (response.success === true) {
                    setPurchases(response.data);
                }
            }
        }
    };

    useEffect(() => {
        getPurchases();
    }, []);

    return (

        <Container fluid>
            <h1>Listado de Compras</h1>
            <Col>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 ">
                    {
                        purchases.length > 0 ?
                            purchases.map(purchase => (
                                <Card key={purchase._id} border="dark" style={{ with: "44rem" }}>
                                    <Card.Body>
                                        <Card.Title>{purchase.users.length > 0 ? purchase.users[0].nombre : "SIN USUARIO"}</Card.Title>
                                        <Row> Productos a Entregar </Row>
                                        {purchase.cartproducts.map(products => (
                                            products ?
                                                <Container>

                                                    <Row>
                                                        - {products.title}
                                                    </Row>
                                                    <Row>
                                                        Cantidad : {products.knt}
                                                    </Row>
                                                </Container>
                                                : "Sin Productos"
                                        ))}
                                        <Row>Dirección de Entrega: {purchase.users.length > 0 ? purchase.users[0].address ? purchase.users[0].address : purchase.address : "SIN DIRECCION"} </Row>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            Total Compra : {purchase.totalprice}
                                        </Row>
                                    </Card.Footer>
                                </Card>

                            )) : <Image fluid src={LogoOps} />
                    }
                </Row>
            </Col>
        </Container>
    )
}