import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Dropdown, Image, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../resources/logo.png';
import './principalMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookReader ,faUserPlus, faSignOutAlt, faStore, faShoppingCart, faShoppingBag, faSignInAlt, faQuestionCircle, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import UserVisitor from '../../resources/createUserBlack.png';
import UserClient from '../../resources/createUser.png';

export default function Principalmenu(props) {
    const [expanded, setExpanded] = useState(false);
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

     useEffect(() => {
        if (props.userState.autenticado === true) {
            getusrbyId();
        }
    }, []); 

    return (


        <Navbar expanded={expanded} expand="lg" fluid className="position-sticky bg-menu" fixed="top">
            <Link to='/'><Navbar.Brand><Image fluid src={Logo} width='50px' /></Navbar.Brand></Link>
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link id="sale" onClick={() => setExpanded(false)} className="nav-link font-weight-bold text-dark" to="/" ><FontAwesomeIcon icon={faHome} className='mr-2' />Inicio</Link>
                    <Link to="/listproduct" onClick={() => setExpanded(false)} className="nav-link font-weight-bold text-dark" activeClassName="active"><FontAwesomeIcon icon={faStore} className='mr-2' /> Tienda </Link>

                    {
                        props.userState.isAdmin ? "" : <Link onClick={() => setExpanded(false)} id="sale" className="nav-link font-weight-bold text-dark" to="/MyCart"><FontAwesomeIcon icon={faShoppingCart} className='mr-2' /> Mi Carrito <Badge variant="danger">{props.kntcat}</Badge></Link>
                    }

                    {
                        props.userState.isAdmin ? "" : props.userState.usuario ? <Link onClick={() => setExpanded(false)} id="sale" className="nav-link font-weight-bold text-dark" to="/purchasepanel"><FontAwesomeIcon icon={faShoppingBag} className='mr-2' />Mis Compras</Link> : ""
                    }

                    {
                        props.userState.isAdmin ? "" : props.userState.usuario ? <Link onClick={() => setExpanded(false)} id="sale" className="nav-link font-weight-bold text-dark" to="/shiftspanel">
                            <FontAwesomeIcon icon={faCalendarAlt} className='mr-2' /> Solicitar Turno</Link> : ""
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

                <Navbar.Text className="mr-1 text-dark font-weight-bold"> 
                <Image className = 'mr-2' src={!props.userState.usuario ? UserVisitor : UserClient} alt=''></Image>
                Bienvenido
                {
                        props.userState.usuario ? " " + props.userState.usuario.nombre : " Visitante"
                    }
                </Navbar.Text>
                {
                    props.userState.usuario ? "" : <Link onClick={() => setExpanded(false)} id="sale" className="text-dark nav-link font-weight-bold" to="/login"><FontAwesomeIcon icon={faSignInAlt} className='mr-2' />Acceder</Link>
                }
                {
                    props.userState.usuario ? "" : <Link onClick={() => setExpanded(false)} id="sale" className="text-dark nav-link font-weight-bold" to="/register">
                        <FontAwesomeIcon icon={faUserPlus} className='mr-1' />    Registrarme
                    </Link>
                }



                {
                    props.userState.usuario ? <Link onClick={() => setExpanded(false)} id="sale" className="text-dark nav-link font-weight-bold" to="/editusr">
                            <FontAwesomeIcon icon={faBookReader} className='mr-2' />Mis Datos</Link> : ""
                }
                <Link onClick={() => setExpanded(false)} id="sale" className="text-dark nav-link font-weight-bold" to="/help"><FontAwesomeIcon icon={faQuestionCircle} className='mr-2' />Ayuda</Link>

                {
                    props.userState.usuario ? <Link onClick={() => {setExpanded(false); logouts();}} id="adm" className="text-dark nav-link font-weight-bold" to="/home" > <FontAwesomeIcon icon={faSignOutAlt} className='mr-2' />Salir</Link> : ""
                }

            </Navbar.Collapse>
        </Navbar>




    )
}