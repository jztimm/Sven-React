import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {useStateValue} from './StateProvider'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

import Header from './Components/Header'
import Home from './Components/Home'
import Checkout from './Components/Checkout'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Payment from './Components/Payment'
import Electronics from './Components/Electronics'
import {auth} from './firebase';
import './App.css';


const promise = loadStripe
('pk_test_51Hb9GUBFe7Bk9QsgGfJjvAuKwKM7hO1KFnx7iftTggdUPqCQjnteBKN0eJlHR6Uj9hIfeThiRCizkxtWyK84aEZ300J7zWMj1G');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>> ', authUser);

      if (authUser) {
        // user is logged in / or just logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/catergory/electronics">
          <Header />
          <Electronics />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
