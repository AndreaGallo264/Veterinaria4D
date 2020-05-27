import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const [userData, setUserData] = useState({
    user: "",
    pass: "",
  });

  const onChangeInput = e => {
      setUserData({
          ...userData,
          [e.target.name]: e.target.value
      });
  }

  const admins = [
    {user: "juan123", pass:"asd123"},{user:"ana123", pass:"qwe123"}
  ]
  const clientes = [
    {user: "pedro123", pass:"123asd"},{user:"leo123", pass:"123qwe"}
  ]

  const isAdmin = user => {
    const index = admins.findIndex(admin => admin.user === user);
    return index !== -1 ? index : false;
  }
  const isClient = user => {
    const index = clientes.findIndex(client => client.user === user);
    return index !== -1 ? index : false;
  }

  const checkPass = (pass, userType, index) => {
    if(userType === "admin"){
        return admins[index].pass === pass ? true : false;
    } else if(userType === "client"){
      return clientes[index].pass === pass ? true : false;
    }
  }

  const checkUserAndPass = (user, pass) => {
    let isCorrectPass;
    console.log("isadmin",isAdmin(user) ? "si" : "no")
    console.log("isclient",isClient(user))
    if(isAdmin(user) !== false){
      return !checkPass(pass, "admin", isAdmin(user)) ? false : {user, type:"admin"}; 
    } else if(isClient(user) !== false){
      return !checkPass(pass, "client", isClient(user)) ? false : {user, type:"client"}; 
    } else {
      return false;
    }
  }

  const saveLoginInfo = (userInfo) => {
      localStorage.removeItem('vetUser');
      localStorage.setItem('vetUser', JSON.stringify(userInfo));
  }

  const login = event => {
    event.preventDefault();
    if(userData.user === "" && userData.pass === ""){
      alert("Llene todos los campos")
    } else {
      const userInfo = checkUserAndPass(userData.user, userData.pass);
      userInfo ? saveLoginInfo(userInfo) : alert("Usuario o contraseña incorrectos");
    }
  }
  return (
    <Form className='container mt-5 w-50' onSubmit={login}>
      <Form.Group controlId="formUser">
        <Form.Label>Usuario</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa usuario"
          required
          pattern="[a-zA-Z0-9ñÑ]+"
          minLength="3"
          maxLength="8"
          name='user'
          value={userData.user}
          onChange={onChangeInput}
        />
      </Form.Group>

      <Form.Group controlId="formPass">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="******"
          required
          pattern="[a-zA-Z0-9ñÑ!?áéíóú]+"
          minLength="3"
          maxLength="6"
          name='pass'
          value={userData.pass}
          onChange={onChangeInput}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>
  );
};

export default Login;
