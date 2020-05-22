import React from 'react'
import {CardDeck , Card , Button } from 'react-bootstrap'

import EditProducts from './EditProducts'
import AddToCart from '../../cli-ecommerce/Products/AddToCart'

export default function CardProducts({products , setProducts , carProduct, setCarProduct , isAdmin}){


    const deleteproduct = async (id) => {

        const solicitud = await fetch(process.env.REACT_APP_BACKEND_URL+"/product/"+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const respuesta = await solicitud.json();
         getProducts();
    }

    const getProducts = async () => {
        const solicitud = await fetch(process.env.REACT_APP_BACKEND_URL+"/ListProducts", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const respuesta = await solicitud.json();
        setProducts(respuesta.products);
    }


    return(
        <CardDeck>
                {
                    products.map(products => (
                        <Card key={products._id}>
                            <Card.Img variant="top" src={products.urlimg} />
                            <Card.Body>
                                <Card.Title>{products.title}</Card.Title>
                                <Card.Text>
                                    {products.detail}
                                    {products.price}

                                   Cantidad : {products.stock}
                                </Card.Text>
                            </Card.Body>
                            
                            { isAdmin.isAdmin ?  
                            <Card.Footer>
                                <EditProducts products={products} />
                                <Button variant="danger" onClick={()=>{deleteproduct(products._id)}}>Eliminar </Button>
                            </Card.Footer>
                                : 
                            
                                <AddToCart
                                    title={products.title}
                                    price={products.price}
                                    stock={products.stock}
                                    details={products.detail}
                                    id={products._id}
                                    urlimg={products.urlimg}
                                    carProduct={carProduct}
                                    setCarProduct={setCarProduct}

                                />

                           
                        }
                        </Card>
                    ))
                }
            </CardDeck>
    )
}