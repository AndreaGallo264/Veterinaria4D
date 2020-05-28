import React from 'react';
import './CL-NavBar.css';
import LogoVector from './../../img/LogoVector.png';
import Logotipo from './../../img/Logotipo.png';
import carritoImg from './../../img/carrito.png';
import CL_SearchBar from './../CL-SearchBar/CL-SearchBar';



const CL_NavBar = () => {
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
              <a className="nav-link" href="#"><img src={carritoImg} alt="" width="30px"className="carrito-nav"/></a>
            </li>
          
        
          </ul>
          <CL_SearchBar/>
        </div>
      </nav>

     );
}
 
export default CL_NavBar;