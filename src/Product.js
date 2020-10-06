import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import './Style/Product.css'

function Product({id, title, image, price, rating}) {
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
         <button>Add to Cart</button>
      </div>
   )
}

export default Product
