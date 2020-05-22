import React , {useState , Fragment} from 'react'
import {Button , Modal , Col , Image , Form  } from 'react-bootstrap'


export default function EditProducts({products}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

     // Definimos el state para Producto
     const [productEdit, setProductEdit ] = useState({

        detail: products.detail,
        price: products.price,
        stock: products.stock,
        urlimg: products.urlimg,
        title: products.title , 
        id   : products._id

    });

    // Extraemos del Product
    const { detail, price, stock, urlimg, title , id  } = productEdit;


    // Cuando hay cambios en el formulario
    const onChangeEditProduct = e => {
        setProductEdit({
            ...productEdit,
            [e.target.name]: e.target.value
        });
    };
    // Cuando se crea un meme
    const onSubmitEditProduct = e => {
        e.preventDefault();
        // Validar campos
        if (title.trim() === '' || urlimg.trim() === '' || price.trim() === '') {
            alert('Todos los campos son obligatorios');
            return;
        }
        
         // Agregar Producto
         EditProduct(productEdit , id );
        
        // Resetear el formulario
        setProductEdit({
            detail: '',
            price: '',
            stock: '',
            urlimg: '',
            title: '' , 
            id: ''
        });

        handleClose();
    }

    const EditProduct = async (product , id) => {
        //categoria.id = uuidv4();
        const solicitud = await fetch(process.env.REACT_APP_BACKEND_URL+"/product/"+id, {
            method: 'PUT',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const respuesta = await solicitud.json();

    }

    return (

        <Fragment>
            <Button variant="dark" onClick={handleShow}>
               Modificar
             </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modificar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form onSubmit={onSubmitEditProduct} >
                <Form.Group controlId="">
                    <Form.Label
                        column
                        xs="3"
                        className="pr-0"
                        >Id
                        
                    </Form.Label>
                    <Col xs="9">
                        <Form.Control
                            type="text"
                            name="id"
                            readOnly
                            placeholder="Nombre"
                            value ={id}
                            onChange={onChangeEditProduct}
                        />
                    </Col>
                </Form.Group>

                <Form.Group controlId="">
                    <Form.Label
                       
                        >Nombre Producto
                        
                    </Form.Label>
                    <Col xs="9">
                        <Form.Control
                            type="text"
                            name="title"
                            placeholder="Nombre"
                            value ={title}
                            onChange={onChangeEditProduct}
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
                            onChange={onChangeEditProduct}

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
                            onChange={onChangeEditProduct}

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
                            onChange={onChangeEditProduct}

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
                            onChange={onChangeEditProduct}

                        />
                    </Col>
                </Form.Group>

                <Button
                    type="submit"
                    variant="primary"
                    className="float-right" >Modificar</Button>
            </Form>

                </Modal.Body>
            </Modal>
        </Fragment>
    )
}