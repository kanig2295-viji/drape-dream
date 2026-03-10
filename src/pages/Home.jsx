import React from 'react'
import './Home.css'
import img2  from "../image/girls.jpg"
import img3  from "../image/wallpaper.jpg"
import img4  from "../image/womens.jpg"
import img14  from "../image/girls.jpg"
import img15  from "../image/wallpaper.jpg"
import img16  from "../image/girl8.jpg"
import img17  from "../image/girl8.jpg"
import img18  from "../image/girl6.jpg"
import img19  from "../image/boy5.jpg"
import img20  from "../image/women3.jpg"


const Home = () => {
  return (
    <div className="container">
    
 <div class="carousel">
  <div class="slides">

        <div class="slide">
            <img src={img2} alt="Dress 1"/>
            <div class="content">
                <h2>Elegant Kids Collection</h2>
                <p>Discover trendy & stylish outfits</p>
                <button>Shop Now</button>
            </div>
        </div>

        <div class="slide">
            <img src={img3} alt="Dress 2"/>
            <div className="content">
                <h2>Summer Special</h2>
                <p>Light, soft & beautiful dresses</p>
                <button>Explore</button>
            </div>
        </div>

        <div class="slide">
            <img src={img4} alt="Dress 3"/>
            <div class="content">
                <h2>Party Wear Collection</h2>
                <p>Shine bright on every occasion</p>
                <button>View Collection</button>
            </div>
        </div>

    </div>
      <div class="nav">
        <label for="slide3">❮</label>
        <label for="slide2">❯</label>
    </div>
    </div>
    <main class="main-content">
    <section class="hero-container">
        <div class="hero-left-image">
            <img src={img20} alt="Saree Model"/>
        </div>

        <div class="hero-center-text">
            <span class="label">NEW HERITAGE</span>
            <h1>TIMELESS CRAFT, MODERN SOUL.</h1>
            <p>Playful designs meet elegant craftsmanship. Explore our exclusive collection of stylish and comfy outfits for your little ones..</p>
            <button class="cta-btn">EXPLORE COLLECTION</button>
        </div>
        <div class="hero-right-thumbs">
            <img src={img17} alt="Thumbnail 1"/>
            <img src={img18} alt="Thumbnail 2"/>
            <img src={img19} alt="Thumbnail 3"/>
        </div>
    </section>
    <section class="featured-grid">
        <div class="category-card">
            <img src={img14} alt="Silk Saree"/>
            <h3>Silk Traditions</h3>
        </div>
        <div class="category-card">
            <img src={img15} alt="Modern Wear"/>
            <h3>Modern Drapes</h3>
        </div>
        <div class="category-card">
            <img src={img16} alt="Boutique"/>
            <h3>Boutique Edit</h3>
        </div>
    </section>

</main>

</div>
  )
}

export default Home
