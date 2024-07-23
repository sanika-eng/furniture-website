// src/Pages/AboutUs.js

import React from 'react';
import '../Style/AboutUs.css';
import craftsmanshipImage from '../Images/background1.jpg';  
import qualityImage from '../Images/background2.jpg'; 
import sustainabilityImage from '../Images/background3.jpg'; 

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="box">
                <div className="box-image">
                    <img src={craftsmanshipImage} alt="Craftsmanship" className="side-image" />
                </div>
                <div className="box-content">
                    <h2>Our Story</h2>
                    <p>
                        Founded in 2011, Comfort Heaven started as a small local business with a passion for craftsmanship and design. Over the years, we have grown into a renowned furniture retailer, recognized for our dedication to quality and customer satisfaction. Our journey began with a simple vision: to create beautiful, functional furniture that transforms houses into homes.
                    </p>
                </div>
            </div>

            <div className="box">
                <div className="box-image">
                    <img src={qualityImage} alt="Quality" className="side-image" />
                </div>
                <div className="box-content">
                    <h2>Our Values</h2>
                    <ul>
                        <li><strong>Quality:</strong> We source the finest materials and work with skilled artisans to create furniture that stands the test of time.</li>
                        <li><strong>Customer Service:</strong> Our customers are at the heart of everything we do. We are dedicated to providing excellent service and support to ensure a seamless shopping experience.</li>
                        <li><strong>Sustainability:</strong> We believe in responsible sourcing and manufacturing practices that minimize our environmental impact. We are committed to using sustainable materials and reducing waste.</li>
                        <li><strong>Innovation:</strong> We stay ahead of trends and continuously seek new ways to improve our products and services.</li>
                    </ul>
                </div>
            </div>

            <div className="box">
                <div className="box-image">
                    <img src={sustainabilityImage} alt="Sustainability" className="side-image" />
                </div>
                <div className="box-content">
                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li><strong>Expert Craftsmanship:</strong> Our furniture is made by skilled artisans who take pride in their work.</li>
                        <li><strong>Affordable Prices:</strong> We believe that quality furniture should be accessible to everyone, which is why we offer competitive pricing.</li>
                        <li><strong>Customization Options:</strong> Many of our products can be customized to suit your specific needs and preferences.</li>
                        <li><strong>Hassle-Free Shopping:</strong> With our user-friendly website and dedicated customer service team, shopping for furniture has never been easier.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
