import React, { useState, useEffect } from 'react'
import { ListGroup, Container } from 'react-bootstrap'


export default function AD_ListCategory(props) {

    const [listCategory, setListCategory] = useState([]);

    // Obtener las Categorias
    const getCategorys = async () => {
        const solicitud = await fetch("http://localhost:4000/api/listCategory", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const respuesta = await solicitud.json();
        setListCategory(respuesta.categorys);
        return respuesta;
    }

    const onClickCategoria = (e) => {
       console.log(JSON.parse(e.currentTarget.getAttribute('dataCategory')));
       props.setSelectCategory([JSON.parse(e.currentTarget.getAttribute('dataCategory'))]);
    }

    useEffect(() => {
        getCategorys() ; 
        props.setLoadCategory({LoadCategory:getCategorys});
    }, []);


    return (

        <Container>
            <h1>Listado de Categorias</h1>
            <ListGroup className="list-group-flush">

                {
                    listCategory.map(function (item , i) {
                        
                       return( 
                           <ListGroup.Item
                            as="button"
                            className="list-group-item-action"
                            onClick={onClickCategoria}
                            dataCategory = {JSON.stringify(item)}
                        >{item.name}
                        </ListGroup.Item> )
                        
                     } )
                }
            </ListGroup>
        </Container>

    )
}