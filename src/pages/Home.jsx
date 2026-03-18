import React from 'react';
import './Home.css';
import { trendingData } from '../Constant/Data';
import img from '../image/baby2.jpg';
import pho from '../image/women9.jpg';

const Home = () => {
  return (
    <div className='container'>
      {/* ஹீரோ செக்ஷன் தொடக்கம் */}
      <div className="home-card">
        <div className="left-side">
          <div className="offer-circle">
            <span>UP TO<br/>50% OFF</span>
          </div>
          <h1 className="title">Fashion Boutique</h1>
          <h2 className="subtitle">NEW ARRIVALS</h2>
          <button className="cta-button">SHOP NOW</button>
        </div>

        <div className="right-side">
          <div className="image-container">
            {/* பெரிய படம் */}
            <img 
              className="main-img" 
              src={img} 
              alt="Fashion Model" 
            />
            {/* சிறிய மேலோட்டமான படம் */}
            <div className="overlap-img-box">
               <img src={pho} alt="Clothes" />
            </div>
          </div>
        </div>
      </div>
      {/* ஹீரோ செக்ஷன் முடிவு */}

      {/* டிரெண்டிங் செக்ஷன் தொடக்கம் */}
      <div className="trending-container">
        <h2 className="main-title">Trending Styles</h2>
        <div className="trending-grid">
          {trendingData.map((item) => (
            <div className="style-card" key={item.id}>
              <img src={item.img} alt={item.title} className="style-image" />
              <div className="card-overlay">
                <h3 className="style-title">{item.title}</h3>
                <button className="shop-btn">{item.label}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* டிரெண்டிங் செக்ஷன் முடிவு */}
    </div>
  );
};

export default Home;
