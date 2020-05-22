import React , {useState} from 'react'
import { Container , Form , Col , Button } from 'react-bootstrap'

export default function Payments({price , carProduct}) {

      // Definimos el state para Producto
      const [payment, setPayment] = useState({

        numbercard: '',
        dateexp: '',
        codesec: '' , 
        shipprice: price

    });

    // Extraemos del meme
    const { numbercard, dateexp, codesec, shipprice } = payment;
    // Cuando hay cambios en el formulario
    const onChangePayment = e => {
        setPayment({
            ...payment,
            [e.target.name]: e.target.value
        });
    };
    // Cuando se crea un meme
    const onSubmitAddPayment = e => {
        e.preventDefault();
        // Validar campos
        if (numbercard.trim() === '' || dateexp.trim() === '' || codesec.trim() === '') {
            alert('Todos los campos son obligatorios');
            return;
        }
        

         // Agregar Producto
         AddPayment(payment);

         //Agrega Carrito
         AddCardProduct(carProduct);
        
        
        // Resetear el formulario
        setPayment({

            numbercard: '',
            dateexp: '',
            codesec: '' , 
            shipprice:''

        });
    }

    const AddPayment = async (payment) => {
        //categoria.id = uuidv4();
       /* const solicitud = await fetch(process.env.REACT_APP_BACKEND_URL+"/addPayment", {
            method: 'POST',
            body: JSON.stringify(payment),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const respuesta = await solicitud.json(); */

    }

    const AddCardProduct = async (carProduct) => {
        //categoria.id = uuidv4();

       /* carProduct.forEach(product => {

            const solicitud =  fetch(process.env.REACT_APP_BACKEND_URL+"/addCardProduct", {
                method: 'POST',
                body: JSON.stringify(product),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
           }); */
    }



    return (
        <Container>
             <h1> Pago  </h1>
            <Form onSubmit={onSubmitAddPayment} >
                <Form.Group controlId="">
                    <Form.Label
                        column
                        xs="3"
                        className="pr-0">Tarjeta de Credito
                    </Form.Label>
                    <Col xs="9">
                        <Form.Control
                            type="text"
                            name="numbercard"
                            placeholder="Ingrese Tarjeta de Credito"
                            value = {numbercard}
                            onChange={onChangePayment}
                          
                        />
                    </Col>
                </Form.Group>

                <Form.Group controlId="">
                    <Form.Label
                        column
                        xs="3"
                        className="pr-0">Expiracion
                    </Form.Label>
                    <Col xs="9">
                        <Form.Control
                            type="text"
                            name="dateexp"
                            placeholder="Ingrese Tarjeta de Credito"
                          
                            value = {dateexp}
                            onChange={onChangePayment}
                        />
                    </Col>
                </Form.Group>

                <Form.Group controlId="">
                    <Form.Label
                        column
                        xs="3"
                        className="pr-0">Digitos Seguridad
                    </Form.Label>
                    <Col xs="9">
                        <Form.Control
                            type="text"
                            name="codesec"
                            placeholder="Ingrese Tarjeta de Credito"
                            value={codesec}
                            onChange={onChangePayment}
                          
                        />
                    </Col>
                </Form.Group>
                <Button
                    type="submit"
                    variant="primary"
                    className="float-right" > Procesar</Button>
            </Form>
        </Container>
    )
}