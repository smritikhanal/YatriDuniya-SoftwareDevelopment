import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style/contactus.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Facebook } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import axiosInstance from "../axiosConfig"; // Adjust path to axiosConfig

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    message: ""
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      await axiosInstance.post("/contact/submit", formData);
      setSuccess("Message sent successfully!");
      setFormData({ name: "", contact: "", email: "", message: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send message.");
    }
  };

  useEffect(() => {
    document.body.style.height = '100vh';
    return () => {
      document.body.style.height = '100vh';
    };
  }, []);

  return (
    <>
      <div className="nav">
        <img src="/logo.png" alt="logo" className="logo" />
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/login" className="login">Login</Link>
      </div>

      <div className="container">
        <div className="info-box">
          <h1>Contact YatriDuniya For Adventures</h1>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Head office Kathmandu</p>
          <p><FontAwesomeIcon icon={faPhone} /> +977 9813769389</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> Email: info@yatriduniya.com</p>
          <p className="sociallink"><Facebook color="black" /> YatriDuniya</p>
          <p className="sociallink1"><FaInstagram size={20} color="#E4405F" /> YatriDuniya</p>
        </div>

        <div className="infobox1">
          <h1>We’d love to hear from you!</h1>
          <h2>Have a question about our services?</h2>
        </div>

        <div className="infobox2">
          <h1>Send a message</h1>
          {success && <p className="success">{success}</p>}
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <h1 className="namecontactdetails">Name</h1>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="namecontactdetails1" required />
            
            <h1 className="emailcontactdetails">Email</h1>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="emailcontactdetails1" required />
            
            <h1 className="messagecontactdetails">Message</h1>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="messagecontactdetails1" required></textarea>
            
            <button type="submit" className="submit1">SUBMIT</button>
          </form>
        </div>
      </div>

      <div className="bottomcontact">
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
