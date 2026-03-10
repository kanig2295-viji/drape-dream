 import React from 'react'
 import './About_us.css'
 import img12 from '../image/women2.jpg'

 const About_us = () => {
   return (
    <div>

    <section class="hero-banner">
        <div class="hero-container">
    
            <div class="hero-image">
                <img src={img12} alt="NEW ARRIVAL"/>
            </div>
            <div class="hero-text">
                <span class="new-arrival">TRENDING COLLECTION</span>
                <h1 class="cursive-title">Chic Modern Elegance</h1>
                <hr class="separator"/>
                <p class="sub-text">DISCOVER YOUR PERFECT LOOK WITH OUR EXCLUSIVE CONTEMPORARY WEAR COLLECTION</p>
                <button class="shop-btn">SHOP NOW</button>
            </div>
        </div>
    </section>

 </div>
  )
 }

 export default About_us
