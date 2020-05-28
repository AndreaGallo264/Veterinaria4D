import React, { Fragment } from 'react';
import './CL-SelectorCategoria.css'

const CL_SelectorCategoria = () => {
    return ( 
        <Fragment>
            <div className="bg-white text-center menu-categoria pb-2 custom-shadow ">
                <br/>
                <p className="texto-2 font-weight-bold">Seleccione una categoria de productos</p>
                <br/>
           <ul className="texto-2">
               <li className="hvr-forward">
                   <p>Categoria1</p>
               </li>
               <br/>
               <li className="hvr-forward">
                   <p>Categoria2</p>
               </li>
               <br/>
               <li className="hvr-forward">
                   <p>Categoria3</p>
               </li>
               <br/>
               <li className="hvr-forward">
                   <p>Categoria4</p>
               </li>
               <br/>
               <li className="hvr-forward">
                   <p>Categoria5</p>
               </li>
           </ul>

            </div>
           
        </Fragment>
     );
}
 
export default CL_SelectorCategoria;