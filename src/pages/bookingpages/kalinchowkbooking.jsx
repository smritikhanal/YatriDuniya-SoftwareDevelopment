import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhone, faMountain, faGaugeHigh, faStar } from '@fortawesome/free-solid-svg-icons';
import { Facebook } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import "../style/booking.css";
import axiosConfig from '../../axiosConfig'; // Import axiosConfig

export default function KalinchowkBooking() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    people: "",
    date: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosConfig.post('/booking', {
        ...formData,
        trip: 'Kalinchowk' // Passing trip name
      });

      alert(response.data.message);
    } catch (error) {
      alert("Error submitting the form");
    }
  };

  useEffect(() => {
    document.body.style.height = '200vh';
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

      <div className="bookingcontainer">
        <h1 className="h1booking">Your selected trip:</h1>
        <div className="bookingcontainer1">
          <img src="imagekalinchowk.png" alt="booking" className="bookingimg" />
          <div className="bookingcontainer2">
            <h1 className="h1tour">
              Kalinchowk tour
            </h1>
            <p><FontAwesomeIcon icon={faClock} /> 3 Days</p>
            <p><FontAwesomeIcon icon={faMountain} /> 3842 M</p>
            <p><FontAwesomeIcon icon={faGaugeHigh} /> Easy</p>
            <p>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </p>
          </div>

          <div className="bookingcontainer3">
            <h2>Personal Information:</h2>
            <form onSubmit={handleSubmit}>
              <h1 className="nameh1">Name</h1>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="name"
                required
              />
              <h1 className="contacth1">Contact</h1>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Contact Number"
                className="contact"
                required
              />
              <h1 className="emailh1">Email</h1>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="email"
                required
              />
              <h1 className="peopleh1">People</h1>
              <input
                type="number"
                name="people"
                value={formData.people}
                onChange={handleChange}
                placeholder="Number of People"
                className="people"
                required
              />
              <h1 className="dateh1">Date</h1>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="Trip Begin Date"
                className="date"
                required
              />
              <h1 className="messageh1">Message</h1>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="message"
                required
              ></textarea>
              <button type="submit" className="submit">SUBMIT</button>
            </form>
          </div>
          <p className="last">Enjoy your trip with YatriDuniya!</p>
        </div>
      </div>

      <div className="bottombook">
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
