
import React from 'react';
import '../Style/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>About Us</h4>
            <p>Your Furniture Store is dedicated to providing high-quality furniture solutions at affordable prices.</p>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <p>Email: contact@yourfurniturestore.com</p>
            <p>Phone: +1234567890</p>
            <p>Address: 123 Furniture Ave, City, Country</p>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="footer-social-icons">
            <ul>
              <a href="#instagram">Instagram</a><br/>
              <a href="#facebook">Facebook</a><br/>
              <a href="#twitter">Twitter</a><br/>
              <a href="#pinterest">Pinterest</a><br/>
              <a href="#youtube"> YouTube</a><br/>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Furniture Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
