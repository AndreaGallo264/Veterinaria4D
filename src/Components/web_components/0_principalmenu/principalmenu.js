import React from 'react';
import { Navbar, Nav, Dropdown, Image, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../resources/logo.png';
import './principalMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPaw, faStore, faShoppingCart, faShoppingBag, faSignInAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';


export default function Principalmenu(props) {

    const logouts = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <Navbar expand="lg" fluid fixed="top" className="position-sticky bg-menu">
            <Navbar.Brand><Image fluid src={Logo} width='80px' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link id="sale" className="nav-link text-dark font-weight-bold font-size-nav-links" to="/"><FontAwesomeIcon icon={faHome} className='mr-2' />Inicio</Link>
                    <Nav.Link href="#aboutus" className='text-dark font-weight-bold font-size-nav-links' ><FontAwesomeIcon icon={faPaw} className='mr-2' />Nuestros Servicios</Nav.Link>
                    <Link id="sale" className="nav-link text-dark font-weight-bold font-size-nav-links" to="/listproduct"><FontAwesomeIcon icon={faStore} className='mr-2' />Tienda</Link>

                    {
                        props.userState.isAdmin ? "" : <Link id="sale" className="nav-link text-dark font-weight-bold font-size-nav-links" to="/MyCart"> <FontAwesomeIcon icon={faShoppingCart} className='mr-2' />Mi Carrito <Badge variant="danger">{props.kntcat}</Badge></Link>
                    }

                    {
                        props.userState.isAdmin ? "" : props.userState.usuario ? <Link id="sale" className="nav-link" to="/purchasepanel"><FontAwesomeIcon icon={faShoppingBag} className='mr-2' />Mis Compras</Link> : ""
                    }

                    {
                        props.userState.isAdmin ? "" : props.userState.usuario ? <Link id="sale" className="nav-link" to="/shiftspanel">Solicitar Turno</Link> : ""
                    }



                </Nav>

                {
                    props.userState.isAdmin ?
                        <Dropdown>
                            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                Administrador Ecommerce
                </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Link id="sale" className="nav-link" to="/listusr">Administracion Usuarios</Link>
                                <Link id="sale" className="nav-link" to="/shiftspanel">Administracion Turnos</Link>
                                <Link id="sale" className="nav-link" to="/categorypanel"> Administracion Categorias</Link>
                                <Link id="sale" className="nav-link" to="/addSPecie"> Administracion Especies</Link>
                                <Link id="sale" className="nav-link" to="/addSPeciality"> Administracion Especialidades</Link>
                                <Link id="sale" className="nav-link" to="/purchasepanel"> Administracion Compras</Link>
                            </Dropdown.Menu>
                        </Dropdown>
                        : ""}

                {
                    props.userState.usuario ? "" : <Link id="sale" className="nav-link text-dark font-weight-bold font-size-nav-links" to="/login"><FontAwesomeIcon icon={faSignInAlt} className='mr-2' />Acceder</Link>
                }


                <Navbar.Text className="mr-1 text-dark font-weight-bold font-size-nav-links">
                    Bienvenido 
                    {
                        props.userState.usuario ? " "+props.userState.usuario.nombre : " Visitante"
                    }
                </Navbar.Text>

                <Link id="sale" className="nav-link text-dark font-weight-bold font-size-nav-links" to="/help"><FontAwesomeIcon icon={faQuestionCircle} className='mr-2' />Ayuda</Link>
                {
                    props.userState.usuario ? <Link id="sale" className="nav-link text-dark font-weight-bold font-size-nav-links" to="/register">Mis Datos</Link> : ""
                }

                {
                    props.userState.usuario ? <Link id="adm" className="nav-link text-dark font-weight-bold font-size-nav-links" to="/home" onClick={logouts}  >Salir</Link> : ""
                }

            </Navbar.Collapse>
        </Navbar>




    )
}