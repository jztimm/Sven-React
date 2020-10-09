import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import '../Style/Signup.css'

class signup extends React.Component{

   render() {
      return (
         <div className="signup">
            <Link to="/">
               <img
               className="signup_logo"
               src="/Sven.png"
               alt="Sven Logo"
               // src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
               // alt="Amz logo"
               />
            </Link>
   
            <div className="signup_container">
               <h1>Create Account</h1>
               <form onSubmit={this.props.handleSubmit}>
                  <h5>Name</h5>
                  <input type="text" name="name" value={this.props.name} onChange={this.props.handleChange}/>
                  <h5>Email</h5>
                  <input type="email" name="email" value={this.props.email} onChange={this.props.handleChange}/>
                  <h5>Password</h5>
                  <input type="password" />
                  <button type="submit" className="signup_signInButton">Sign In</button>
               </form>
   
               <p>
               By continuing you agree to our Terms and Conditions, our Privacy Policy, and the My Best Buy® Program Terms.
               </p>
   
               <div className="login_signUpContainer">
                  <span>Already have an account?</span>
                  <Link to="/login" className="login_signUpButton">
                     Go back to login
                  </Link>
               </div>
            </div>
         </div>
      )
   }
}

export default signup
