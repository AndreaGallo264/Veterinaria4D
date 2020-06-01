import React from 'react';
import producto1 from './../../img/nariz.jpg';

const CL_MainProduct = (props) => {


  return (
    
    <div className="card bg-dark text-white">
      <img src={props.products[0]?props.products[0].urlimg:""} className="card-img" alt="..." />
      <div className="card-img-overlay text-center d-flex flex-column justify-content-center">
  <h5 className="card-title">{props.products[0]?props.products[0].title:"Seleccione Categoria"}</h5>
        <p className="card-text">Detalles :{props.products[0]?props.products[0].detail:""}</p>
        <p className="card-text">Disponibles :  {props.products[0]?props.products[0].stock:""}</p>
        <p className="card-text">$ {props.products[0]?props.products[0].price:""}</p>
      </div>
    </div>
  );
}

export default CL_MainProduct;