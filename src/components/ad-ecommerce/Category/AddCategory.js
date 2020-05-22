import React, { useState } from 'react'
import { Container, Form, Col, Button } from 'react-bootstrap'

export default function AddCategory() {

    // Definimos el state para Producto
    const [category, setCategory] = useState({

        detail: '',
        name: ''

    });

    // Extraemos del meme
    const { detail, name  } = category;
    // Cuando hay cambios en el formulario
    const onChangeCategory = e => {
        setCategory({
            ...category,
            [e.target.name]: e.target.value
        });
    };
    // Cuando se crea un meme
    const onSubmitAddCategory = e => {
        e.preventDefault();
        // Validar campos
        if (name.trim() === '' || detail.trim() === '' ) {
            alert('Todos los campos son obligatorios');
            return;
        }
        

         // Agregar Producto
         AddCategory(category);
        
        
        // Resetear el formulario
        setCategory({
            detail: '',
            name: ''
        });
    }

    const AddCategory = async (category) => {
        //categoria.id = uuidv4();
        /*const solicitud = await fetch(process.env.REACT_APP_BACKEND_URL+"/addCategory", {
            method: 'POST',
            body: JSON.stringify(category),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const respuesta = await solicitud.json(); */

    }


    return (
        <Container>
            <h1> Nueva Categoria </h1>
            <Form onSubmit={onSubmitAddCategory} >
                <Form.Group controlId="">
                    <Form.Label
                        column
                        xs="3"
                        className="pr-0"
                        >Nombre
                        
               </Form.Label>
                    <Col xs="9">
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value ={name}
                            onChange={onChangeCategory}
                        />
                    </Col>
                </Form.Group>

                <Form.Group controlId="">
                    <Form.Label
                        column
                        xs="3"
                        className="pr-0">Detalle
               </Form.Label>
                    <Col xs="9">
                        <Form.Control
                            type="text"
                            name="detail"
                            placeholder="Detalle"
                            value ={detail}
                            onChange={onChangeCategory}

                        />
                    </Col>
                </Form.Group>

                <Button
                    type="submit"
                    variant="primary"
                    className="float-right" > Guardar Categoria</Button>
            </Form>
        </Container>
    )
}