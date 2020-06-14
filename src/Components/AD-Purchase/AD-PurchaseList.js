import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'


export default function AD_PurchaseList() {

    const [purchases, setPurchases] = useState([]);


    const getPurchases = async () => {
        const solicitud = await fetch("http://localhost:4000/api/listPurchase", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const respuesta = await solicitud.json();
        setPurchases(respuesta.data);
    };

    useEffect(() => {
        getPurchases();
    }, []);

    return (

        <Container>
            <h1>Listado de Compras</h1>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4">

            {
                purchases.map(purchase => (

                    

                    <Card key={purchase._id} border="dark" style={{ height: "22rem", with: "44rem" }}>
                        <Card.Body>
                            <Card.Title>{purchase.users[0].nombre}</Card.Title>
                            <Row> Productos a Entregar </Row>
                            {purchase.cartproducts.map(products => (
                                products?
                                <Container>
                                   
                                    <Row>
                                        - {products.title}
                                    </Row>
                                    <Row>
                                         Cantidad : {products.knt}
                                    </Row>
                                </Container>
                                :"Sin Productos"
                            ))}

                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                Total Compra : {purchase.totalprice}
                            </Row>
                        </Card.Footer>
                    </Card>

                ))
            }
            </Row>
        </Container>


    )
}