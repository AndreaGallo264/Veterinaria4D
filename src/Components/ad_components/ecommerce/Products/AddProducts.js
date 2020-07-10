import React, { useState , useEffect } from 'react'
import { Container, Form, Col, Button } from 'react-bootstrap'

export default function AddProductos() {

    // State para categoria 
    const [category, setCategory]    = useState([]);

    //State para la categoria Seleccionada
    const [selectCategory, setSelectCategory]     = useState([]);


    // Definimos el state para Producto
    const [product, setProduct] = useState({

        detail: '',
        price: '',
        stock: '',
        urlimg: '',
        title: ''

    });

    // Extraemos del Producto
    const { detail, price, stock, urlimg, title } = product;
    // Cuando hay cambios en el formulario
    const onChangeProduct = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    // Cuando se crea un Producto
    const onSubmitAddProduct = e => {
        e.preventDefault();
        // Validar campos
        if (title.trim() === '' || urlimg.trim() === '' || price.trim() === '') {
            alert('Todos los campos son obligatorios');
            return;
        }
        
         // Agregar Producto
         product.category = selectCategory ; 
         AddProduct(product);
        
        // Resetear el formulario
        setProduct({
            detail: '',
            price: '',
            stock: '',
            urlimg: '',
            title: ''
        });
    }

    const AddProduct = async (product) => {

        const request = await fetch(process.env.REACT_APP_BACKEND_URL+"addProduct", {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const response = await request.json();

    }
    
    const getCategory = async () => {
        const request = await fetch(process.env.REACT_APP_BACKEND_URL+"/ListCategory", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const response = await request.json();
        setCategory(response.categorys);
      };


      const selectedCategory = (category) => {
        setSelectCategory(category); 
      }

      useEffect(() => {
        getCategory();
      }, [] );


    return (
        <Container>
            <h1> Nuevo Producto </h1>
            <Form onSubmit={onSubmitAddProduct} >

            <Form.Group controlId="">
            <Form.Label  column
                    xs="3"
                    className="pr-0">Categoria</Form.Label>
                      <Col xs="9">
              <Form.Control as="select" onChange={e => selectedCategory(e.target.value)}  >
                <option>Seleccione una Categoria...</option>
                 {category.map(category => {
                  return (
                    <option key={category._id} value={category._id} genero={category._id}>
                      {category.name}
                    </option>
                  );
                })} 
              </Form.Control>
              </Col>
              </Form.Group>

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
                            name="title"
                            placeholder="Nombre"
                            value ={title}
                            onChange={onChangeProduct}
                        />
                    </Col>
                </Form.Group>

                <Form.Group controlId="">
                    <Form.Label
                        column
                        xs="3"
                        className="pr-0"
                       >Precio
               </Form.Label>
                    <Col xs="9">
                        <Form.Control
                            type="text"
                            name="price"
                            placeholder="Precio"
                            value ={price}
                            onChange={onChangeProduct}

                        />
                    </Col>
                </Form.Group>

                <Form.Group controlId="">
                    <Form.Label
                        column
                        xs="3"
                        className="pr-0"

                        >Stock
               </Form.Label>
                    <Col xs="9">
                        <Form.Control
                            type="number"
                            name="stock"
                            placeholder="Stock"
                            value ={stock}
                            onChange={onChangeProduct}

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
                            onChange={onChangeProduct}

                        />
                    </Col>
                </Form.Group>

                <Form.Group controlId="">
                    <Form.Label
                        column
                        xs="3"
                        className="pr-0">UrlImagen
               </Form.Label>
                    <Col xs="9">
                        <Form.Control
                            type="text"
                            name="urlimg"
                            placeholder="Imagen"
                            value ={urlimg}
                            onChange={onChangeProduct}

                        />
                    </Col>
                </Form.Group>


                <Button
                    type="submit"
                    variant="primary"
                    className="float-right" > Guardar Producto</Button>
            </Form>
        </Container>
    )
}