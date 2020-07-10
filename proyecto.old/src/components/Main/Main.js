import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import ListProducts from '../ecommerce/ad-ecommerce/Products/ListProducts'
import ShoopingCar from '../ecommerce/cli-ecommerce/ShoopingCar/ShoopingCar'
import Payments from '../ecommerce/cli-ecommerce/Payments/Payments'

import ShoopinCards from '../ecommerce/ad-ecommerce/ShoopingCart/ListShoopingCard'
import AddCategory from '../ecommerce/ad-ecommerce/Category/AddCategory'



export default function Main() {

    const [carrito, setCarrito] = useState([]);
    const [autenticado, setAutenticado] = useState(false);
    const [price, setTotalPrice]  = useState([]);
    const [isAction, setisAction] = useState([])

    const userState = {
        token: localStorage.getItem('token'),
        autenticado: localStorage.getItem('token') ? true : false,
        usuario: localStorage.getItem('usuario') !== undefined ? JSON.parse(localStorage.getItem('usuario')) : null,
        //isAdmin: localStorage.getItem('usuario') ? JSON.parse(localStorage.getItem('usuario')).isadmin : false
        isAdmin: true
    }


    return (

        <Router>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Veterinaria Pepe</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">


                        <Link id="sale" className="nav-link" to="/Sale">Tienda</Link>

                        {
                            userState.isAdmin ? '' :
                                <Link id="cart" className="nav-link" to="/Cart">Mi Carrito</Link>
                        }

                        {
                            userState.isAdmin ?
                                <Link id="carrito" className="nav-link" to="/AddCategory">Agregar Categoria</Link>
                                : ''
                        }

                        {
                            userState.isAdmin ?
                                <Link id="carrito" className="nav-link" to="/ShoopinCards">Ver Entregas</Link>
                                : ''
                        }

                    </Nav>
                </Navbar.Collapse>

                <Navbar.Text className="mr-1">Bienvenido</Navbar.Text>
                {
                    userState.usuario ? userState.usuario.nombre : "Visitante"
                }
            </Navbar>

            <Switch>
                <Route path="/Sale">
                    <ListProducts carProduct={carrito} setCarProduct={setCarrito} isAdmin={userState} isAction={isAction} setisAction={setisAction} />
                </Route>
                <Route path="/Cart">
                    <ShoopingCar carProduct={carrito} setCarProduct={setCarrito} user={userState} price={price} setTotalPrice={setTotalPrice} />
                </Route>

                <Route path="/Pago">
                    <Payments price={price} carProduct={carrito}  isAdmin={userState} />
                </Route>

                <Route path="/AddCategory">
                    <AddCategory />
                </Route>

                <Route path="/ShoopinCards">
                    <ShoopinCards />
                </Route>

            </Switch>
        </Router>
    )
}