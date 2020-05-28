import React from 'react';
import './CL-Footer.css';
import wspLogo from './../../img/whatsapp.png';
import emailLogo from './../../img/email.png';

const CL_Footer = () => {
    return (
        <footer className="texto-1 font-weight-bolder">
            <p className="footer-info">
                Veterinaria Patitas
            </p>
           <hr className="w-50"/>
            <p className="footer-info">
                CopyRight 2020&copy;
            </p>
           <hr className="w-75"/>
           <img src={emailLogo} alt="" width="30px"className="footer-info"/>
            <p className="footer-info footer-info-mail">contacto@patitasveterinaria.com.ar</p>
            <img src={wspLogo} alt="" width="30px" className="footer-info"/>
            <p className="footer-info footer-info-tel"> 381 5 521981</p>
        </footer>

      );
}
 
export default CL_Footer;