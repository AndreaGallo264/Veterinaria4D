import React from 'react';
import './CL-NavBar.css';
import LogoVector from './../../img/LogoVector.png';
import Logo from './../../img/Logotipo.png';
import CL_MainShoopingCart from './../CL-MainShoopingCart/CL-MainShoopingCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CL_NavBar = (props) => {
  const userType = localStorage.getItem();
    return ( 
      <Navbar expand="lg" className='navbar main-nav sticky-top'>
        <Link>
          <img src={LogoVector} alt="Logo" className="image-nav"/>
          <img src={Logo} alt="Patitas" className="logo-nav"/>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link className="nav-link nav-item title-1 mr-4" to="/">Home</Link>
            <Link className="nav-link nav-item title-1 mr-4" to="/ecommerce">Nuestros productos</Link>
            <Link className="nav-link nav-item title-1" to="/">Nuestros Servicios</Link>
            <Nav.Item><CL_MainShoopingCart  carrito={props.carrito} setCarrito={props.setCarrito}  price={props.price} setTotalPrice={props.setTotalPrice}  />
                    </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     );
}
 
export default CL_NavBar;