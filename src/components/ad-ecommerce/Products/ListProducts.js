import React, { useState, useEffect } from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'
import CardProducts from './CardProducts'

export default function ListProductos({ carProduct, setCarProduct, isAdmin }) {

    // Solo Front 
    const Products = [
        {
            category: "5ec1be2bab214532001848c3",
            detail: "Alimentos",
            price: "500",
            stock: 1,
            title: "DogChowJunior",
            urlimg: "https://www.costco.com.mx/medias/sys_master/products/hd3/h19/16525371801630.jpg",
            __v: 0,
            _id: "5ec486e27640cb26ec6a7b55"
        },
        {
            category: "5ec1be2bab214532001848c3",
            detail: "Sobresitos",
            price: "250",
            stock: 1,
            title: "CatCahow Sobresitos",
            urlimg: "https://hollywoodpetshop.com.ar/wp-content/uploads/2019/06/ADULTO-PESCADO.png",
            __v: 0,
            _id: "5ec48b187640cb26ec6a7b58"
        }
    ];

    const Categorys = [
        { datecreate: "2020-05-17T22:42:56.324Z", _id: "5ec1be2bab214532001848c3", detail: "Nuevos Alimentos", name: "Alimentos", __v: 0 },
        { datecreate: "2020-05-17T22:42:56.324Z", _id: "5ec1be31ab214532001848c4", detail: "juguetes", name: "Juguetes", __v: 0 },
        { datecreate: "2020-05-17T22:42:56.324Z", _id: "5ec1be36ab214532001848c5", detail: "Medicamentos", name: "Medicamentos", __v: 0 }
    ]


    const [products, setProducts] = useState([]);

    // State para categoria 
    const [category, setCategory] = useState([]);

    //State para la categoria Seleccionada
    const [selectCategory, setSelectCategory] = useState("5ec1be2bab214532001848c3");



    // Obtener los Productos
    const getProducts = async () => {

        /* const solicitud = await fetch(process.env.REACT_APP_BACKEND_URL + "/ListProducts", {
             method: 'GET',
             headers: {
                 'Content-Type': 'application/json',
             }
         });
 
         const respuesta = await solicitud.json();
         console.log(respuesta);
         setProducts(respuesta.products); */


        setProducts(Products);
    }

    //Obtener los Productos por Categoria
    const getProductsByCategory = async (catselec) => {
        /*  const solicitud = await fetch('http://localhost:4000/ListCategoryById/' + catselec, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              }
          });
  
          const respuesta = await solicitud.json();
          console.log(respuesta);
          setProducts(respuesta.products); */

          setProducts(Products);
    }

    // Obtener las categorias
    const getCategory = async () => {
        /*const solicitud = await fetch(process.env.REACT_APP_BACKEND_URL + "/ListCategory", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const respuesta = await solicitud.json();
        console.log(respuesta);
        setCategory(respuesta.categorys); */ 

        setCategory(Categorys);
    };

    const selectedCategory = (e) => {
        setSelectCategory(e);
    }

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        getProductsByCategory(selectCategory);
    }, [selectCategory]);

    useEffect(() => {
        getCategory()
    }, []);


    return (
        <Container>
            <h1> Productos Disponibles </h1>

            <Form.Group controlId="ListProducts">
                <Container>
                    <Row>
                        <Col>
                            <Form.Label>Categorias</Form.Label>
                            <Form.Control as="select" onChange={e => selectedCategory(e.target.value)} >

                                {category.map(category => {
                                    return (
                                        <option key={category._id} value={category._id} genero={category._id}>
                                            {category.name}
                                        </option>
                                    );
                                })}
                            </Form.Control>
                        </Col>
                    </Row>
                </Container>
            </Form.Group>
            <CardProducts products={products} setProducts={setProducts} carProduct={carProduct} setCarProduct={setCarProduct} isAdmin={isAdmin} />
        </Container>
    )
}