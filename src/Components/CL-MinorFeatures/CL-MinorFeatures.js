import React from 'react';
import CL_SliderProductos from './../CL-SliderProductos/CL-SliderProductos';

const CL_MinorFeatures = (props) => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col">
                    <CL_SliderProductos  products={props.products} setProducts={props.setProducts}/>
                </div>
            </div>
        </div>
     );
}
 
export default CL_MinorFeatures;