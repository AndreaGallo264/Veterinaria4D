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
        <Container>
            <Form inline>
                <FormControl value={search} name={search} type="text" placeholder="Buscar" className="mr-sm-2"
                onKeyPress={onSearch} onChange={onSearch} />
                <Button variant="outline-success" onClick={Search}>Buscar</Button>
            </Form>
        </Container>
    )
}