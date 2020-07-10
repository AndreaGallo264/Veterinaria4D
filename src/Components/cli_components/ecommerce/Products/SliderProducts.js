import React, { useState } from 'react'
import { Carousel, Image, Col, Row } from 'react-bootstrap'
import Back from '../../../resources/backfenix.jpg'

export default function SliderProducts(props) {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    let imgUrl = Back ;


    return (

        <Carousel activeIndex={index} onSelect={handleSelect}  fluid style={{
            backgroundImage: `url(${ imgUrl })` , 
            backgroundRepeat  : 'repeat',
            backgroundPosition: 'center',
        }} >

            {props.products.length > 0 ?
                props.products.map(products => (

                    <Carousel.Item>
                        <Row>
                            <Col > <Image width="250px" fluid src={products.urlimg} /> </Col>
                            <Col  >
                                <h3 className="text-gray mt-50">{products.title} </h3>
                                <p className="text-gray  mt-60"> {products.detail} </p>
                                <h2 className="text-gray  mt-60"> $ {products.price} </h2>
                            </Col>
                        </Row>
                    </Carousel.Item>

                ))
                : "NO HAY PRODUCTOS"}
        </Carousel>
    )
}