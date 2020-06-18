import React, { useState, useEffect } from 'react';

const CL_MainProduct = (props) => {

  const [knt, setKnt] = useState([]);

  const setknt = (e) => {
    setKnt(e.target.value);
  }

  const saveKart = () => {

    if (props.selectProduct.length > 0) {
      props.selectProduct[0].knt = knt
      props.setCarrito([...props.carrito, props.selectProduct[0]]);
      
    } else {
      props.products[0].knt = knt;
      props.setCarrito([...props.carrito, props.products[0]]);
      
    }


  }

  useEffect(() => {
    setKnt(1);
  });

  return (


    <div className="card bg-dark text-white">
      <img src={props.selectProduct.length > 0 ? props.selectProduct[0].urlimg : props.products[0] ? props.products[0].urlimg : ""} className="card-img" alt="..." />
      <div className="card-img-overlay text-center d-flex flex-column justify-content-center">
        <h5 className="card-title">{props.selectProduct.length > 0 ? props.selectProduct[0].title : props.products[0] ? props.products[0].title : "Seleccione Categoria"}</h5>
        <p className="card-text">Detalles :{props.selectProduct.length > 0 ? props.selectProduct[0].detail : props.products[0] ? props.products[0].detail : ""}</p>
        <p className="card-text">Disponibles :  {props.selectProduct.length > 0 ? props.selectProduct[0].stock : props.products[0] ? props.products[0].stock : ""}</p>
        <p className="card-text">$ {props.selectProduct.length > 0 ? props.selectProduct[0].price : props.products[0] ? props.products[0].price : ""}</p>


        <div className="form-group">
          <label for="pwd">Cantidad</label>
          <input type="number" onChange={e => setknt(e)} class="form-control" id="knt" min="1" defaultValue={1} />
        </div>

        <button type="button" class="btn btn-primary" onClick={saveKart}>Agregar al Carrito</button>
      </div>
    </div>



  );
}

export default CL_MainProduct;