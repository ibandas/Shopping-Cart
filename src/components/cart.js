import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, ButtonToolbar, ButtonGroup, Container, Col, Row, Card, ListGroup, ListGroupItem, Popover} from 'react-bootstrap';

const Cart = ({user, product}) => {
    return (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Popover right</Popover.Title>
            <Popover.Content>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
            </Popover.Content>
        </Popover>
    );
}
export default Cart;