import React , {useState , useEffect} from 'react';
import CL_SelectorCategoria from './../CL-SelectorCategoria/CL-SelectorCategoria';
import CL_SearchBar from './../CL-SearchBar/CL-SearchBar';
import CL_VisualizadorCategoria from './../CL-VisualizadorCategoria/CL_VisualizadorCategoria';
import CL_MainProduct from './../CL-MainProduct/CL-MainProduct';

const CL_MainFeature = (props) => {

    const [selectCategory, setSelectCategory] = useState([]);
    const [selecnametCategory, setSelecNametCategory] = useState([]);
 

    return ( <div className="container mt-4">
        <div className="row">
            <div className="col-4">
                <CL_SelectorCategoria selectCategory={selectCategory} setSelectCategory={setSelectCategory} selecnametCategory={selecnametCategory} setSelecNametCategory={setSelecNametCategory} products={props.products} setProducts={props.setProducts}  selectProduct={props.selectProduct} setSelectProduct={props.setSelectProduct}/>

            </div>
            <div className="col-8">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <CL_SearchBar/>
                        </div>
                        <div className="col">
                            <CL_VisualizadorCategoria selectCategory={selectCategory} setSelectCategory={setSelectCategory} selecnametCategory={selecnametCategory} setSelecNametCategory={setSelecNametCategory} />
                        </div>
                        
                          
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                            <CL_MainProduct products={props.products} setProducts={props.setProducts} selectProduct={props.selectProduct} setSelectProduct={props.setSelectProduct} carrito={props.carrito} setCarrito={props.setCarrito} />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div> );
}
 
export default CL_MainFeature;