
import React from "react";
import './Style.css'
const HeroSection = () => {
  return (
    <div className="HeroSection">
      <div className="content">
        <div className="text-content">
          <h1 id="heroTitle">Antique Adventures: Uncovering Legends and Defending History</h1>
          <p className="text_content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.</p>
        </div>
        <div className="button-group">
          <button className="btn-hero-1">Explore now!</button>
          <button className="btn-hero-2">Create</button>
        </div>
        <div className="stats">
          <div className="stat">
            <span>100+</span>
            <span className="brand">Brands</span>
          </div>
          <div className="stat">
            <span>20k+</span>
            <span className="brand">Fashion Designers</span>
          </div>
          <div className="stat">
            <span>60k+</span>
            <span className="brand">Fashion Shows</span>
          </div>
        </div>
      </div>
      <div className="image-group">
      </div>
    </div>
  );
};

export default HeroSection;
