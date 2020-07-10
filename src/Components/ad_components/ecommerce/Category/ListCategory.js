import React, { useState, useEffect } from 'react'
import { ListGroup, Container, Button, Row, Col } from 'react-bootstrap'


export default function ListCategory(props) {

    const [listCategory, setListCategory] = useState([]);
    const [deleteCategory , setDeleteCategory] = useState([]);

    // Obtener las Categorias
    const getCategorys = async () => {
        const request = await fetch(process.env.REACT_APP_BACKEND_URL + "listCategory", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
                
            }
        });

        const response = await request.json();
        setListCategory(response.categorys);
        return response;
    }

    const onClickCategoria = (e) => {
        console.log(JSON.parse(e.currentTarget.getAttribute('dataCategory')));
        props.setSelectCategory([JSON.parse(e.currentTarget.getAttribute('dataCategory'))]);
    }

    const deleteCateogry = async (item) =>{

        const request = await fetch(process.env.REACT_APP_BACKEND_URL + "deleteCategory/"+item._id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        });

        const response = await request.json();
        setDeleteCategory(response);
        return response;

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

        <Container>
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