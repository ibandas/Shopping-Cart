import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card} from 'react-bootstrap';

const Product = ({products}) => {
    return products.map(product => {
      return <Card bg="dark" text="white" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={"data/products/" + product.sku + "_2.jpg"} />
        <Card.Body>
          <Card.Title>key={product.sku}>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    })
};

export default Product;