import React, {useState} from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';

const AppForm = () => {

//Creamos el state del turno
const [turno, setTurno] = useState({
    nombre: '',
    mascota: '',
    telefono: '',
    dia: '',
    hora: '',
    tipo: '', 
    sintomas:''
})

//Funcion que se ejecuta cuando se escribe algo en los inputs
const handleChange = e => {
    setTurno({
        ...turno, 
        [e.target.name] : e.target.value

    })
    
}

    return (

        <React.Fragment>
            <Container className='bg-light'>
                <Form>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            name="nombre"
                            placeholder="Ingrese su nombre"
                            onChange={handleChange}
                            />
                            
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Mascota</Form.Label>
                        <Form.Control
                            type="text"
                            name="mascota"
                            placeholder="Ingrese el nombre de su mascota"
                            onChange={handleChange}
                            />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control
                            type="tel"
                            name="telefono"
                            placeholder="Ingrese un número de teléfono de contacto." 
                            onChange={handleChange}
                            />
                    </Form.Group>

                    <Form.Group>
                        <Form.Row>
                            <Col>
                                <Form.Label>Día</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="dia"
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col>
                                <Form.Label>Hora</Form.Label>
                                <Form.Control
                                    type="time"
                                    name="hora"
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Turno para:</Form.Label>
                        <Form.Control 
                        as="select"
                        name="tipo"
                        onChange={handleChange}
                        >
                            <option>Veterinaria</option>
                            <option>Peluquería</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Síntomas</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="sintomas"
                            rows="3"
                            placeholder="Puede agregar una descripción de los síntomas si lo desea."
                            onChange={handleChange}
                            />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Reservar
                </Button>
                </Form>

            </Container>
        </React.Fragment>

    );
}

export default AppForm;