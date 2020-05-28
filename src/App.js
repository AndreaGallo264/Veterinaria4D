import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CL_NavBar from './Components/CL-NavBar/CL-NavBar';
import CL_Presentacion from './Components/CL-Presentacion/Cl-Presentacion';
import CL_MainCarousel from './Components/CL-MainCarousel/CL-MainCarousel';
import CL_LogBar from './Components/CL-LogBar/CL-LogBar';
import CL_Footer from './Components/CL-Footer/CL-Footer';
import CL_About from './Components/CL-About/CL-About';
import CL_MainFeature from './Components/CL-MainFeature/CL-MainFeature';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CL_MinorFeatures from './Components/CL-MinorFeatures/CL-MinorFeatures';

function App() {
  return (
    
    <div className="App">
      <Router>
      <CL_NavBar/>
      <CL_LogBar/>
        <Switch>
          <Route path="/home">
          <CL_Presentacion/>
    <CL_MainCarousel/>
    <CL_About/>
          </Route>
          <Route path="/ecommerce">
            <CL_MainFeature/>
            <CL_MinorFeatures/>
          </Route>
          <Route path="/turnos">
          <h1>Solicita tu turno</h1>
          </Route>
          <Route path="/AD-home">
            <h1>AD-home</h1>
          </Route>
          <Route path="/AD-ecommerce">
            <h1>Ad-Ecommerce</h1>
          </Route>
          <Route path="/AD-turnos">

          </Route>
        </Switch>
        <CL_Footer/>
      </Router>
   
   
   
    </div>
  );
}

export default App;
