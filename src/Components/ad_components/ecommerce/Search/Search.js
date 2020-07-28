import React, { useState } from 'react'
import { Button, Form, FormControl, Container } from 'react-bootstrap'

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
        <Container fluid>
            <Form onSubmit={Search} inline>
                <FormControl value={search} name={search} type="text" placeholder="Buscar"
                    onKeyPress={handleKeyPress}
                    onChange={onSearch} />
                <Button className="ml-3" variant="outline-success" onClick={Search}>Buscar</Button>
            </Form>
        </Container>
    )
}