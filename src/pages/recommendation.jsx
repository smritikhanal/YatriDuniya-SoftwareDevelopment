import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faPhone, faPlane, faHandshake } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Facebook } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axiosInstance from '../axiosConfig'; // Adjusted import path
import './style/recommendation.css';

export default function Recommendation({ onSelectService }) {
  const [formData, setFormData] = useState({
    name: '',
    trip: '',
    journey: '',
    message: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('trip', formData.trip);
    formDataToSend.append('journey', formData.journey);
    formDataToSend.append('message', formData.message);
    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }

    try {
      const response = await axiosInstance.post('/recommendation', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set header for file upload
        },
      });
      alert('Form submitted successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit the form. Please try again.');
    }
  };

  useEffect(() => {
    document.body.style.height = '110vh';
    return () => {
      document.body.style.height = '100vh';
    };
  }, []);

  return (
    <>
      {/* Navbar */}
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
      
      {/* Service buttons */}
      <div className="recommendationservices">
        <Link to="/packages">
          <button className="recommendationservicebtn1" onClick={() => onSelectService('package')}>
            <FontAwesomeIcon icon={faBox} /> Package
          </button>
        </Link>
        <Link to="/Guide">
          <button className="recommendationservicebtn2" onClick={() => onSelectService('guide')}>
            <FontAwesomeIcon icon={faPlane} /> Guide
          </button>
        </Link>
        <button className="recommendationservicebtn3" onClick={() => onSelectService('recommendation')}>
          <FontAwesomeIcon icon={faHandshake} /> Recommendation
        </button>
      </div>

      {/* Form to add recommendation */}
      <div className='recommendationcontainer'>
        <h1>Add Your Experience</h1>
        <form onSubmit={handleSubmit}>
          <label className="nameh2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="fullname"
            required
          />
          
          <label className="journeyh3">Your Journey to:</label>
          <input
            type="text"
            name="journey"
            value={formData.journey}
            onChange={handleChange}
            className="journey1"
            required
          />
          
          <label className="triph4">Short Trip Intro:</label>
          <input
            type="text"
            name="trip"
            value={formData.trip}
            onChange={handleChange}
            className="trip"
            required
          />
          
          <label className='experienceh5'>Explore your full experience:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="experience"
            required
          ></textarea>
          
          <label className="uplodeimagelabel">Upload Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="UplodeImage"
          />
          
          <button type="submit" className="submit">Add</button>
        </form>
      </div>
      
      {/* Footer */}
      <div className="bottomrecommendation">
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
    </>
  );
}
