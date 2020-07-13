import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Card, Image, Button , Pagination } from 'react-bootstrap'
import LogoOps from '../../../resources/logoopps.png'

//Modal Detail 
import PurchaseDetail from './PurchaseDetail'


export default function AD_PurchaseList(props) {

    const [purchases, setPurchases]        = useState([]);
    const [dataPurchase , setDataPurchase] = useState([]);
    const [page , setpage]                 = useState(1);

    const getPurchases = async () => {

        if (props.userState.isAdmin) {
            const request = await fetch(process.env.REACT_APP_BACKEND_URL + "listPurchase?page="+page+"&limit=4", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': props.userState.token
                } 
            });
            const response = await request.json();
            if (response.success === true) {
                setPurchases(response.data);
                setDataPurchase(response);
            }


        } else {

            if (props.userState.usuario) {
                const request = await fetch(process.env.REACT_APP_BACKEND_URL + "listPurchaseByUsr/" + props.userState.usuario._id+"?page="+page+"&limit=4", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': props.userState.token
                    }
                });
                const response = await request.json();
                if (response.success === true) {
                    setPurchases(response.data);
                    setDataPurchase(response);
                }
            }
        }
    };

    useEffect(() => {
        getPurchases();
    }, [page]);

    const newpage = (number) =>{
        setpage(number);
    }

    let items = [];
    for (let number = 1; number <= dataPurchase.totalPages; number++) {
        items.push(
            <Pagination.Item key={number} active ={number === page} >
                <Button variant="" onClick={() => newpage(number)}>{number}</Button>
            </Pagination.Item>,
        );
    }

    return (

        <Container fluid>
            <h1>Listado de Compras</h1>
            <Col>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-2 ">
                    {
                        purchases.length > 0 ?
                            purchases.map(purchase => (
                                <Card key={purchase._id} border="dark" style={{ with: "44rem" }}>
                                    <Card.Body>
                                        <Card.Title>Fecha de Compra : {new Date(purchase.dateship).toISOString().slice(0, 10)} </Card.Title>

                                        <PurchaseDetail purchase={purchase} />

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

                <Row className="mt-5">
                    <Pagination>
                        <Pagination size="lg">{items}</Pagination>
                    </Pagination>
                </Row>

            </Col>
        </Container>
    )
}