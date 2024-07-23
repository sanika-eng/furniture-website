// src/Hero.js
import React from 'react';
import '../Style/Home.css'; // Create this file for styling
import background from '../Images/background.jpg'; // Import your hero image
// import product1 from '../Images/product1.jpg'; // Import your product images
// import product2 from '../Images/product2.jpg';
// import product3 from '../Images/product3.jpg';
// import product4 from '../Images/product4.jpg';
// import product5 from '../Images/product5.jpg';
// import product6 from '../Images/product6.jpg';
// import product7 from '../Images/product7.jpg';
// import product8 from '../Images/product8.jpg';
// import product9 from '../Images/product9.jpg';
// import product10 from '../Images/product10.jpg';
// import product11 from '../Images/product11.jpg';
// import product12 from '../Images/product12.jpg';


const Hero = () => {
  return (
    <section className="hero">
      <img src={background} alt="Furniture" className="hero-image" />
      <div className="hero-content">
        <h2>Discover Your Perfect Furniture</h2>
        <p>Explore our wide range of quality furniture to suit every style and budget.</p>
        <a href="#shop" className="hero-button">Shop Now</a>
      </div>
      {/* <div className="product-gallery">
        <img src={product1} alt="Product1" className="product-image" />
        <img src={product2} alt="Product2" className="product-image" />
        <img src={product3} alt="Product3" className="product-image" />
        <img src={product4} alt="Product4" className="product-image" />
        <img src={product5} alt="Product5" className="product-image" />
        <img src={product6} alt="Product6" className="product-image" />
        <img src={product7} alt="Product7" className="product-image" />
        <img src={product8} alt="Product8" className="product-image" />
        <img src={product9} alt="Product9" className="product-image" />
        <img src={product10} alt="Product10" className="product-image" />
        <img src={product11} alt="Product11" className="product-image" />
        <img src={product12} alt="Product12" className="product-image" />
      </div> */}
    </section>
  );
}

export default Hero;
