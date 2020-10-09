import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Checkout from './Components/Checkout'
import Login from './Components/Login'
import Signup from './Components/Signup'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("form Submit")
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

  render() {
    return (
      <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            email={this.state.email}
            password={this.state.password}
            />
          </Route>
          <Route path="/signup">
            <Signup
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            name={this.state.name}
            email={this.state.email}
            password={this.state.password}
            />
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
}

export default App;
