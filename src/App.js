import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <h1>Checkout</h1>
        </Route>
        <Router path="/login">
          <h1>Login Page</h1>
        </Router>
        <Route path="/">
          <h1>HOME PAGE</h1>
        </Route>
      </Switch>
    </div>
    </Router>

  );
}

export default App;
