import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, ButtonToolbar, ButtonGroup, Container, Col, Row, Card, ListGroup, ListGroupItem, Popover} from 'react-bootstrap';

// Display all products in the car
const Cart = ({user, cart}) => {
    return (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Popover right</Popover.Title>
            <Popover.Content>
            <Container>
                {cart}
            </Container>
            </Popover.Content>
        </Popover>
    );
}
export default Cart;