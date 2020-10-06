import React from 'react'
import { Link } from 'react-router-dom'
import './Style/Home.css'

function Home() {
   return (
      <div className="home">
         <Link to="/login">
            <img 
               className="home_image1"
               src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MjA4OGQ5Mjkt/MjA4OGQ5Mjkt-Yjc0ODEzOTYt-w3000._CB404644956_.jpg"
               alt="My BestBuy Rewards"
            />
         </Link>
      </div>
   )
}

export default Home
