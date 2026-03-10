import React from 'react'
import './Header.css'
import img1  from "../image/logo.png"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div class="container-fluid">
      <div class="row1">
         <div class="im1">
          <Link to="/">
          <img src={img1} alt="" />
           </Link>
        </div>  

        <div class="col2">
            <ul>
                <Link to="about_me"><li>About Us</li></Link>
                <Link to="kidswear"><li>Product</li></Link>
                <Link to="support"><li>Contact</li></Link>
                <li id="cat">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="blank" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>Cart
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
