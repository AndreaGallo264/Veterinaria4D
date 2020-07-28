import React from 'react'
import { Carousel, Image, Container } from 'react-bootstrap';
import Slider1 from '../../resources/slider1.jpg';
import Slider2 from '../../resources/slider2.jpg';
import Slider3 from '../../resources/slider3.jpg';
import './principalSlider.css';


export default function principalslider() {
    return (
        <Container className='p-0 mb-2'>
        <Carousel className='mt-3'>
            <Carousel.Item>
                <Image  width='100%' src={Slider1} />
                <Carousel.Caption >
                    <h2  className="text-uppercase text-dark text-carousel">Consultas y diagnóstico</h2    >
                    <p className="text-dark text-carousel">Atendemos tus inquietudes para brindarte la mejor respuesta.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image  width='100%' src={Slider2} />
                <Carousel.Caption >
                    <h2  className="text-uppercase text-dark text-carousel">Castraciones</h2   >
                    <p className="text-dark text-carousel"> Castraciones de machos y hembras, caninos y felinos.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image  width='100%' src={Slider3} />
                <Carousel.Caption>
                    <h2  className="text-uppercase text-dark text-carousel">Desparasitaciones</h2  >
                    <p className="text-dark text-carousel">Internas y externas.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Container>
    )
}