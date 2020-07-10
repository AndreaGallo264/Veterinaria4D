import React  from 'react' ; 
import { Navbar, Nav, Dropdown , Image , Badge } from 'react-bootstrap' ; 
import { Link } from 'react-router-dom' ; 
import Logo from '../../resources/logo.png' ; 


export default function Principalmenu(props) {

    const logouts = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (


        <Navbar bg="light" expand="lg" fluid style={{ position: "sticky" }} fixed="top">
            <Navbar.Brand href="#home"><Image fluid src={Logo}  width='50px' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link id="sale" className="nav-link" to="/">Inicio</Link>
                    <Nav.Link href="#aboutus">Nuestros Servicios</Nav.Link>
                    <Link id="sale" className="nav-link" to="/listproduct">Tienda</Link>
                    
                    {
                     props.userState.isAdmin ? "":   <Link id="sale" className="nav-link" to="/MyCart"> Mi Carrito <Badge variant="danger">{props.kntcat}</Badge></Link>
                    }
        
                    {
                     props.userState.isAdmin ? "":  props.userState.usuario?  <Link id="sale" className="nav-link" to="/purchasepanel">Mis Compras</Link> : ""
                    }

                    {
                     props.userState.isAdmin ? ""  :  props.userState.usuario? <Link id="sale" className="nav-link" to="/shiftspanel">Solicitar Turno</Link> : ""
                    }
                   
                   
                   
                </Nav>

                {
                            props.userState.isAdmin ?
                <Dropdown>
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                        Administrador Ecommerce
                </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Link id="sale" className="nav-link" to="/listusr">Administracion Usuarios</Link>
                        <Link id="sale" className="nav-link" to="/shiftspanel">Administracion Turnos</Link>
                        <Link id="sale" className="nav-link" to="/categorypanel"> Administracion Categorias</Link>
                        <Link id="sale" className="nav-link" to="/addSPecie"> Administracion Especies</Link>
                        <Link id="sale" className="nav-link" to="/addSPeciality"> Administracion Especialidades</Link>
                        <Link id="sale" className="nav-link" to="/purchasepanel"> Administracion Compras</Link>
                    </Dropdown.Menu>
                </Dropdown>
                :"" }
                
                {
                props.userState.usuario ?  "" : <Link id="sale" className="nav-link" to="/login">Acceder</Link>
                }
                
               
                <Navbar.Text className="mr-1">Bienvenido</Navbar.Text>
                {
                    props.userState.usuario ? props.userState.usuario.nombre : "Visitante"
                }
                <Link id="sale" className="nav-link" to="/help">Ayuda</Link>
                  {
                    props.userState.usuario ? <Link id="sale" className="nav-link" to="/register">Mis Datos</Link> : ""
                }

                {
                props.userState.usuario ?  <Link id="adm" className="nav-link" to="/home" onClick={logouts}  >Salir</Link> : ""
                }
                
            </Navbar.Collapse>
        </Navbar>




    )
}