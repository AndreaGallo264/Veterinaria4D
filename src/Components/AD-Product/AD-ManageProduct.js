import React , {useState , useEffect} from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'
import CardProducts from './AD-CardProduct'


export default function AD_ManageProducts({loadProduct, setLoadProducts , setSelecCategory , selectProduct , setselectProduct , }){

    const [products, setProducts] = useState([]);

    //State para Editar 
    const [Add, setAdd] = useState("Add")


    // State para categoria 
    const [category, setCategory] = useState([]);

    //State para la categoria Seleccionada
    const [selectCategory, setSelectCategory] = useState("5ec1be2bab214532001848c3");

    //Para atlas
    //const [selectCategory, setSelectCategory] = useState("5ec32d2cd4ef170244aa2602");


    // Obtener los Productos
    const getProducts = async () => {
        const solicitud = await fetch("http://localhost:4000/api/listProducts", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const respuesta = await solicitud.json();
        setProducts(respuesta.products);
        
       

        return respuesta;
    }

    //Obtener los Productos por Categoria
    const getProductsByCategory = async (catselec) => {
        const solicitud = await fetch('http://localhost:4000/api/listProductByCategory/' + catselec, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const respuesta = await solicitud.json();
        console.log(respuesta);
        setProducts(respuesta.products);
    }

    // Obtener las categorias
    const getCategory = async () => {
        const solicitud = await fetch("http://localhost:4000/api/listCategory", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const respuesta = await solicitud.json();
        setCategory(respuesta.categorys);
    };

    const selectedCategory = (e) => {
        setSelectCategory(e);
        setSelecCategory(selectCategory) ; 
    }

    useEffect(() => {
        getProducts();
        setLoadProducts({LoadProduct : getProductsByCategory});
    }, []);

    useEffect(() => {
        getProductsByCategory(selectCategory);
        selectedCategory(selectCategory);
    }, [selectCategory]);

    useEffect(() => {
        getCategory()
    }, []);


    return (
        <Container>
            <h1>Productos</h1>
            <Form.Group controlId="ListProducts">
                <Container>
                    <Row>
                        <Col>
                            <Form.Label>Categorias</Form.Label>
                            <Form.Control as="select" onChange={e => selectedCategory(e.target.value)} >

                                {category.map(category => {
                                    return (
                                        <option key={category._id} value={category._id} genero={category._id}>
                                            {category.name}
                                        </option>
                                    );
                                })}
                            </Form.Control>
                        </Col>
                    </Row>
                </Container>
            </Form.Group>
            <CardProducts products={products} setProducts={setProducts} getProd={getProductsByCategory} selecCategory={selectCategory} selectProduct={selectProduct} setselectProduct={setselectProduct} />
        </Container>
    )
}