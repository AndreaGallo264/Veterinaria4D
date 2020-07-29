import React, { useState } from 'react';
import { Button, Form, FormControl, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function Search(props) {

    const [search, setSearch] = useState([]);

    const onSearch = e => {
        setSearch(e.target.value);
    }

    const Search = e => {
        if (search) {
            const findprod = props.products.filter(prod => {
                return prod.title.toLowerCase().includes(search);
            })
            props.setProducts(findprod);
        } else {
            props.getProd();
        }
    }

    const handleKeyPress = (event) => {

        if (event.key === 'Enter') {
            event.preventDefault();
            Search(event);
        } else {
            Search(event);
        }
    }

    return (
        <Form onSubmit={Search}>
            <Row>
                <Col xs={9}>
                    <FormControl value={search} name={search} type="text" placeholder="Buscar"
                        onKeyPress={handleKeyPress}
                        onChange={onSearch} />
                </Col>
                <Col xs={3} className='mb-2'>
                    <Button variant="outline-warning" onClick={Search}><FontAwesomeIcon icon={faSearch} /></Button>
                </Col>
            </Row>
        </Form>
    )
}