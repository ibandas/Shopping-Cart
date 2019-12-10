import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, ButtonToolbar, ButtonGroup, Container, Col, Row, Card, ListGroup, ListGroupItem} from 'react-bootstrap';

const Product = ({product}) => {
    return (
        <Col sm={4}>
            <Card bg="dark" text="white" style={{ width: '18rem', height: '45rem'}}>
                <Card.Img variant="top" src={"data/products/" + product.sku + "_2.jpg"} />
                <Card.Header>{product.currencyFormat}{product.price}</Card.Header>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Card.Text>
                         {product.style}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Container>
                        <Row>
                            <ButtonToolbar>
                                <ButtonGroup aria-label="First group">
                                    <Button variant="primary">S</Button>
                                    <Button variant="primary">M</Button>
                                    <Button variant="primary">L</Button>
                                    <Button variant="primary">XL</Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Row>
                    </Container>
                </Card.Footer>
            </Card>
        </Col>      
    )
};

export default Product;