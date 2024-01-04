// HomePage.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import gourmet from "../assets/gourmet.jpg";
import catsalad from "../assets/cat-csalad.jpg";
import bruschetta1 from "../assets/bruschetta1.jpg";
import creme from "../assets/creme.jpg";
import "../styles/main.css";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        {/* Hero Section */}
        <div className="hero-section-background">
          <div className="hero-section-container">
            <div className="section-left">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>
                We are a family-owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>
              <button
                className="btn"
                onClick={() => (window.location.href = "/reservations")}
              >
                Reserve a Table
              </button>
            </div>
            <div className="section-right">
              <div className="image-box">
                <img src={gourmet} alt="Serving delicious dish" />
              </div>
            </div>
          </div>
        </div>

        {/* Specials Section */}
        <div className="specials-section">
          <div>
            <h1>Specials</h1>
            <button>Online Menu</button>
          </div>
          <div className="specials-images-container">
            <div className="specials-image">
              <img src={catsalad} alt="Special 1" />
              <div>
                <h1>Bold Heading 1</h1>
                <p>Description for Special 1</p>
                <h2>Bold Heading 2</h2>
              </div>
            </div>

            <div className="specials-image">
              <img src={bruschetta1} alt="Special 2" />
              <div>
                <h1>Bold Heading 1</h1>
                <p>Description for Special 2</p>
                <h2>Bold Heading 2</h2>
              </div>
            </div>

            <div className="specials-image">
              <img src={creme} alt="Special 3" />
              <div>
                <h1>Bold Heading 1</h1>
                <p>Description for Special 3</p>
                <h2>Bold Heading 2</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials">
          <div className="testimonial-header">
            <h1>Testimonials</h1>
          </div>
          <div className="review-container">
            {/* Review 1 */}
            <div className="review">
              <img
                id="rating"
                src="/static/media/rating.33edb6d38b2d41f4bba0.png"
                alt="ratings"
              />
              <img
                id="profile"
                src="/static/media/profile1.412d62619d46ab20d554.jpg"
                alt="Customer Pic"
              />
              <h2>Selena G.</h2>
              <p>"Really enjoyed the atmosphere."</p>
            </div>

            {/* Review 2 */}
            <div className="review">
              <img
                id="rating"
                src="/static/media/rating.33edb6d38b2d41f4bba0.png"
                alt="ratings"
              />
              <img
                id="profile"
                src="/static/media/profile2-copy-0.6055557532ec417e5819.jpg"
                alt="Customer Pic"
              />
              <h2>Brandon M.</h2>
              <p>"The Greek salad was excellent!"</p>
            </div>

            {/* Review 3 */}
            <div className="review">
              <img
                id="rating"
                src="/static/media/rating.33edb6d38b2d41f4bba0.png"
                alt="ratings"
              />
              <img
                id="profile"
                src="/static/media/profile3.368a476e22b04c93c00f.jpg"
                alt="Customer Pic"
              />
              <h2>Peter R.</h2>
              <p>"You have to try the Greek Salad!"</p>
            </div>

            {/* Review 4 */}
            <div className="review">
              <img
                id="rating"
                src="/static/media/rating.33edb6d38b2d41f4bba0.png"
                alt="ratings"
              />
              <img
                id="profile"
                src="/static/media/profile2.9b517ae64c4b6bab8ee8.jpg"
                alt="Customer Pic"
              />
              <h2>Neha J.</h2>
              <p>"Awesome place, peaceful atmosphere with delicious food."</p>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="about">
          <div className="about-content">
            <h4>Little Lemon</h4>
            <h5>Chicago</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus
              scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem,
              auctor condimentum blandit id, lobortis in nisi. Ut diam justo,
              euismod in accumsan id, vehicula sit amet tellus. Pellentesque
              porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam
              vitae tellus et mi hendrerit consequat. In dictum ligula in elit
              euismod malesuada. Curabitur varius augue id tempus ultricies.
              Mauris suscipit porta odio, et pretium nibh scelerisque ut.
            </p>
          </div>
          <div className="owners">
            <img
              id="chefs"
              src="/static/media/Mario and Adrian b.6ba0e06bfa9c1ea75109.jpg"
              alt="male owner"
            />
            <img
              id="restaurant"
              src="/static/media/restaurant.13306fcaa4576f20fd42.jpg"
              alt="female owner"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
