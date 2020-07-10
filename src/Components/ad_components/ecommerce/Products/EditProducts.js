import React , {useState  , useEffect} from 'react'
import {Button , Modal , Col , Container , Form  } from 'react-bootstrap'


export default function EditProducts({products , Add , setAdd , isAction ,  setisAction , getProd ,  selecCategory}) {

    //Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


     // State para categoria 
     const [category, setCategory]    = useState([]);

    //State para la categoria Seleccionada
    const [selectCategory, setSelectCategory]     = useState([]);

     // Definimos el state para Producto
     const [productEdit, setProductEdit ] = useState({

        detail:  Add === 'Add' ? '': products.detail,
        price:   Add === 'Add' ? '': products.price,
        stock:   Add === 'Add' ? '': products.stock,
        urlimg:  Add === 'Add' ? '': products.urlimg,
        title:   Add === 'Add' ? '': products.title , 
        id:      Add === 'Add' ? '': products._id, 
        prodcategory:   Add === 'Add' ? '': products.category

    });

    // Extraemos del Product
    const { detail, price, stock, urlimg, title , id , prodcategory  } = productEdit;


    // Cuando hay cambios en el formulario
    const onChangeEditProduct = e => {
        setProductEdit({
            ...productEdit,
            [e.target.name]: e.target.value
        });
    };

    // Cuando se crea un Producto
    const onSubmitEditProduct = e => {
        e.preventDefault();
        // Validar campos
        if (title.trim() === '' || urlimg.trim() === '' || price.trim() === '') {
            alert('Todos los campos son obligatorios');
            return;
        }

        if(Add === 'Add'){
            // Agregar Producto
            productEdit.category = selectCategory ; 
            onSubmitAddProduct(productEdit);
            setisAction("Agregar");
           
        }else {
            //Editar Producto

            if(prodcategory){
                //Categoria del Produco
                if(selectCategory.length > 0){
                    //Producto Cambia
                    productEdit.category = selectCategory ; 
                }else {
                    productEdit.category = prodcategory
                }
               
            }
           
            EditProduct(productEdit , id );
            setisAction("Editar");
        }

        //Recargar
        getProd(selecCategory);
    
        //Cerrar Modal
        handleClose();
    }


    const EditProduct = async (product , id) => {

        /*const request =*/ await fetch(process.env.REACT_APP_BACKEND_URL+"editProduct/"+id, {
            method: 'PUT',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        //const response = await request.json();

    }


      // Cuando se crea un Producto
      const onSubmitAddProduct = e => {

         // Agregar Producto
         AddProduct(productEdit);
        
        // Resetear el formulario
        setProductEdit({
            detail: '',
            price: '',
            stock: '',
            urlimg: '',
            title: '' , 
            prodcategory:''
        });
    }

    const AddProduct = async (product) => {

        /*const request =*/ await fetch(process.env.REACT_APP_BACKEND_URL+"addProduct", {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        //const response = await request.json();

    }


     // Obtener las categorias
     const getCategory = async () => {
        const request = await fetch(process.env.REACT_APP_BACKEND_URL+"ListCategory", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const response = await request.json();
        if(response.success){
        setCategory(response.categorys);
         }
    };

    const selectedCategory = (category) => {
        setSelectCategory(category); 
      }

      useEffect(() => {
        getCategory();
      }, [] );

    return (

        <Container>
            <Button variant="dark" onClick={handleShow}>
              {Add === 'Add' ?'Agregar Producto ': 'Editar'}
             </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>  {Add === 'Add' ?'Agregar Producto ': 'Modificar Producto'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form onSubmit={onSubmitEditProduct} >
                <Form.Group controlId="">
                    <Form.Label
                        column
                        xs="3"
                        className="pr-0"
                        hidden
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
                            hidden
                        />
                    </Col>
                </Form.Group>

                <Form.Group controlId="">
            <Form.Label  column
                    xs="3"
                    className="pr-0">Categoria</Form.Label>
                      <Col xs="9">
              <Form.Control as="select" required onChange={e => selectedCategory(e.target.value)}  >
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
                       
                        >Nombre Producto
                        
                    </Form.Label>
                    <Col xs="9">
                        <Form.Control
                            type="text"
                            name="title"
                            placeholder="Nombre"
                            value ={title}
                            onChange={onChangeEditProduct}
                            required
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
                            required

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
                            required

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
                            required

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
                            required

                        />
                    </Col>
                </Form.Group>

                <Button
                    type="submit"
                    variant="primary"
                    className="float-right" >
                          {Add === 'Add' ?'Agregar': 'Editar'}
                    </Button>
            </Form>

                </Modal.Body>
            </Modal>
        </Container>
    )
}