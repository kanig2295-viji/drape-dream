
import React from 'react';
import './About_us.css';
import img from '../image/women4.jpg'

const AboutMe = () => {
  return (
    <div className="about-page">
      <section className="hero-banner">
        <div className="hero-overlay">
          <h1>Redefining Modern Elegance</h1>
          <p>Discover the journey of Drape Dream Dress Shop.</p>
        </div>
      </section>

      <section className="brand-story">
        <div className="story-container">
          <div className="story-image">
            <img src={img} alt="Our Collection" />
          </div>
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2024, <strong>Drape Dream Dress Shop</strong> started with a simple vision: to make high-end fashion accessible to every woman. We believe that what you wear is an extension of your personality.
            </p>
            <p>
              Every piece in our collection is handpicked for its quality, comfort, and timeless design. From chic casuals to modern ethnic wear, we bring you the best of global trends.
            </p>
          </div>
        </div>
      </section>

      <section className="core-values">
        <div className="value-item">
          <i className="fas fa-gem"></i>
          <h3>Premium Quality</h3>
          <p>We use only the finest fabrics to ensure durability and comfort.</p>
        </div>
        <div className="value-item">
          <i className="fas fa-shipping-fast"></i>
          <h3>Express Delivery</h3>
          <p>Fast and secure shipping to your doorstep, nationwide.</p>
        </div>
        <div className="value-item">
          <i className="fas fa-heart"></i>
          <h3>Customer First</h3>
          <p>Our dedicated support team is here to help you 24/7.</p>
        </div>
      </section>
      <section className="newsletter">
        <h2>Join Our Fashion Club</h2>
        <p>Subscribe to get updates on new arrivals and exclusive offers.</p>
        <div className="subscribe-box">
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
