import React, { useEffect, useState }from "react"; 
import { Link } from "react-router-dom"; // Import Link for navigation
import "./style/contactus.css"; // Import styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import solid icons
import { Facebook } from "lucide-react";
import { FaInstagram } from "react-icons/fa";





export default function ContactUs() {
    const [formData, setFormData] = useState({
      name: "",
      contact: "",
      email: "",
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
      document.body.style.height = '100vh';
      return () => {
        document.body.style.height = '100vh';
      };
    }, []);
  
  
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
          <h1>Contact YatriDuniya For Adventures</h1>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Head office Kathmandu
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +977 9813769389
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> Email: info@yatriduniya.com
          </p>
          <p className="sociallink">
             <Facebook  color="black" /> YatriDuniya
          </p>
          <p className="sociallink1">
            <FaInstagram size={20} color="#E4405F" /> YatriDuniya
                 </p>
                 </div>
                 <div className="infobox1">
                  <h1>We’d love to hear from you!</h1>
                  <h2>have a question about our services?</h2>
                 </div>
                 <div className="infobox2">
                  <h1>Send a message</h1>
                  <form onSubmit={handleSubmit}>
            <h1 className="namecontactdetils">Name</h1>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="namecontactdetials1" required />
              
               <h1 className="emailcontactdetils">Email</h1>
                 <input type="email" name="email" value={formData.email} onChange={handleChange} className="emailcontactdetials1" required />
                <h1 className="messagecontactdetials">Message</h1>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="messagecontactdetials1" required></textarea>
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