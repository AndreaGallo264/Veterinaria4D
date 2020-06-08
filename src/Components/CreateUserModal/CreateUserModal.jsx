import React, { useState } from "react";
import { Modal, Button, Form, Dropdown, DropdownButton } from "react-bootstrap";

const CreateNewAdmin = ({ show, handleClose }) => {
  const [userData, setUserData] = useState({
    user: "",
    name: "",
    section: "Consultorio",
    email: "",
    pass: "",
  });

  const onChangeInput = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = event => {
    event.preventDefault();
    setUserData({
        user: "",
        name: "",
        section: "Consultorio",
        email: "",
        pass: "",
      })
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Crear nuevo administrador</Modal.Title>
      </Modal.Header>
      <Form onSubmit={submitForm}>
        <Modal.Body>
          <Form.Group controlId="formUser">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa usuario"
              required
              pattern="[a-zA-Z0-9ñÑ]+"
              minLength="3"
              maxLength="8"
              name="user"
              value={userData.user}
              onChange={onChangeInput}
            />
          </Form.Group>

          <Form.Group controlId="formName">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa nombre completo"
              required
              pattern="[a-zA-Z0-9ñÑ áéíóúÁÉÍÓÚ]+"
              minLength="3"
              maxLength="20"
              name="name"
              value={userData.name}
              onChange={onChangeInput}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa email"
              required
              pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
              minLength="8"
              maxLength="30"
              name="email"
              value={userData.email}
              onChange={onChangeInput}
            />
          </Form.Group>

          <DropdownButton title={userData.section}>
            <Dropdown.Item as="button" name="section" onClick={onChangeInput} value="Consultorio">Consultorio</Dropdown.Item>
            <Dropdown.Item as="button" name="section" onClick={onChangeInput} value="Ventas">Ventas</Dropdown.Item>
            <Dropdown.Item as="button" name="section" onClick={onChangeInput} value="Administración">Administración</Dropdown.Item>
          </DropdownButton>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit">
            Crear nuevo administrador
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default CreateNewAdmin;
