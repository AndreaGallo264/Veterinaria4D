import React from 'react'
import { Carousel, Image, Container } from 'react-bootstrap';
import Slider1 from '../../resources/slider1.jpg';
import Slider2 from '../../resources/slider2.jpg';
import Slider3 from '../../resources/slider3.jpg';


export default function principalslider() {
    return (
        <Container className='p-0 mb-2'>
        <Carousel className='mt-3'>
            <Carousel.Item className='rounded'>
                <Image  width='100%' src={Slider1} />
            </Carousel.Item>
            <Carousel.Item className='rounded'>
                <Image  width='100%' src={Slider2} />
            </Carousel.Item>
            <Carousel.Item className='rounded'>
                <Image  width='100%' src={Slider3} />
            </Carousel.Item>
        </Carousel>
        </Container>
    )
}