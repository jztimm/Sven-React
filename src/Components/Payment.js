import React, { useState, useEffect } from 'react'
import axios from './axios'
import CheckoutProduct from './CheckoutProduct'
import '../Style/Payment.css'

import { useStateValue } from '../StateProvider'
import {Link, useHistory} from 'react-router-dom'
import {CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import {getCartTotal} from '../Reducer'
import CurrencyFormat from 'react-currency-format'
import {db} from '../firebase'

function Payment() {
   const [{cart, user}, dispatch] = useStateValue();

   const history = useHistory();
   const stripe = useStripe();
   const elements = useElements();

   const [suceeded, setSucceeded] = useState(false);
   const [processing, setProcessing] = useState("");
   const [error, setError] = useState(null);
   const [disabled, setDisabled] = useState(true);
   const [clientSecret, setClientSecret] = useState(true);

   useEffect(() => {
      // generate stripe secret

      const getClientSecret = async () => {
         const response = await axios({
            method: 'post',

            // Strip excepts the total in subunits of the currency. Uses cents for USD
            url: `/payments/create?total=${getCartTotal(cart) * 100 }`
         });
         setClientSecret(response.data.clientSecret)
      }

      getClientSecret();
   }, [cart])

   console.log("The Secret Is >>> ", clientSecret)

   const handleSubmit = async (event) => {
      // Stripe stuff

      event.preventDefault();
      setProcessing(true);

      const payload = await stripe.confirmCardPayment(clientSecret, {
         payment_method: {
            card: elements.getElement(CardElement)
         }
      }).then(({ paymentIntent }) => {
         // paymentIntent = paymentConfirmation

         db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
               cart: cart,
               amount: paymentIntent.amount,
               created: paymentIntent.created
            })

         setSucceeded(true);
         setError(null);
         setProcessing(false);

         dispatch({
            type: "EMPTY BASKET"
         })

         history.replace('/orders')
      })
   }

   const handleChange = event => {
      setDisabled(event.empty);
      setError(event.error ? event.error.message : "");
   }


   return (
      <div className="payment">
         <div className="payment_container">
            <h1>
               Checkout (
                  <Link to="/checkout">{cart?.length} item</Link>
                  )
            </h1>


            {/* Payment Section - delivery address */}
            <div className="payment_section">
               <div className="payment_title">
                  <h3>Delivery Address</h3>
               </div>
               <div className="payment_address">
                  <p>{user?.name}</p>
                  <p>2222 Coder ln</p>
                  <p>Bronx, NY</p>
               </div>
            </div>

            {/* Payment Section - Review Items */}
            <div className="payment_section">
               <div className="payment_title">
                  <h3>Review items and delivery</h3>
               </div>
               <div className="payment_items">
                  {cart.map(item =>(
                     <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                     />
                  ))}
               </div>
            </div>

            {/* Payment Section - Payment Method */}
            <div className="payment_section">
               <div className="payment_title">
                  <h3>Payment Method</h3>
               </div>
               <div className="payment_details">
                  {/* Stripe */}
                  <form onSubmit={handleSubmit}>
                     <CardElement onChange={handleChange}/>

                     <div className="payment_priceContainer">
                        <CurrencyFormat
                           renderText={(value) =>(
                              <h3> Order Total: {`${value}`}</h3>
                           )}
                           decimalScale={2}
                           value={getCartTotal(cart)}
                           displayType={"text"}
                           thousandsSeparator={true}
                           prefix={"$"}
                        />

                        <button disabled={processing || disabled || suceeded}>

                           <span>
                              {processing ? <p>Processing</p> : "Buy Now"}
                           </span>

                        </button>
                     </div>
                        {/* Errors */}
                     {error && <div>{error}</div>}
                  </form>
               </div>
            </div>

         </div>
      </div>
   )
}

export default Payment
