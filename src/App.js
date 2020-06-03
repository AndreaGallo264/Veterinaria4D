import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ListAdmins from './../src/components/ListAdmins/ListAdmins';

function App() {
  return (
    <Router>

      <Switch>
        /*General routes*/
        <Route exact path='/'>
            <h1>Home</h1>
        </Route>
        <Route path='/login'>
            <h1>Login</h1>
        </Route>

        /*Client Routes */
        <Route path='/cliente/home'>
            <h1>Home Cliente</h1>
        </Route>
        <Route path='/cliente/solicitarturnos'>
            <h1>Solicitar turnos Cliente</h1>
        </Route>
        <Route path='/cliente/misturnos'>
            <h1>Turnos Cliente logueado</h1>
        </Route>
        <Route path='/cliente/ecommerce'>
            <h1>Ecommerce Cliente</h1>
        </Route>

        /* Admin Routes */
        <Route path='/admin/home'>
            <h1>Home admin</h1>
        </Route>
        <Route path='/admin/turnos'>
            <h1>Turnos Cliente</h1>
        </Route>
        <Route path='/admin/ecommerce'>
            <h1>Ecommerce Admin</h1>
        </Route>
        <Route path='/admin/adminList'>
            <ListAdmins/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
