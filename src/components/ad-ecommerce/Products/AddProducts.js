import React, { useState , useEffect } from 'react'
import { Container, Form, Col, Button } from 'react-bootstrap'

export default function AddProductos() {

    const Categorys = [
        { datecreate: "2020-05-17T22:42:56.324Z", _id: "5ec1be2bab214532001848c3", detail: "Nuevos Alimentos", name: "Alimentos", __v: 0 },
        { datecreate: "2020-05-17T22:42:56.324Z", _id: "5ec1be31ab214532001848c4", detail: "juguetes", name: "Juguetes", __v: 0 },
        { datecreate: "2020-05-17T22:42:56.324Z", _id: "5ec1be36ab214532001848c5", detail: "Medicamentos", name: "Medicamentos", __v: 0 }
    ]

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

    // Extraemos del meme
    const { detail, price, stock, urlimg, title } = product;
    // Cuando hay cambios en el formulario
    const onChangeProduct = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    // Cuando se crea una un producto
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
        //categoria.id = uuidv4();
       /* const solicitud = await fetch(process.env.REACT_APP_BACKEND_URL+"/addProduct", {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const respuesta = await solicitud.json(); */

    }
    

    const getCategory = async () => {
       /* const solicitud = await fetch(process.env.REACT_APP_BACKEND_URL+"/ListCategory", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const respuesta = await solicitud.json();
        setCategory(respuesta.categorys); */


        setCategory(Categorys)

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