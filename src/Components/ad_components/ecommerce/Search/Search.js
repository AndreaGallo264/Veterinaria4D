import React, { useState } from 'react'
import { Button, Form, FormControl, Container } from 'react-bootstrap'

export default function Search({ getProd, products, setProducts }) {

    const [search, setSearch] = useState([]);

    const onSearch = e => {
        setSearch(e.target.value);
    }


    const Search = e => {
        e.preventDefault();
        if (search) {

            const findprod = products.filter(prod => {
                return prod.title.toLowerCase().includes(search);
            })

            setProducts(findprod);
        }
    }


    return (
        <Container fluid>
            <Form inline>
                <FormControl value={search} name={search} type="text" placeholder="Buscar" 
                onKeyPress={onSearch} onChange={onSearch} />
                <Button className="ml-3" variant="outline-success" onClick={Search}>Buscar</Button>
            </Form>
        </Container>
    )
}