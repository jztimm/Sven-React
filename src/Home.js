import React from 'react'
import Product from './Product.js'
import { Link } from 'react-router-dom'
import './Style/Home.css'

class Home extends React.Component {

   render() {
      return (
         <div className="home">
            <Link to="/login">
               <img 
                  className="home_image1"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MjA4OGQ5Mjkt/MjA4OGQ5Mjkt-Yjc0ODEzOTYt-w3000._CB404644956_.jpg"
                  alt="My BestBuy Rewards"
               />
            </Link>
   
            {/* Product id, title, price rating, img */}
            <div className="home_row">
               <Product
                  id="12321341"
                  title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                  price={11.96}
                  rating={5}
                  image="data:image/webp;base64,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"
               />
               <Product
                  id="1232134"
                  title="Bose - Sleepbuds II — Soothing Sounds and Noise-masking Technology Designed for Better Sleep - White/Silve"
                  price={249.00}
                  rating={3}
                  image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6425/6425583_sd.jpg;maxHeight=640;maxWidth=550"
               />
            </div>
   
            <div className="home_row">
               <Product
                  id="1232141"
                  title="Braun - 6-in-1 Trimmer MGK3221 - Volt Green"
                  price={26.99}
                  rating={4}
                  image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6415/6415811_rd.jpg;maxHeight=640;maxWidth=550"
               />
               <Product
                  id="1231341"
                  title="Swagtron - Swagskate Electric Skateboard w/ 6 mi Max Operating Range & 9.3 mph Max Speed - Black"
                  price={105.99}
                  rating={3}
                  image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6410/6410615_sd.jpg;maxHeight=640;maxWidth=550"
               />
               <Product
                  id="123241"
                  title="Hyperice | Hypervolt Percussive Massage Device Featuring Quite Glide Technology"
                  price={299.99}
                  rating={0}
                  image="https://hyperice.com/media/wysiwyg/HV_Render.png"
               />
            </div>
   
            <div className="home_row">
               <Product
                  id="12341"
                  title='Samsung - CHG9 Series C49HG90DMN 49" HDR LED Curved FHD FreeSync Monitor - Matte dark blue black'
                  price={899.99}
                  rating={5}
                  image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6115/6115611_sd.jpg;maxHeight=640;maxWidth=550"
               />
            </div>
   
         </div>
      )
   }
}

export default Home
