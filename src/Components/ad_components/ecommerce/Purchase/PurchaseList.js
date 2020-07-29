import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Image, Button, Pagination } from 'react-bootstrap'
import LogoOps from '../../../resources/logoopps.png'
import PurchaseDetail from './PurchaseDetail'
import DogRead from '../../../resources/DogRead.jpg';
import moment from 'moment'

export default function AD_PurchaseList(props) {

    const [purchases, setPurchases] = useState([]);
    const [dataPurchase, setDataPurchase] = useState([]);
    const [page, setpage] = useState(1);

    const getPurchases = async () => {

        if (props.userState.isAdmin) {
            await fetch(process.env.REACT_APP_BACKEND_URL + "listPurchase?page=" + page + "&limit=4", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': props.userState.token
                }
            }).then(async res => await res.json())
                .then(
                    (result) => {
                        if (result.success) {
                            if (result.success === true) {
                                setPurchases(result.data);
                                setDataPurchase(result);
                            }
                        } else {
                            //alert("Ocurrio un Error, reintente nuevamente");
                        }
                    },
                    (error) => {
                        alert("Ocurrio un Error, reintente nuevamente");
                    }
                );
        } else {
            if (props.userState.usuario) {
                await fetch(process.env.REACT_APP_BACKEND_URL + "listPurchaseByUsr/" + props.userState.usuario._id + "?page=" + page + "&limit=4", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': props.userState.token
                    }
                }).then(async res => await res.json())
                    .then(
                        (result) => {
                            if (result.success) {
                                if (result.success === true) {
                                    setPurchases(result.data);
                                    setDataPurchase(result);
                                }
                            } else {
                                alert("Ocurrio un Error, reintente nuevamente");
                            }
                        },
                        (error) => {
                            alert("Ocurrio un Error, reintente nuevamente");
                        }
                    );
            }
        }
    };

    useEffect(() => {
        getPurchases();
    }, [page]);

    const newpage = (number) => {
        setpage(number);
    }

    let items = [];
    for (let number = 1; number <= dataPurchase.totalPages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === page} >
                <Button variant="" onClick={() => newpage(number)}>{number}</Button>
            </Pagination.Item>,
        );
    }

    return (

        <Container className='bg-white p-2 m-2 border shadow'>
            <Row className="d-flex justify-content-around align-items-center">
                <Col xs={6} className="m-2">
                    <h1 className="AdmTitle">Listado de Compras</h1>
                    <Row className="mt-2" style={{
                        backgroundColor: 'orange'
                    }}>
                        <Col><h5>Fecha Compra </h5></Col>
                        <Col><h5>Total Compra </h5> </Col>
                        {props.userState.isAdmin ? <Col><h5>Cliente </h5> </Col> : ""}
                        <Col><h5 className="text-right mr-4">Detalle </h5> </Col>
                    </Row>

                    {
                        purchases.length > 0 ?
                            purchases.map(purchase => (

                                <Row className="mt-2 d-flex align-items-center bg-light">
                                    <Col>{moment(purchase.dateship).format("DD-mm-YYYY")}</Col>
                                    {/* <Col>{new Date(purchase.dateship).toISOString().slice(0, 10)} </Col> */}
                                    <Col className="ml-3">${purchase.totalprice}</Col>
                                    {props.userState.isAdmin ?
                                    <Col>{purchase.users.length > 0 ? purchase.users[0].nombre : "SIN USUARIO"} </Col> :
                                        ""}
                                    <Col><PurchaseDetail purchase={purchase} /> </Col>
                                </Row>

                            )) : <Image fluid src={LogoOps} />
                    }
                    <Row className="mt-5">
                        <Pagination>
                            <Pagination >{items}</Pagination>
                        </Pagination>
                    </Row>
                </Col>
                <Col xs={4} className="d-none d-lg-block">
                <Image fluid width='100%' src={DogRead} className="rounded shadow" />
                </Col>
            </Row>
        </Container>
    )
}