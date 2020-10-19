import React from 'react'
import {Lights} from '../../data'
import Product from '../Product'

class Lighting extends React.Component {

   state = {
      categoryResults: Lights
   }

   renderData = () => {
      const data = this.state.categoryResults
      return data.map(item => <Product
         id = {item.id}
         title = {item.title}
         image = {item.image}
         price = {item.price}
         rating = {item.rating}
      />)
   }

   
   render() {
      return (
         <div>
            <h3>{this.renderData()}</h3>
         </div>
      )
   }
}

export default Lighting