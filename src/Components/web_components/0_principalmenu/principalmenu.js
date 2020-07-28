import React, { useEffect } from 'react';
import { Navbar, Nav, Dropdown, Image, Badge } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../resources/logo.png';
import './principalMenu.css';

//Agregados
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPaw, faStore, faShoppingCart, faShoppingBag, faSignInAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';


export default function Principalmenu(props) {

    const logouts = () => {
        localStorage.clear();
        window.location.reload();
    }

    const getusrbyId = async () => {
        await fetch(process.env.REACT_APP_BACKEND_URL + "listUsrsbyId/" + props.userState.usuario._id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': props.userState.token
            }
        }).then(async res => await res.json())
            .then(
                (result) => {
                    if (result.success) {
                        props.setdatusr(result.users);
                        props.setShippingDetail({
                            province: 'San Miguel de Tucuman',
                            location: 'Tucuman',
                            postalcode: '4000',
                            dataadress: result.users[0] ? result.users[0].address : ""
                        });
                    }
                },
                (error) => {
                    alert("Ocurrio un Error, reintente nuevamente");
                }
            );
    }

/*     useEffect(() => {
        if (props.userState.autenticado === true) {
            getusrbyId();
        }
    }, []); */

    return (


        <Navbar collapseOnSelect expand="lg" fluid className="position-sticky bg-menu" fixed="top">
            <Navbar.Brand href="#home"><Image fluid src={Logo} width='50px' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link id="sale" className="nav-link font-weight-bold" to="/"><FontAwesomeIcon icon={faHome} className='mr-2' />Inicio</Link>
                    <NavLink to="/listproduct" className="nav-link font-weight-bold" activeClassName="active"><FontAwesomeIcon icon={faStore} className='mr-2' /> Tienda </NavLink>

                    {
                        props.userState.isAdmin ? "" : <Link id="sale" className="nav-link font-weight-bold" to="/MyCart"><FontAwesomeIcon icon={faShoppingCart} className='mr-2' /> Mi Carrito <Badge variant="danger">{props.kntcat}</Badge></Link>
                    }

                    {
                        props.userState.isAdmin ? "" : props.userState.usuario ? <Link id="sale" className="nav-link font-weight-bold" to="/purchasepanel"><FontAwesomeIcon icon={faShoppingBag} className='mr-2' />Mis Compras</Link> : ""
                    }

                    {
                        props.userState.isAdmin ? "" : props.userState.usuario ? <Link id="sale" className="nav-link font-weight-bold" to="/shiftspanel">Solicitar Turno</Link> : ""
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
                    props.userState.usuario ? "" : <Link id="sale" className="nav-link font-weight-bold" to="/login"><FontAwesomeIcon icon={faSignInAlt} className='mr-2' />Acceder</Link>
                }
                {
                    props.userState.usuario ? "" : <Link id="sale" className="nav-link font-weight-bold" to="/register">Registrarme</Link>
                }


                <Navbar.Text className="mr-1 ">Bienvenido</Navbar.Text>
                {
                    props.userState.usuario ? props.userState.usuario.nombre : "Visitante"
                }
                <Link id="sale" className="nav-link font-weight-bold" to="/help"><FontAwesomeIcon icon={faQuestionCircle} className='mr-2' />Ayuda</Link>
                {
                    props.userState.usuario ? <Link id="sale" className="nav-link font-weight-bold" to="/editusr">Mis Datos</Link> : ""
                }

                {
                    props.userState.usuario ? <Link id="adm" className="nav-link font-weight-bold" to="/home" onClick={logouts}  >Salir</Link> : ""
                }

            </Navbar.Collapse>
        </Navbar>




    )
}