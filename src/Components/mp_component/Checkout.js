import React from 'react'

export default function Chekout() {

    // SDK de Mercado Pago
    const mercadopago = require('mercadopago');

    // Agrega credenciales
    mercadopago.configure({
        access_token: 'TEST-8727139350297223-092610-2b844dc34974f1c02db03a120ebfc080__LA_LC__-86755829'
    });

    // Crea un objeto de preferencia
    let preference = {
        items: [
            {
                title: 'Mi producto',
                unit_price: 100,
                quantity: 1,
            }
        ]
    };

    mercadopago.preferences.create(preference)
        .then(function (response) {
            // Este valor reemplazará el string "$$init_point$$" en tu HTML
            global.init_point = response.body.init_point;
        }).catch(function (error) {
            console.log(error);
        });


    return (
        
            <form action="/procesar-pago" method="POST">
                <script
                    src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
                    data-preference-id="$$id$$">
                </script>
            </form>
    )
}
