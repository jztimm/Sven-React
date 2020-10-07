import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from '../StateProvider'
import '../Style/Product.css'

function Product({id, title, image, price, rating}) {
   const [{}, dispatch] = useStateValue();

   const addToCart = () => {
      // Add items to cart
      dispatch({
         type: 'ADD_TO_CART',
         item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating
         }
      })
   };

   return (
      <div className="product">
         <div className="Product_info">
            <p>{title}</p>
            <p className="product_price">
               <small>$</small>
               <strong>{price}</strong>
            </p>
            <p className="product_rating">
               {
                  Array(rating).fill().map((_) => (
                     <p><StarIcon/></p>
                  ))
               }
            </p>
         </div>
         
         <img src={image} alt={title} />
         <button onClick={addToCart}>Add to Cart</button>
      </div>
   )
}

export default Product
