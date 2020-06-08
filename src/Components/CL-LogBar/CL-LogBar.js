import React from 'react';
import './CL-LogBar.css';
import avatar from './../../img/avatar.png';

const CL_LogBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg log-bar sticky">
            <ul className="navbar-nav mr-auto d-flex flex-row align-content-center">
                <li>
                    <img src={avatar} alt="" width="40px"/>
                </li>
                <li>
                    <p className="texto-2">Ups! Aun no estas logueado...</p>
                </li>
                <li>
                <button className="btn my-2 my-sm-0 btn-log texto-2" type="submit">Loguearme</button>
                </li>
            </ul>

        </nav>
     );
}
 
export default CL_LogBar;