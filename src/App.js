import React, { useEffect, useState } from 'react';
import 'rbx/index.css';
import { Button, Container, Title, Card, Column, Image, Content, Footer} from 'rbx';

const ProductList = ({products}) => {
  return products.map(product => {
    return <Column.Group>
      <Card>
        <Column key={product.sku}>{product.title}>
          <Card.Image>
            <Image.Container size="4by3">
              {<img src={"data/products/" + product.sku + "_2.jpg"}/>}
            </Image.Container>
          </Card.Image>
          <Card.Content>
            <Content>
              {product.description}
              <Card.Footer>
                {"S, M, L, XL"}
              </Card.Footer>
            </Content>
          </Card.Content>
        </Column>
      </Card>
    
    </Column.Group>
  })


  return products.map(product => {
    return <Column.Group>
      <Card>
        <Column key={product.sku}>{product.title}>
          <Card.Image>
            {<img src={"data/products/" + product.sku + "_2.jpg"}/>}
          </Card.Image>
          <Content>
          {product.description}
          </Content>
          <Card.Footer.Item>{"S, M, L, XL"}</Card.Footer.Item>
        </Column>
      </Card>
    </Column.Group>
  })
}

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
    <ul>
      <ProductList products={products}/>
    </ul>
  );
};

export default App;