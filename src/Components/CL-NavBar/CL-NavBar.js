import React from 'react';
import './CL-NavBar.css';
import LogoVector from './../../img/LogoVector.png';
import Logotipo from './../../img/Logotipo.png';
import carritoImg from './../../img/carrito.png';
import CL_SearchBar from './../CL-SearchBar/CL-SearchBar';

import CL_MainShoopingCart from './../CL-MainShoopingCart/CL-MainShoopingCart'



const CL_NavBar = (props) => {
    return ( 
        <nav className="navbar navbar-expand-lg main-nav sticky-top">
        <a className="navbar-brand title-2 titulo-navbar" href="#">
        <img src={LogoVector} alt="" className="imagen-nav"/><img src={Logotipo} alt="" className="logotipo-nav"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item title-1">
              <a className="nav-link" href="#">Inicio<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item title-1">
              <a className="nav-link" href="#">Nuestros Productos</a>
            </li>
            <li className="nav-item title-1">
              <a className="nav-link" href="#">Nuestros Servicios</a>
            </li>
            <li className="nav-item">
             <CL_MainShoopingCart  carrito={props.carrito} setCarrito={props.setCarrito}  price={props.price} setTotalPrice={props.setTotalPrice} functionPrice={props.functionPrice}  setFunctionPrice={props.setFunctionPrice}   />
            </li>
          </ul>
          <CL_SearchBar/>
        </div>
      </nav>

     );
}
 
export default CL_NavBar;