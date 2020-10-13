import React from 'react'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from '../StateProvider'
import {getCartTotal} from '../Reducer'
import { useHistory } from 'react-router-dom'
import '../Style/Subtotal.css'

function Subtotal() {
   const history = useHistory();    // uses browsers history
   const [{cart}, dispatch] = useStateValue();

   return (
      <div className="subtotal">
         {/* Price */}

         <CurrencyFormat
            renderText={(value) =>(
            <>
               <p>
                  Subtotal ({cart.length} items): <strong>{`${value}`}</strong>
               </p>
               <small className="subtotal_gift">
                  <input type="checkbox" /> This order contains a gift 
               </small>
            </>
            )}
            decimalScale={2}
            value={getCartTotal(cart)}
            displayType={"text"}
            thousandsSeparator={true}
            prefix={"$"}
         />
         <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
      </div>
   )
}

export default Subtotal
