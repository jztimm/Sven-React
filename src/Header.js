import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartRounded'
import './Style/Header.css'

function Header() {
   return (
      <nav className="header">
         <Link to="/">
            <img className="header_logo" src="https://logodownload.org/wp-content/uploads/2020/05/best-buy-logo-2.png"
            alt="Web Logo" />
         </Link>
         
         <div className="header_search">
         <input type="text" className="header_searchInput" />
         <SearchIcon className="header_searchIcon" />
         </div>

         <div className="header_nav">
            <Link to="/login" className="header_link">
               <div className="header_option">
                  <span className="header_optionLineOne">Hello Jzavier</span>
                  <span className="header_optionLineTwo">Sign In</span>
               </div>
            </Link>

            <Link to="/" className="header_link">
               <div className="header_option">
                  <span className="header_optionLineOne">Returns</span>
                  <span className="header_optionLineTwo">& Orders</span>
               </div>
            </Link>
            
            <Link to="/" className="header_link">
               <div className="header_option">
                  <span className="header_optionLineOne">Your</span>
                  <span className="header_optionLineTwo">Account</span>
               </div>
            </Link>
            
            <Link to="/checkout" className="header_link">
               <div className="header_Basket">
                  <ShoppingCartIcon />
                  <span className="header_optionLineTwo header_basketCout">0</span>
               </div>
            </Link>
         </div>



      </nav>
   )
}

export default Header
