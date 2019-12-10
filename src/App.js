import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Container, Col, Row} from 'react-bootstrap';
import Product from './components/product';

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <Row>
        {products.map(product =>
          <Product product={product}/>
        )}
      </Row>
    </Container>
  );
};

export default App;