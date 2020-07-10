import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import Slider1 from '../../resources/slider1.jpg'
import Slider2 from '../../resources/slider2.jpg'
import Slider3 from '../../resources/slider3.jpg'


export default function principalslider() {

    return (

       
            <Carousel fluid >
                <Carousel.Item  >

                    <Image height="600px" width='1500' src={Slider1} />

                    <Carousel.Caption >
                        <h3 className="text-dark">Consultas y diagnóstico</h3>
                        <p className="text-dark">Atendemos tus inquietudes para brindarte la mejor respuesta.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <Image height="600px" width='1500' src={Slider2} />

                    <Carousel.Caption >
                    <h3 className="text-dark">Castraciones</h3>
                        <p className="text-dark"> Castraciones de machos y hembras, caninos y felinos.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <Image height="600px" width='1500' src={Slider3} />

                    <Carousel.Caption>
                    <h3 className="text-dark">Desparasitaciones</h3>
                        <p className="text-dark">Internas y externas.</p>
               </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
      
    )
}