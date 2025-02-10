import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./style/contactus.css"; // Import styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import solid icons


export default function ContactUs() {
  
  return (
    <>
      {/* Navigation Bar */}
      <div className="nav">
        <img src="/logo.png" alt="logo" className="logo" />
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/login" className="login">Login</Link>
      </div>

      {/* Main Content */}
      <div className="container">
        <div className="info-box">
          <h3>Contact YatriDuniya For Adventures</h3>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Head office Kathmandu
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +977 9813769389
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> Email: info@yatriduniya.com
          </p>
          
        </div>
      </div>
    </>
  );
}