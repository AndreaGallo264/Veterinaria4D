import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import ListUsr from './UserList'

export default function UserPanel(props) {



    return (

        <Container>
            <Row>
                <Col> <ListUsr userState={props.userState} /> </Col>
            </Row>
        </Container>

    )
}