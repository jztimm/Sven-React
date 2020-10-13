import React from 'react'
// import axios from 'axios'

class Electronics extends React.Component {

   state = {
      categoryResults: []
   }

   componentDidMount() {
      const axios = require('axios');

// set up the request parameters
const params = {
   api_key: "B109320D50384ABAB66BECBA95416B1C",
   type: "category",
   url: "https://www.amazon.com/s?bbn=16225009011&rh=n%3A%2116225009011%2Cn%3A502394%2Cn%3A281052"
}

// make the http GET request to Rainforest API
axios.get('https://api.rainforestapi.com/request', { params })
   .then(response => JSON.stringify(response.data, 0, 2))
   .then(data => console.log(data[4][0]))
   .catch(error => {
    // catch and print the error
   console.log(error);
   })
   }

   // getData = () => {
   //    fetch('https://api.rainforestapi.com/request?api_key=B109320D50384ABAB66BECBA95416B1C&type=category&amazon_domain=amazon.com&url=https%3A%2F%2Fwww.amazon.com%2Fs%3Fbbn%3D16225009011%26rh%3Dn%253A%252116225009011%252Cn%253A502394%252Cn%253A281052')
   //    .then(res => res.json())
   //    .then(data =>{
   //       console.log(data)
   //    })
   // }


   render() {
      return (
         <div>
            <h3>Electronics</h3>
         </div>
      )
   }
}

export default Electronics
