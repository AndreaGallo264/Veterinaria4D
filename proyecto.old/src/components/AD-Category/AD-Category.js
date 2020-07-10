import React , {useState, useEffect} from 'react'
import {Button , Form , Col , Container} from 'react-bootstrap'


export default function AD_Category(props){

     // Definimos el state para Producto
     const [category, setCategory] = useState({

        detail: props.selectCategory[0]?props.selectCategory[0].detail : "",
        name:  props.selectCategory[0]?props.selectCategory[0].name :    "" 

    });

    // Extraemos del meme
    const { detail, name   } = props.selectCategory[0]?props.selectCategory[0]:category;
    // Cuando hay cambios en el formulario
    const onChangeCategory = e => {

        props.selectCategory[0]?   
        
        props.setSelectCategory([{
            ...props.selectCategory[0],
            [e.target.name]: e.target.value
        }])  
        :
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
        
        if(props.selectCategory[0]){
            //Editar
            EditCategory(props.selectCategory[0] , props.selectCategory[0]._id);
        }else {
            // Agregar Category
            AddCategory(category);
        }

        // Resetear el formulario
        setCategory({
            detail: '',
            name: ''
        });

        props.loadCategory.LoadCategory();
    }

    const AddCategory = async (category) => {
        //categoria.id = uuidv4();
        const solicitud = await fetch("http://localhost:4000/api/addCategory", {
            method: 'POST',
            body: JSON.stringify(category),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const respuesta = await solicitud.json();

    }

    const EditCategory = async (category , id) => {
        //categoria.id = uuidv4();
        const solicitud = await fetch("http://localhost:4000/api/editCategory/"+id, {
            method: 'PUT',
            body: JSON.stringify(category),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const respuesta = await solicitud.json();
        props.loadCategory.LoadCategory();
    }

    return (
        <Container>
            <h1> Nueva Categoria </h1>
            <Form onSubmit={onSubmitAddCategory} >
                <Form.Group controlId="">
                    <Form.Label
                       
                        >Nombre
                        
               </Form.Label>
                    <Col>
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
                      >Detalle
               </Form.Label>
                    <Col >
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
    >  {props.selectCategory[0]?"Editar":"Guardar"}</Button>
            </Form>
        </Container>
    )
}