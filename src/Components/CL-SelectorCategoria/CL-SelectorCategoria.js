import React, { Fragment, useState, useEffect } from 'react';
import './CL-SelectorCategoria.css'

const CL_SelectorCategoria = (props) => {


    const [category, setCategory] = useState([]);

    const Categorys = [
        { datecreate: "2020-05-17T22:42:56.324Z", _id: "5ec1be2bab214532001848c3", detail: "Nuevos Alimentos", name: "Alimentos", __v: 0 },
        { datecreate: "2020-05-17T22:42:56.324Z", _id: "5ec1be31ab214532001848c4", detail: "juguetes", name: "Juguetes", __v: 0 },
        { datecreate: "2020-05-17T22:42:56.324Z", _id: "5ec1be36ab214532001848c5", detail: "Medicamentos", name: "Medicamentos", __v: 0 }
    ]

    // Obtener las categorias
    const getCategory = async () => {
        /* const solicitud = await fetch(process.env.REACT_APP_BACKEND_URL + "/ListCategory", {
             method: 'GET',
             headers: {
                 'Content-Type': 'application/json',
             }
         });
         const respuesta = await solicitud.json();
         setCategory(respuesta.categorys); */

        setCategory(Categorys);
    };

    const handleClick = (e) => {
        props.setSelectCategory(e.currentTarget.getAttribute("data_id"));
        props.setSelecNametCategory(e.currentTarget.getAttribute("name"));
        props.setSelectProduct([]);
    }

    useEffect(() => {
        getCategory()
    }, []);

    

    const Products = [
        {
            category: "5ec1be2bab214532001848c3",
            detail: "Alimentos",
            price: "500",
            stock: 1,
            title: "DogChowJunior",
            urlimg: "https://www.costco.com.mx/medias/sys_master/products/hd3/h19/16525371801630.jpg",
            __v: 0,
            _id: "5ec486e27640cb26ec6a7b55"
        },
        {
            category: "5ec1be2bab214532001848c3",
            detail: "Sobresitos",
            price: "250",
            stock: 1,
            title: "CatCahow Sobresitos",
            urlimg: "https://hollywoodpetshop.com.ar/wp-content/uploads/2019/06/ADULTO-PESCADO.png",
            __v: 0,
            _id: "5ec48b187640cb26ec6a7b58"
        }
    ];

    // Obtener los Productos
    const getProducts = async () => {
        /* const solicitud = await fetch(process.env.REACT_APP_BACKEND_URL + "/ListProducts", {
             method: 'GET',
             headers: {
                 'Content-Type': 'application/json',
             }
         });
         const respuesta = await solicitud.json();
         setProducts(respuesta.products); 
         return respuesta;*/

        props.setProducts(Products);
    }

    //Obtener los Productos por Categoria
    const getProductsByCategory = async (catselec) => {
        /*const solicitud = await fetch('http://localhost:4000/ListCategoryById/' + catselec, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const respuesta = await solicitud.json();
        console.log(respuesta);
        setProducts(respuesta.products); */

        props.setProducts(Products);

    }

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        getProductsByCategory(props.selectCategory);
    }, [props.setSelectCategory]);


    return (
        <Fragment>
            <div className="bg-white text-center menu-categoria pb-2 custom-shadow ">
                <br />
                <p className="texto-2 font-weight-bold">Seleccione una categoria de productos</p>
                <br />
                <ul className="texto-2">

                    {category.map(category => {
                        return (
                            <Fragment>
                                <li className="hvr-forward" key={category._id} value={category._id} data_id={category._id}  >
                                    <p data_id={category._id} name={category.detail} onClick={e => handleClick(e)}>{category.name}</p>
                                </li>
                                <br />
                            </Fragment>
                        );
                    }, this)
                    }


                </ul>

            </div>

        </Fragment>
    );
}

export default CL_SelectorCategoria;