import React , {useState} from 'react'
import {Button , Form , Col , Container} from 'react-bootstrap'


export default function Category(props){

     const [category, setCategory] = useState({

        detail: props.selectCategory[0]?props.selectCategory[0].detail : "",
        name:  props.selectCategory[0]?props.selectCategory[0].name :    "" 

    });

    const { detail, name   } = props.selectCategory[0]?props.selectCategory[0]:category;

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
   

    const onSubmitAddCategory = e => {
        e.preventDefault();
    
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
      
        /*const request = */ await fetch(process.env.REACT_APP_BACKEND_URL + "addCategory", {
            method: 'POST',
            body: JSON.stringify(category),
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        });

        //const response = await request.json();

    }

    const EditCategory = async (category , id) => {
  
        /*const request =*/ await fetch(process.env.REACT_APP_BACKEND_URL + "editCategory/"+id, {
            method: 'PUT',
            body: JSON.stringify(category),
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        });
        
        //const response = await request.json();
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