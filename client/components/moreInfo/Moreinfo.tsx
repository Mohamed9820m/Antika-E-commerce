'use client'
import React, { useState } from "react";
import './Style.css';

const MoreInfo = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="more-info">
      <div className="image-container">
        <img
          className="image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6vuFtkOJCjeYuYRtNT9oq-8KIXOIoLp8oKS9EtTpkypKClXn1OIBjin3XxQj6J27sRCw&usqp=CAU"
          alt="Antique Chronicles"
        />
      </div>
      <div className="content-container">
        <h3 className="title">
          Antique Chronicles
        </h3>
        <p className="description">
          Welcome to Antique Chronicles: Quests, Secrets, and the Power of the
          Past! In this thrilling and immersive hero-action experience, you will
          embark on an extraordinary journey through time to uncover the hidden
          legends and protect the treasures of antiquity.
        </p>
        {show && (
          <p className="additional-info">
            Embrace your destiny as a hero and let the power of the past guide
            you in Antique Chronicles. Uncover the truth, preserve history, and
            shape the future in this unforgettable journey through time. Prepare
            to be captivated, challenged, and forever changed by the
            extraordinary world of antiquity. The past awaits your heroic
            presence.
          </p>
        )}
        <div className="button-container">
          <button className="show-button" onClick={handleShow}>
            Show More!
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
