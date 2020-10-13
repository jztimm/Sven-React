import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../Style/Login.css';

function Login() {
   
   // Similar to state={} with a class
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const signIn = e => {
      e.preventDefault();

      // Firebase logic
      
   }


   return (
      <div className="login">
         <Link to="/">
            <img
            className="login_logo"
            src="/Sven_notag.png"
            alt="Sven Logo"
            />
         </Link>
         <div className="login_container">
            <h1>Sign In</h1>
            <form>
               <h5>Email</h5>
               <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
               <h5>Password</h5>
               <input type="password" name="password" value={password} onChange={e => setpassword(e.target.value)}/>
               <button type="submit" onClick={signIn} className="login_signInButton">Sign In</button>
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

export default Login
