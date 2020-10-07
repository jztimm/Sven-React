import React from 'react'
import Product from './Product'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function RenderCarousel() {
   return (
      <Carousel infiniteLoop useKeyboardArrows autoPlay >
         <div >
            <Product
               id="1232141"
               title="Braun - 6-in-1 Trimmer MGK3221 - Volt Green"
               price={26.99}
               rating={4}
               image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6415/6415811_rd.jpg;maxHeight=640;maxWidth=550"
            />
         </div>
         <div>
            <Product
               id="1231341"
               title="Swagtron - Swagskate Electric Skateboard w/ 6 mi Max Operating Range & 9.3 mph Max Speed - Black"
               price={105.99}
               rating={3}
               image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6410/6410615_sd.jpg;maxHeight=640;maxWidth=550"
            />
         </div>
         <div>
            <Product
               id="12341"
               title='Samsung - CHG9 Series C49HG90DMN 49" HDR LED Curved FHD FreeSync Monitor - Matte dark blue black'
               price={899.99}
               rating={5}
               image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6115/6115611_sd.jpg;maxHeight=640;maxWidth=550"
            />
         </div>
      </Carousel>
   )
}

export default RenderCarousel
