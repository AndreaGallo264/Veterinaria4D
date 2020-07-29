import React from 'react'
import { Container, Image } from 'react-bootstrap';
import thanks from '../../../resources/thanks.gif';

export default function CL_FinishPurchase() {

    return (
        <Container className="bg-white my-3 py-4 text-center text-orange-fenix">
            <h1>Gracias por tu Compra!!</h1>
            <h5>Nos contactaremos a la brevedad para confirmar los Datos Ingresados!</h5>
            <Image src={thanks} alt='' width='30%'></Image>
        </Container>
    )
}