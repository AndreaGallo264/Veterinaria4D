import React, { Fragment } from 'react';
import './CL-Presentacion.css';
import './../Css/hover-min.css';
import Logotipo from './../../img/Logotipo.png'

const CL_Presentacion = () => {

    return ( <Fragment>

<div className="container">
            <div className="row row-col-2 row-presentacion shadow">
                <div className="col-8 presentacion-logo box-shadow-purple hvr-wobble-bottom d-flex align-items-end">
                    <img src={Logotipo} alt="" className="w-25"/>
                  <p className="content text-uppercase title-1">considera que los animales son nuestra familia y amigos. Por eso queremos atenderte con una atencion de primera calidad. </p>
                </div>
                <div className="col-4 presentacion-info title-1 text-uppercase box-shadow-purple hvr-wobble-bottom ">
                    <p>Recibimos pacientes:</p>
                  <img src="" alt=""/>
                  <img src="" alt=""/>
                  <img src="" alt=""/>
                  <img src="" alt=""/>
                  <img src="" alt=""/>
                </div>
            </div>
        </div>



    </Fragment>
    
              
           
     
     );
}
 
export default CL_Presentacion;