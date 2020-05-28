import React from 'react';
import CL_SelectorCategoria from './../CL-SelectorCategoria/CL-SelectorCategoria';
import CL_SearchBar from './../CL-SearchBar/CL-SearchBar';
import CL_VisualizadorCategoria from './../CL-VisualizadorCategoria/CL_VisualizadorCategoria';
import CL_MainProduct from './../CL-MainProduct/CL-MainProduct';

const CL_MainFeature = () => {
    return ( <div className="container mt-4">
        <div className="row">
            <div className="col-4">
                <CL_SelectorCategoria/>

            </div>
            <div className="col-8">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <CL_SearchBar/>
                        </div>
                        <div className="col">
                            <CL_VisualizadorCategoria/>
                        </div>
                        
                          
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                            <CL_MainProduct/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div> );
}
 
export default CL_MainFeature;