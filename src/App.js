import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Container, Col, Row, Jumbotron, Navbar, OverlayTrigger} from 'react-bootstrap';
import 'rbx/index.css';
import {Message } from 'rbx';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Product from './components/product';
import Cart from './components/cart';

const firebaseConfig = {
  apiKey: "AIzaSyA4EetIjbTOWm49xEM-Eyd4rkFqbEwvcss",
  authDomain: "shopcart-b34a1.firebaseapp.com",
  databaseURL: "https://shopcart-b34a1.firebaseio.com",
  projectId: "shopcart-b34a1",
  storageBucket: "shopcart-b34a1.appspot.com",
  messagingSenderId: "297619104808",
  appId: "1:297619104808:web:1b1551476fb9fc1696411d"
};

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();


const Banner = ({user}) => (
  <React.Fragment>
    { user ? <Welcome user={ user } /> : <SignIn /> }
  </React.Fragment>
);

const Welcome = ({ user, cart}) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>Welcome, {user.displayName}</Navbar.Brand>
    <Button primary onClick={() => firebase.auth().signOut()}>
        Log out
    </Button>
    <OverlayTrigger trigger="click" placement="right" overlay={Cart(user, cart)}>
        <Button variant="success">Cart</Button>
    </OverlayTrigger>
  </Navbar>
);

const SignIn = () => (
  <StyledFirebaseAuth
    uiConfig={uiConfig}
    firebaseAuth={firebase.auth()}
  />
);

const RemoveItem = ({id, size, products, currentCart}) => {

}

const App = () => {
  const [data, setData] = useState({});
  const [cart, setCart] = useState([{}]);
  const products = Object.values(data);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) {
        setData(snap.val())
      };
    };
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);


const AddItem = ({size, product}) => {
  let contents = cart;
  console.log(contents);
  let foundItem = false;
  let i;
  for (i = 0; i < cart.length; i++) {
    if (contents[i].product === product && contents[i].size != 0) {
      foundItem = true;
      break;
    }
  }
  if (foundItem) {
    contents[i].quantity += 1;
  }
  else {
    contents.push({
      product: product,
      size: size,
      quantity: 1
    })
  }
  setCart(contents);
}

  return (
    <Jumbotron>
      <Banner user={user} cart={cart}/>
      <Container>
        <Row>
          {products.map(product =>
            <Product product={product} AddItem={AddItem}/>
          )}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default App;