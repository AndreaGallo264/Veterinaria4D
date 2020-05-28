import React from 'react';
import './CL-MainCarousel.css';
import imgConfia from './../../img/Confia-en-nosotros.jpg';
import imgProductos from './../../img/Nuestros-productos.jpg';
import imgConocenos from './../../img/Equipo-vete.jpg';

const CL_MainCarousel = () => {
    return ( 
        <div className="container">
            <div className="row w-100">
                <div className="col">
                <div id="carouselExampleIndicators" className="carousel slide main-carousel" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner shadow">
    <div className="carousel-item active">
    <div className="card bg-dark text-white title-2 ">
  <img src={imgConfia} className="card-img" alt="..."/>
  <div className="card-img-overlay card-carousel">
    <h5 className="card-title">CONFIÁ EN NOSOTROS</h5>
    <p className="card-text">Click aquí para solicitar tu turno. Sea cual sea tu necesidad, prometemos un servicio de primera índole</p>
  </div>
</div>
    </div>
    <div className="carousel-item">
    <div className="card bg-dark text-white title-2">
  <img src={imgProductos} className="card-img" alt="..."/>
  <div className="card-img-overlay card-carousel">
    <h5 className="card-title">EXPLORÁ NUESTROS PRODUCTOS</h5>
    <p className="card-text">Dale un gusto a tu mejor amigo. Recorre nuestro catalogo de productos </p>
  </div>
</div>
    </div>
    <div className="carousel-item">
    <div className="card bg-dark text-white title-2">
  <img src={imgConocenos} className="card-img" alt="..."/>
  <div className="card-img-overlay card-carousel">
    <h5 className="card-title">CONOCENOS</h5>
    <p className="card-text">Descubri como esta conformado nuestro equipo de profesionales</p>

  </div>
</div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
                </div>
            </div>
        </div>

     );
}
 
export default CL_MainCarousel;