import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import '../Style/Signup.css'

function signup() {
   return (
      <div className="signup">
         <Link to="/">
            <img
            className="signup_logo"
            src="https://logodownload.org/wp-content/uploads/2020/05/best-buy-logo-2.png"
            alt="Best Buy Logo"
            // src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            // alt="Amz logo"
            />
         </Link>

         <div className="signup_container">
            <h1>Create Account</h1>
            <form>
               <h5>Name</h5>
               <input type="text" />
               <h5>Email</h5>
               <input type="email" />
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

export default signup
