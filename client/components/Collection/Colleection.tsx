'use client'
import React from "react";
import { ImPriceTag } from "react-icons/im";
import { GrBitcoin } from "react-icons/gr";
import { BsArrowLeftRight } from "react-icons/bs";
import './Style.css';

const Collection = () => {
  return (
    <div className="collection">
      <div className="collection-header">
        <h2 className="collection-title">Collection</h2>
        <span className="collection-subtitle">World's First Marketplace</span>
      </div>
      <div className="collection-features">
        <div className="feature">
          <ImPriceTag className="feature-icon" />
          <p className="feature-text">Now Gas Fee</p>
        </div>
        <div className="feature">
          <GrBitcoin className="feature-icon" />
          <p className="feature-text">Pay with Bitcoin</p>
        </div>
        <div className="feature">
          <BsArrowLeftRight className="feature-icon" />
          <p className="feature-text">Fast and Easy Transactions</p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
