import React, { useState } from 'react';

import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom";

//Components
import PrincipalMenu from './components/web_components/0_principalmenu/principalmenu'
import TopInfo       from './components/web_components/5_topinfo/topinfo'
import Main          from './components/web_components/6_main/main'
import Footer        from './components/web_components/4_footer/footer'

//Users
import Login    from './components/cli_components/users/Login'
import Register from './components/cli_components/users/cli-usrs/Register'
import ListUsr from './components/ad_components/users/ad-usrs/UserPanel'
import EditUsr from './components/cli_components/users/cli-usrs/EditData'


//Ecommerce 
import ListProduct    from './components/ad_components/ecommerce/Products/ListProducts'
import MyCart         from './components/cli_components/ecommerce/ShoopingCar/ShoopingCar'
import Purchase       from './components/cli_components/ecommerce/Purchase/Purchase'
import FinishPurchase from './components/cli_components/ecommerce/Purchase/FinishPurchase'
import CategoryPanel  from './components/ad_components/ecommerce/Category/CategotyPanel'
import PurchasePanel  from './components/ad_components/ecommerce/Purchase/PurchasePanel'
import ShippingDetail from './components/cli_components/ecommerce/ShippingDetail/ShippingDetail'


//Turnos
import ShiftsPanel       from './components/cli_components/shifts/ShiftsPanel'
import SpeciePanel       from './components/cli_components/shifts/SpeciePanel'
import SpecialityPanel   from './components/cli_components/shifts/SpecialityPanel'

//Main 
import Help            from './components/web_components/7_help/help'

//MP 
import Chekout         from './components/mp_component/Checkout'


function App() {

  const [carrito, setCarrito]         = useState([]);
  const [autenticado, setAutenticado] = useState([]);
  const [price, setTotalPrice]        = useState([]);
  const [kntcat, setKntcat]           = useState([]);
  const [realstock, setRealStock]     = useState(0);
  const [isAction, setisAction]       = useState([]);
  const [functionPrice, setFunctionPrice] = useState([]);
  const [datusr , setdatusr]              = useState([]);
  const [Shippingdetail , setShippingDetail] = useState({
    province : 'San Miguel de Tucuman' , 
    location : 'Tucuman' , 
    postalcode : '4000' 
  });

  const userState = {
    token: localStorage.getItem('token'),
    autenticado: localStorage.getItem('token') ? true : false,
    usuario: localStorage.getItem('usuario') !== undefined ? JSON.parse(localStorage.getItem('usuario')) : null,
    isAdmin: localStorage.getItem('usuario') ? JSON.parse(localStorage.getItem('usuario')).isadmin : false
  }

  const commonprops = {
    userState , kntcat, setKntcat , datusr , setdatusr , realstock, setRealStock , setShippingDetail
  }

  return (
    <div className="App">

      <Router>
        <TopInfo />
        <Switch>

        <Route strict path="/chekout">
          <Chekout />
        </Route>

        <Route strict path="/help">
            <PrincipalMenu  {...commonprops} />
            <Help />
        </Route>

        <Route strict path="/shippingdetail">
            <PrincipalMenu  {...commonprops} />
            <ShippingDetail userState={userState} Shippingdetail={Shippingdetail} setShippingDetail={setShippingDetail} />
        </Route>

        <Route strict path="/listusr">
            <PrincipalMenu {...commonprops} />
            <ListUsr userState={userState} />
        </Route>
        <Route strict path="/finishpurchase">
            <PrincipalMenu {...commonprops} />
            <FinishPurchase />
        </Route>
        <Route strict path="/purchasepanel">
            <PrincipalMenu {...commonprops} />
            <PurchasePanel userState={userState} kntcat={kntcat} setKntcat={setKntcat}  />
        </Route>
        <Route strict path="/categorypanel">
            <PrincipalMenu {...commonprops} />
            <CategoryPanel userState={userState} />
          </Route>
        <Route strict path="/addspecie">
            <PrincipalMenu {...commonprops} />
            <SpeciePanel   userState={userState} />
          </Route>
        <Route strict path="/addspeciality">
            <PrincipalMenu {...commonprops} />
            <SpecialityPanel userState={userState} />
          </Route>
          <Route strict path="/shiftspanel">
            <PrincipalMenu {...commonprops} />
            <ShiftsPanel userState={userState} />
          </Route>
          <Route strict path="/purchase">
            <PrincipalMenu {...commonprops} />
            <Purchase userState={userState} carProduct={carrito} setCarProduct={setCarrito} price={price} setTotalPrice={setTotalPrice} functionPrice={functionPrice} setFunctionPrice={setFunctionPrice} kntcat={kntcat} setKntcat={setKntcat} Shippingdetail={Shippingdetail} setShippingDetail={setShippingDetail} />
          </Route>
          <Route strict path="/MyCart">
            <PrincipalMenu {...commonprops} />
            <MyCart carProduct={carrito} setCarProduct={setCarrito} user={userState} price={price} setTotalPrice={setTotalPrice} kntcat={kntcat} setKntcat={setKntcat} realstock={realstock} setRealStock={setRealStock} />
          </Route>
          <Route strict path="/listproduct">
            <PrincipalMenu {...commonprops} />
            <ListProduct   userState={userState} carProduct={carrito} setCarProduct={setCarrito} isAdmin={userState} isAction={isAction} setisAction={setisAction} kntcat={kntcat} setKntcat={setKntcat} price={price} setTotalPrice={setTotalPrice} functionPrice={functionPrice} setFunctionPrice={setFunctionPrice} realstock={realstock} setRealStock={setRealStock} />
          </Route>
          <Route strict path="/editusr">
            <PrincipalMenu {...commonprops}  />
            <EditUsr userState={userState} datusr={datusr} setDatUsr={setdatusr} />
        </Route>
          <Route strict path="/register">
            <PrincipalMenu {...commonprops} />
            <Register autenticado={autenticado} setAutenticado={setAutenticado} userState={userState}  />
          </Route>
          <Route strict path="/login">
            <PrincipalMenu {...commonprops} />
            <Login autenticado={autenticado} setAutenticado={setAutenticado} />
          </Route>
          <Route strict path="/home">
            <PrincipalMenu {...commonprops} />
            <Main />
          </Route>
          <Route strict path="/">
            <PrincipalMenu {...commonprops} />
            <Main />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
