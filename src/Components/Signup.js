import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import '../Style/Signup.css';
import {auth} from '../firebase';

function signup() {

 // Similar to state={} with a class
   const history = useHistory();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const register = e => {
      e.preventDefault();

      auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
         // if returns, it created a new user successfully
         console.log(auth)
         if (auth) {
            history.push('/')
         }
      })
         // will return an error message if user was not created successfully
      .catch(error => alert(error.message))
   }

      return (
         <div className="signup">
            <Link to="/">
               <img
               className="signup_logo"
               src="/Sven_notag.png"
               alt="Sven Logo"
               />
            </Link>
   
            <div className="signup_container">
               <h1>Create Account</h1>

               <form>
                  {/* <h5>Name</h5>
                  <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/> */}
                  <h5>Email</h5>
                  <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                  <h5>Password</h5>
                  <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                  <button type="submit" onClick={register} className="signup_signInButton">Sign In</button>
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
