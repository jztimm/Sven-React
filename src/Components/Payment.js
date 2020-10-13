import React, { useState, useEffect } from 'react'
import axios from './axios'
import CheckoutProduct from './CheckoutProduct'
import '../Style/Payment.css'
import { useStateValue } from '../StateProvider'
import {Link, useHistory} from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
import {getCartTotal} from '../Reducer'
import {CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

function Payment() {
   const [{cart, user}, dispatch] = useStateValue();

   const history = useHistory();
   const stripe = useStripe();
   const elements = useElements();

   const [suceeded, setSuccessed] = useState(false);
   const [processing, setProcessing] = useState("");
   const [error, setError] = useState(null);
   const [disabled, setDisabled] = useState(true);
   const [clientSecret, setClientSecret] = useState(true);

   useEffect(() => {
      // generate stripe secret

      const getClientSecret = async () => {
         const response = await axios({
            method: 'POST',
            url: `/payment/create?total=${getCartTotal(cart) * 100 }`
         });
         setClientSecret(response.data.clientSecret)
      }

      getClientSecret();
   }, [cart])


   const handleSubmit = async (event) => {
      // Do stripe stuff

      event.preventDefault();
      setProcessing(true);

      const payload = await stripe.confirmCardPayment(clientSecret, {
         payment_method: {
            card: elements.getElement(CardElement)
         }
      }).then(({paymentIntent}) => {
         // paymentIntent = paymentConfirmation
         setSuccessed(true);
         setError(null);
         setProcessing(false);

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
                     <CardElement on Change={handleChange}/>
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
                     <button disabled={processing ||
                     disabled || suceeded}>
                        <span>{processing ? <p>Processing</p> :
                        "Buy Now"}</span>
                     </button>
                     </div>
                     {error && <div>{error}</div>}
                  </form>
               </div>
            </div>

         </div>
      </div>
   )
}

export default Payment
