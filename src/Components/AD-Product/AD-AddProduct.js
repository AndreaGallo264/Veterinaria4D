import React, { useState , useEffect } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function Add_Productos({loadProduct, setLoadProducts ,  selCategory }) {

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

        loadProduct.LoadProduct(selCategory);
    }

    const AddProduct = async (product) => {
        //categoria.id = uuidv4();
        const solicitud = await fetch("http://localhost:4000/api/addProduct", {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const respuesta = await solicitud.json();

    }
    

    const getCategory = async () => {
        const solicitud = await fetch("http://localhost:4000/api/ListCategory", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const respuesta = await solicitud.json();
        setCategory(respuesta.categorys);
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
            <Form.Label  
                   >Categoria</Form.Label>
                    
              <Form.Control as="select" onChange={e => selectedCategory(e.target.value)}  >
               
                 {category.map(category => {
                  return (
                    <option key={category._id} value={category._id} genero={category._id}>
                      {category.name}
                    </option>
                  );
                })} 
              </Form.Control>
              
              </Form.Group>

                <Form.Group controlId="">
                    <Form.Label
                      
                        >Nombre
                        
               </Form.Label>
                   
                        <Form.Control
                            type="text"
                            name="title"
                            placeholder="Nombre"
                            value ={title}
                            onChange={onChangeProduct}
                        />
                  
                </Form.Group>

                <Form.Group controlId="">
                    <Form.Label
                      
                       >Precio
               </Form.Label>
                  
                        <Form.Control
                            type="text"
                            name="price"
                            placeholder="Precio"
                            value ={price}
                            onChange={onChangeProduct}

                        />
                  
                </Form.Group>

                <Form.Group controlId="">
                    <Form.Label
                      

                        >Stock
               </Form.Label>
                  
                        <Form.Control
                            type="number"
                            name="stock"
                            placeholder="Stock"
                            value ={stock}
                            onChange={onChangeProduct}

                        />
                  
                </Form.Group>

                <Form.Group controlId="">
                    <Form.Label
                      >Detalle
               </Form.Label>
                   
                        <Form.Control
                            type="text"
                            name="detail"
                            placeholder="Detalle"
                            value ={detail}
                            onChange={onChangeProduct}

                        />
                    
                </Form.Group>

                <Form.Group controlId="">
                    <Form.Label
                      >UrlImagen
               </Form.Label>
                  
                        <Form.Control
                            type="text"
                            name="urlimg"
                            placeholder="Imagen"
                            value ={urlimg}
                            onChange={onChangeProduct}

                        />
                  
                </Form.Group>


                <Button 
                column
                xs="3"
                className="pr-0"
                    type="submit"
                    variant="primary"
                     > Guardar Producto</Button>
            </Form>
        </Container>
    )
}