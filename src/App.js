import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-credit-cards/es/styles-compiled.css';
import './App.css';
import CL_NavBar from './components/CL-NavBar/CL-NavBar';
import CL_Presentacion from './components/CL-Presentacion/Cl-Presentacion';
import CL_MainCarousel from './components/CL-MainCarousel/CL-MainCarousel';
import CL_LogBar from './components/CL-LogBar/CL-LogBar';
import CL_Footer from './components/CL-Footer/CL-Footer';
import CL_About from './components/CL-About/CL-About';
import CL_MainFeature from './components/CL-MainFeature/CL-MainFeature';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CL_MinorFeatures from './components/CL-MinorFeatures/CL-MinorFeatures';
import CL_Purchase from './components/CL-Purchase/CL-Purchase'
import AD_ProductPanel from './components/AD-Product/AD-ProductPanel'
import AD_Category from './components/AD-Category/AD-CategotyPanel'

import ListAdmins from './../src/components/ListAdmins/ListAdmins';

function App() {

  const [products, setProducts] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [selectProduct, setSelectProduct] = useState([]);
  const [price, setTotalPrice] = useState([]);


  return (

    <div className="App">
      <Router>
        <CL_NavBar carrito={carrito} setCarrito={setCarrito} price={price} setTotalPrice={setTotalPrice} />
        <CL_LogBar />
        <Switch>
          <Route path="/home">
            <CL_Presentacion />
            <CL_MainCarousel />
            <CL_About />
          </Route>
          <Route path="/ecommerce">
            <CL_MainFeature products={products} setProducts={setProducts} selectProduct={selectProduct} setSelectProduct={setSelectProduct} carrito={carrito} setCarrito={setCarrito} />
            <CL_MinorFeatures products={products} setProducts={setProducts} selectProduct={selectProduct} setSelectProduct={setSelectProduct} />
          </Route>
          <Route path="/turnos">
            <h1>Solicita tu turno</h1>
          </Route>

          <Route path ="/purchase">
            <CL_Purchase carrito={carrito} setCarrito={setCarrito}  price={price} setTotalPrice={setTotalPrice} />
          </Route>

          <Route path="/AD-home">
            <h1>AD-home</h1>
          </Route>
          <Route path="/AD-ecommerce">
            <h1>Ad-Ecommerce</h1>
          </Route>
          <Route path="/AD-turnos">
          </Route>

          <Route path="/AD-Product">
            <AD_ProductPanel />
          </Route>

          <Route path="/AD-Category">
            <AD_Category />
          </Route>
          <Route path='/admin/adminList'>
            <ListAdmins/>
        </Route>
          
        </Switch>
          <CL_Footer />
      </Router>



    </div>
  );
}

export default App;
