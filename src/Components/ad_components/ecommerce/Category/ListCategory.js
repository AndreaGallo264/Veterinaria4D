import React, { useState, useEffect } from 'react'
import { ListGroup, Container, Button, Row, Col } from 'react-bootstrap'


export default function ListCategory(props) {

    const [listCategory, setListCategory] = useState([]);
    const [deleteCategory, setDeleteCategory] = useState([]);

    const getCategorys = async () => {
        await fetch(process.env.REACT_APP_BACKEND_URL + "listCategory", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token

            }
        }).then(async res => await res.json())
            .then(
                (result) => {
                    if (result.success) {
                        setListCategory(result.categorys);
                    } else {
                        alert('Ocurrio un Inconveniente')
                    }
                },
                (error) => {
                    alert("Ocurrio un Error, reintente nuevamente");
                }
            );
    }

    const onClickCategoria = (e) => {
        console.log(JSON.parse(e.currentTarget.getAttribute('dataCategory')));
        props.setSelectCategory([JSON.parse(e.currentTarget.getAttribute('dataCategory'))]);
    }

    const deleteCateogry = async (item) => {

        await fetch(process.env.REACT_APP_BACKEND_URL + "deleteCategory/" + item._id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        }).then(async res => await res.json())
            .then(
                (result) => {
                    if (result.success) {
                        setDeleteCategory(result);
                        alert('Categoria Eliminada')
                    } else {
                        //alert('Ocurrio un Inconveniente')
                    }
                },
                (error) => {
                    alert("Ocurrio un Error, reintente nuevamente");
                }
            );
    }

    useEffect(() => {
        getCategorys();
        props.setLoadCategory({ LoadCategory: getCategorys });
    }, []);

    useEffect(() => {
        getCategorys();
        props.setLoadCategory({ LoadCategory: getCategorys });
    }, [deleteCategory]);


    return (

        <Container  fluid className='bg-white'>
            <h1>Listado de Categorias</h1>
            <ListGroup className="list-group-flush">

                {
                    listCategory.map(function (item, i) {

                        return (
                            <Row fluid>
                                <Col >
                                    <ListGroup.Item
                                        as="button"
                                        className="list-group-item-action"
                                        onClick={onClickCategoria}
                                        dataCategory={JSON.stringify(item)}
                                    >{item.name}
                                    </ListGroup.Item>
                                </Col>
                                <Col xs={1}>
                                    <Button variant="danger" onClick={() => deleteCateogry(item)}>X</Button>
                                </Col>
                            </Row>)

                    })
                }
            </ListGroup>
        </Container>

    )
}