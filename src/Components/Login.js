import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import '../Style/Login.css'

class Login extends React.Component {

   render() {
      return (
         <div className="login">
            <Link to="/">
               <img
               className="login_logo"
               src="/Sven.png"
               alt="Sven Logo"
               // src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
               // alt="Amz logo"
               />
            </Link>
   
            <div className="login_container">
               <h1>Sign In</h1>
               <form onSubmit={this.props.handleSubmit}>
                  <h5>Email</h5>
                  <input type="email" name="email" value={this.props.email} onChange={this.props.handleChange}/>
                  <h5>Password</h5>
                  <input type="password" name="password" value={this.props.password} onChange={this.props.handleChange}/>
                  <button type="submit" className="login_signInButton">Sign In</button>
               </form>
   
               <p>
               By continuing you agree to our Terms and Conditions, our Privacy Policy, and the My Best Buy® Program Terms.
               </p>
               <div className="login_signUpContainer">
                  <span>New Customer?</span>
                  <Link to="/signup" className="login_signUpButton">
                     Create an Account
                  </Link>
               </div>
            </div>
         </div>
      )
   }
}

export default Login
