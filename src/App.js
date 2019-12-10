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
    <OverlayTrigger trigger="click" placement="right" overlay={Cart}>
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

const App = () => {
  const [data, setData] = useState({});
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

  return (
    <Jumbotron>
      <Banner user={user} cart={Cart}/>
      <Container>
        <Row>
          {products.map(product =>
            <Product product={product}/>
          )}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default App;