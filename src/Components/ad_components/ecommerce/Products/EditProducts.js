import React, { useState, useEffect } from 'react'
import { Button, Modal, Container, Form } from 'react-bootstrap'


export default function EditProducts(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [category, setCategory] = useState([]);
    const [selectCategory, setSelectCategory] = useState([]);
    const [productEdit, setProductEdit] = useState({

        detail: props.Add === 'Add' ? '' : props.products.detail,
        price: props.Add === 'Add' ? '' : props.products.price,
        stock: props.Add === 'Add' ? '' : props.products.stock,
        urlimg: props.Add === 'Add' ? null : props.products.urlimg,
        title: props.Add === 'Add' ? '' : props.products.title,
        id: props.Add === 'Add' ? '' : props.products._id,
        prodcategory: props.Add === 'Add' ? '' : props.products.category

    });

    const { detail, price, stock, urlimg, title, id, prodcategory } = productEdit;

    const onChangeEditProduct = e => {
        setProductEdit({
            ...productEdit,
            [e.target.name]: e.target.value
        });
    };

    const onChangeMemeImg = async e => {
        if (e.target.files[0]) {
            if (e.target.files[0].size > 4194304) {
                // 5242880 = 5MB
                // 4194304 = 4MB
                e.target.value = null;
                alert('La imagen es demasiado grande.');
                setProductEdit({
                    ...productEdit,
                    urlimg: null
                });
                return;
            }
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onloadend = () => {
                setProductEdit({
                    ...productEdit,
                    urlimg: reader.result
                });
            };
        } else {
            setProductEdit({
                ...productEdit,
                urlimg: null
            });
        }
    };


    const onSubmitEditProduct = e => {
        e.preventDefault();
        if (title.trim() === '' || urlimg.trim() === '' || price.trim() === '') {
            alert('Todos los campos son obligatorios');
            return;
        }

        if (props.Add === 'Add') {
            productEdit.category = selectCategory;
            onSubmitAddProduct(productEdit);
            props.setisAction("Agregar");
        } else {

            if (prodcategory) {
                if (selectCategory.length > 0) {
                    productEdit.category = selectCategory;
                } else {
                    productEdit.category = prodcategory
                }
            }
            EditProduct(productEdit, id);
            props.setisAction("Editar");
        }
        handleClose();
    }


    const EditProduct = async (product, id) => {

        await fetch(process.env.REACT_APP_BACKEND_URL + "editProduct/" + id, {
            method: 'PUT',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        }).then(async res => await res.json())
            .then(
                (result) => {
                    if (result.success) {
                        if (result.success) {
                            if (props.selecCategory === "all") {
                                props.getProducts();
                                alert("Producto Editado");
                            } else {
                                props.getProd(props.selecCategory);
                            }
                        }
                    } else {
                        alert("Ocurrio un Error, reintente nuevamente");
                    }
                },
                (error) => {
                    alert("Ocurrio un Error, reintente nuevamente");
                }
            );
    }

    const onSubmitAddProduct = e => {

        AddProduct(productEdit);
        setProductEdit({
            detail: '',
            price: '',
            stock: '',
            urlimg: '',
            title: '',
            prodcategory: ''
        });
    }

    const AddProduct = async (product) => {
        await fetch(process.env.REACT_APP_BACKEND_URL + "addProduct", {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        }).then(async res => await res.json())
            .then(
                (result) => {
                    if (result.success) {
                        alert("Producto Almacenado");
                        if (props.selecCategory === "all") {
                            props.getProducts();
                        } else {
                            props.getProd(props.selecCategory);
                        }
                    } else {
                        alert("Ocurrio un Error, reintente nuevamente");
                    }
                },
                (error) => {
                    alert("Ocurrio un Error, reintente nuevamente");
                }
            );
    }

    const getCategory = async () => {
        await fetch(process.env.REACT_APP_BACKEND_URL + "ListCategory", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(async res => await res.json())
            .then(
                (result) => {
                    if (result.success) {
                        if (result.success) {
                            setCategory(result.categorys);
                        }
                    } else {
                        // alert("Ocurrio un Error, reintente nuevamente");
                    }
                },
                (error) => {
                    alert("Ocurrio un Error, reintente nuevamente");
                }
            );
    };

    const selectedCategory = (category) => {
        setSelectCategory(category);
    }

    useEffect(() => {
        getCategory();
    }, []);

    return (

        <Container>
            <Button variant="dark" onClick={handleShow}>
                {props.Add === 'Add' ? 'Agregar Producto ' : 'Editar'}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>  {props.Add === 'Add' ? 'Agregar Producto ' : 'Modificar Producto'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={onSubmitEditProduct} >
                        <Form.Group controlId="">
                            <Form.Label
                                hidden
                            >Id
                    </Form.Label>
                            <Form.Control
                                type="text"
                                name="id"
                                readOnly
                                placeholder="Nombre"
                                value={id}
                                onChange={onChangeEditProduct}
                                hidden
                            />
                        </Form.Group>

                        <Form.Group controlId="">
                            <Form.Label
                            >Categoria</Form.Label>
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
                        </Form.Group>

                        <Form.Group controlId="">
                            <Form.Label
                            >Nombre Producto
                        </Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                placeholder="Nombre"
                                value={title}
                                onChange={onChangeEditProduct}
                                required
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
                                value={price}
                                onChange={onChangeEditProduct}
                                required
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
                                value={stock}
                                onChange={onChangeEditProduct}
                                min="1"
                                defaultValue="1"
                                required
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
                                value={detail}
                                onChange={onChangeEditProduct}
                                required
                            />

                        </Form.Group>

                        <Form.Group controlId="img">
                            <Form.Label>Imagen</Form.Label>
                            <Form.File
                                id="img"
                                accept="image/*"
                                onChange={onChangeMemeImg}
                            />
                        </Form.Group>
                        <Button
                            type="submit"
                            variant="primary"
                            className="float-right" >
                            {props.Add === 'Add' ? 'Agregar' : 'Editar'}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    )
}