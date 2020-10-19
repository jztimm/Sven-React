import React from 'react'
import {Link} from 'react-router-dom'
import '../Style/Dropdown.css'
import '../Style/Header.css'

class Dropdown extends React.Component {
   constructor(){
      super();

      this.state = {
            displayMenu: false,
         };

      this.showDropdownMenu = this.showDropdownMenu.bind(this);
      this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

   };

   showDropdownMenu(event) {
      event.preventDefault();
      this.setState({ displayMenu: true }, () => {
         document.addEventListener('click', this.hideDropdownMenu);
      });
   }

      hideDropdownMenu() {
         this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
         });
      }

      render() {
         return (
            <div  className="dropdown">
            <div className="header_optionLinetwo2" onClick={this.showDropdownMenu}> <strong>Categories</strong></div>

               { this.state.displayMenu ? (
               <ul>
                  <li><Link to="/catergory/cameras">
                     <a>Cameras</a>
                  </Link></li>
                  <li><Link to="/catergory/computers">
                     <a>Computers</a>
                  </Link></li>
                  <li><Link to="/catergory/lights">
                     <a>Lighting</a>
                  </Link></li>
               </ul>
               ):
               (
               null
               )
               }

            </div>

         );
      }
}

export default Dropdown
