import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from '../StateProvider'
import '../Style/CheckoutProduct.css'

function CheckoutProduct({ id, title, price, rating, image }) {
   const [{cart}, dispatch] = useStateValue();

   const removeFromCart = () => {
      // Remove item from cart
      dispatch({
         type: 'REMOVE_FROM_CART',
         id: id
      })
   }

   return (
      <div className="checkoutProduct">
         <img className="checkoutProduct_image" src={image} alt={title}/>
         
         <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">{title}</p>

            <p className="checkoutProduct_price">
               <small>$</small>
               <strong>{price}</strong>
            </p>

            <div className="checkoutProduct_rating">
               {
                  Array(rating).fill().map((_) => (
                     <p><StarIcon/></p>
                  ))
               }
            </div>

            <button onClick={removeFromCart} className="checkoutProduct_button">Remove from cart</button>
         </div>
      </div>
   )
}

export default CheckoutProduct
