import React from 'react'
import { Link } from 'react-router-dom'
import {useStateValue} from '../StateProvider'
import {auth} from '../firebase'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartRounded'
import Dropdown from './Dropdown'
import '../Style/Header.css'

function Header() {

   const [{cart, user}, dispatch] = useStateValue();

   const handleAuth = () => {
      if (user) {
         auth.signOut();
      }
   }

   return (
      <div className="Full_Header">
      <nav className="header">
         <Link to="/">
            <img className="header_logo" src="../Sven_notag.png"
            alt="Web Logo" />
         </Link>
         
         <div className="header_search">
         <input type="text" className="header_searchInput" />
         <SearchIcon className="header_searchIcon" />
         </div>

         <div className="header_nav">
            <Link to={!user && "/login"} className="header_link">
               <div onClick={handleAuth} className="header_option">
                  <span className="header_optionLineOne">Hello 
                  {user ? ` ${user.email}` : ` Guest`}</span>
                  <span className="header_optionLineTwo">{user ? `Sign Out` : `Sign In`}</span>
               </div>
            </Link>

            <Link to="/orders" className="header_link">
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
                  <span className="header_optionLineTwo header_basketCout">{cart?.length}</span>
               </div>
            </Link>
         </div>
      </nav>
         <nav className="header2">
            <Link className="header_link2">
               <div className="header_option2">
                  <Dropdown />
               </div>
            </Link>
         </nav>
      </div>
   )
}

export default Header
