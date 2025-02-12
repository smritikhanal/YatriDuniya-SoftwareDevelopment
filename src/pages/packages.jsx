import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock,faPhone,faMountain,faGaugeHigh,faStar,faBox,faPlane,faHandshake,}
from '@fortawesome/free-solid-svg-icons';
import { Facebook } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import './style/packages.css';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";


export default function Package({ onBack,
  onSelectService }) {
  // Set body height to 250vh when the component mounts
  useEffect(() => {
    document.body.style.height = '250vh';
    // Reset body height when the component unmounts
    return () => {
      document.body.style.height = '100vh';
    };
  }, []);

  return (

    <div>
       
      {/* Navigation */}
      <div className="nav">
        <img src="logo.png" alt="logo" className="logo" />
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <button onClick={() => setSelectedService(null)} className="services-button">Services</button>
        <Link to="/contact">Contact Us</Link>
        <Link to="/login" className="login">Login</Link>
       </div>
      {/* Services Dropdown Buttons */}
      <div className="services">
        <button className="servicebtn1" onClick={() => onSelectService('package')}>
          <FontAwesomeIcon icon={faBox} /> Package
        </button>
<<<<<<< HEAD
        <Link to="/Guide">
        <button className="servicebtn2" onClick={() => onSelectService('guide')}>
          <FontAwesomeIcon icon={faPlane} /> Guide
        </button>
        </Link>
=======
        <Link to ="/Guide">
        <button className="servicebtn2" onClick={() => onSelectService('guide')}>
          <FontAwesomeIcon icon={faPlane} /> Guide
        </button>
        </Link> 
        <Link to ="/recommendation">
>>>>>>> sujal
        <button className="servicebtn3" onClick={() => onSelectService('recommendation')}>
          <FontAwesomeIcon icon={faHandshake} /> Recommendation
        </button>
        </Link>
      </div>

      {/* Tour Details */}
      <div className="container1">
        <img src="muktinath.png" alt="Muktinath" className="muktinath" />
        <div className="container2">
          <h1>Muktinath Temple Tour</h1>
          <p>
            <FontAwesomeIcon icon={faClock} /> 4 Days
          </p>
          <p>
            <FontAwesomeIcon icon={faMountain} /> 3,710 M
          </p>
          <p>
            <FontAwesomeIcon icon={faGaugeHigh} /> Moderate
          </p>
          <p>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </p>

          {/* Buttons */}
          <div className="button-group">
            <Link to="/mukitnathviewdetials">View Detils</Link>
           
          </div>
        </div>
      </div>

      {/* Second Tour Details */}
      <div className="container3">
        <img src="rara.png" alt="Rara Lake" className="rara" />
        <div className="container4">
          <h1>Rara Lake Tour</h1>
          <p>
            <FontAwesomeIcon icon={faClock} /> 5 Days
          </p>
          <p>
            <FontAwesomeIcon icon={faMountain} /> 2,990 M
          </p>
          <p>
            <FontAwesomeIcon icon={faGaugeHigh} /> Easy
          </p>
          <p>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </p>
        {/* Buttons */}
        <div className="button-group">
          <Link to="/raraviewdetials">View Details</Link>
          </div>
          </div>

      </div>

      {/* Third Tour Details */}
      <div className="container5">
        <img src="pokhara.png" alt="Pokhara" className="pokhara" />
        <div className="container4">
          <h1>Pokhara City Tour</h1>
          <p>
            <FontAwesomeIcon icon={faClock} /> 3 Days
          </p>
          <p>
            <FontAwesomeIcon icon={faMountain} /> 822 M
          </p>
          <p>
            <FontAwesomeIcon icon={faGaugeHigh} /> Easy
          </p>
          <p>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </p>
          {/* Buttons */}
          <div className="button-group">
          <Link to="/pokharaviewdetials">View Details</Link>
          </div>
        </div>
      </div>

      {/* Fourth Tour Details */}
      <div className="container5">
        <img src="kalinchowk.png" alt="Kalinchowk" className="kalinchowk" />
        <div className="container4">
          <h1>Kalinchowk Temple Tour</h1>
          <p>
            <FontAwesomeIcon icon={faClock} /> 2 Days
          </p>
          <p>
            <FontAwesomeIcon icon={faMountain} /> 3,842 M
          </p>
          <p>
            <FontAwesomeIcon icon={faGaugeHigh} /> Moderate
          </p>
          <p>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </p>
          {/* Buttons */}
          <div className="button-group">
          <Link to="/kalinchowkviewdetials">View Details</Link>
          </div>
        </div>
      </div>
      <div className="bottompackages">
                  <h1><FontAwesomeIcon icon={faPhone} /> +977 9813769389</h1>
                  <h2>yatriduniya12@gmail.com</h2>
                  <h3>Follow us on Social Media</h3>
                  <Link to="https://www.instagram.com/sujalgauchan/" target="_blank"> 
                      <div className="insta"><FaInstagram size={40} color="#E4405F" /></div>
                  </Link>
                  <Link to="https://www.facebook.com/" target="_blank"> 
                      <div className="feb"><Facebook size={40} color="Blue" /></div>
                  </Link>
              </div>
      
    </div>
  );
}
