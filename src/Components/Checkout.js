import React from 'react'
import {useStateValue} from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import '../Style/Checkout.css'

function Checkout() {

   const [{cart, user}] = useStateValue();

   return (
      <div className="checkout">

         <div className="checkout_left">
            <img className="checkout_ad"
            src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-33452-fy20-cc-updates-10pback-lv-91626.png"
            alt="Credit Card Ad"
            />
            {cart?.length === 0 ? (
               <div>
                  <h2>Your Shopping Cart is empty</h2>
                  <p>You have no items in your shopping cart. To add items to your shopping cart, click the "Add to Cart" button under the item.</p>
               </div>
            ) : (
               <div>
                  <h3>Hello, <br/>
                     {!user ? `Guest` : user.email}</h3>
                  <h2 className="checkout_title">Your Shopping Cart</h2>

                  {/* list of the checkout items*/}
                  {cart.map(item => (
                     <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                     />
                  ))}

               </div>
            )}
         </div>

         {cart.length > 0 && (
            <div className="checkout_right">
               <Subtotal />
            </div>
         )}


      </div>
   )
}

export default Checkout
