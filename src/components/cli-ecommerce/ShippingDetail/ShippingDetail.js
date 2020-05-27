import React from 'react'
import {Container , Form , Col , Button } from 'react-bootstrap'

export default function ShippingDetail(){


    return(
        <Container>
        <h1> Detalle de Envio  </h1>
       <Form >
           <Form.Group controlId="">
               <Form.Label
                   column
                   xs="3"
                   className="pr-0">Datos de Domicilio
               </Form.Label>
               <Col xs="9">
                   <Form.Control
                       type="text"
                       name=""
                       placeholder="Datos de Domicilio"
                     
                   />
               </Col>
           </Form.Group>

           <Form.Group controlId="">
               <Form.Label
                   column
                   xs="3"
                   className="pr-0">Localidad
               </Form.Label>
               <Col xs="9">
                   <Form.Control
                       type="text"
                       name=""
                       placeholder="Localidad"
                     
                   />
               </Col>
           </Form.Group>

           <Form.Group controlId="">
               <Form.Label
                   column
                   xs="3"
                   className="pr-0">Provincia
               </Form.Label>
               <Col xs="9">
                   <Form.Control
                       type="text"
                       name=""
                       placeholder="Provincia"
                     
                   />
               </Col>
           </Form.Group>

           <Form.Group controlId="">
               <Form.Label
                   column
                   xs="3"
                   className="pr-0">Codigo Postal
               </Form.Label>
               <Col xs="9">
                   <Form.Control
                       type="text"
                       name=""
                       placeholder="Codigo Postal"
                     
                   />
               </Col>
           </Form.Group>

           <Button
               type="submit"
               variant="primary"
               className="float-right" > Guardar Datos de Envio</Button>
       </Form>
   </Container>
   
   )
    
}