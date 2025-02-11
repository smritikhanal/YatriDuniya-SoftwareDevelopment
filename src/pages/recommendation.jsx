
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBox,
  faPlane,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import "./style/recommendation.css";
export default function Recommendation({onSelectService }) {
    const [formData, setFormData] = useState({
      Name: "",
      trip: "",
      journey: "",
      
      message: ""
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Form submitted successfully!");
    };
  
  useEffect(() => {
        document.body.style.height = '110vh';
        // Reset body height when the component unmounts
        return () => {
          document.body.style.height = '100vh';
        };
      }, []);
     
      
    return (
    <>
             <div className="nav">
                <img src="logo.png" alt="logo" className="logo" />
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/services">
                    <button className="services-button">Services</button>
                 </Link>
             
        
                <Link to="/contact">Contact Us</Link>
                <Link to="/login" className="login">Login</Link>
              </div>
                {/* Services Dropdown Buttons */}
                    <div className="recommendationservices">
                      <Link to ="/packages">
                      <button className="recommendationservicebtn1" onClick={() => onSelectService('package')}>
                        <FontAwesomeIcon icon={faBox} /> Package
                      </button>
                      </Link>
                      <Link to ="/Guide">
                      <button className="recommendationservicebtn2" onClick={() => onSelectService('guide')}>
                        <FontAwesomeIcon icon={faPlane} /> Guide
                      </button>
                      </Link> 
                      <button className="recommendationservicebtn3" onClick={() => onSelectService('recommendation')}>
                        <FontAwesomeIcon icon={faHandshake} /> Recommendation
                      </button>
                    </div>
                    <div className='recommendationcontainer'>
                      <h1>Add Your Experience </h1>
                      <form onSubmit={handleSubmit}>
                        <h2 className="nameh2">Full Name</h2>
                         <input type="text"   value={formData.name} onChange={handleChange}  className="fullname" required />
                         <h3 className="journeyh3">Your Journey to:</h3>
                         <input type="text"  value={formData.contact} onChange={handleChange}  className="journey1" required />
                         <h4 className="triph4">Short Trip Intro:</h4>
                          <input type="text" name="email" value={formData.email} onChange={handleChange}  className="trip" required />
                            <h5 className='experienceh5'>Explore your full experience:</h5>
                              <textarea name="message" value={formData.message} onChange={handleChange}  className="experience" required></textarea>
                              <label className="uplodeimagelabel">Upload Image</label>
                               <input type="file" className="UplodeImage" />
                               <button type="submit" className="submit">Add</button>
                                </form>
                     </div>
       

    </>
    );
  }
  