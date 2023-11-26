
import React from "react";
import './Style.css'
const AboutusPage = () => {
  return (
    <div className="aboutus-page">
      <div className="aboutus-intro">
        <h1 className="aboutus-title">WHO WE ARE !</h1>
        <p className="aboutus-description">
          Step into the enchanting world of our antique webshop, where the past
          comes alive through a carefully curated selection of timeless
          treasures. Our mission is to bring the allure of bygone eras to your
          fingertips, allowing you to discover and own a piece of history.
        </p>
      </div>
      <div className="aboutus-details">
        <div className="aboutus-details-content-1">
          <span className="aboutus-details-year">since 2014</span>
          <p className="aboutus-details-description">
            We understand the importance of provenance and authenticity, which
            is why we collaborate with trusted experts to thoroughly research
            and verify the origins and historical significance of every item. By
            doing so, we ensure that our customers can confidently explore our
            webshop, knowing they are acquiring genuine artifacts that have
            stood the test of time.
          </p>
          <button className="aboutus-details-button">More+</button>

          <div className="aboutus-details-images">
            <img
              className="aboutus-image-1"
              src="https://media.istockphoto.com/id/678859938/photo/old-home-phone.jpg?s=612x612&w=0&k=20&c=bTsHgwCNDXbDzkDqpxTdhRr4a19OgaCns22I9gfvyIQ="
              width={500}
              height={500}
            />
            <img
              className="aboutus-image"
              src="https://happydays365.org/wp-content/uploads/2017/03/6099618683_9d1d373173_b-1024x767.jpg"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="aboutus-details-content-2">
        <div className="aboutus-details-subimages">
          <img className="aboutus-subimage" src="https://as2.ftcdn.net/v2/jpg/05/60/42/47/1000_F_560424713_8vlJq09MCQNXeHPn9tjfn6tretxUnE2S.jpg" width={300} height={200} />
        </div>
        <div className="aboutus-content-2">
          <p className="aboutus-details-description">
            We understand the importance of provenance and authenticity, which
            is why we collaborate with trusted experts to thoroughly research
            and verify the origins and historical significance of every item. By
            doing so, we ensure that our customers can confidently explore our
            webshop, knowing they are acquiring genuine artifacts that have
            stood the test of time.
          </p>
          <button className="aboutus-details-button">More+</button>
        </div>
      </div>
      <div className="our-team">
        <div className="our-team-intro">
          <h1 className="our-team-title">OUR TEAM</h1>
          <p className="our-team-description">
            Our team is the heartbeat of our antique webshop, and we take
            immense pride in the knowledge, passion, and dedication they bring
            to every aspect of our business. Comprised of seasoned experts and
            enthusiasts in the field of antiquities, our team possesses a deep
            understanding of historical periods, art movements, and the
            intricate details that make each item unique.
          </p>
        </div>
     
      </div>
    </div>
  );
};

export default AboutusPage;
