import React from 'react';
import { Link } from "react-router-dom"; 
import Navbar from '../Components/Navbar';  
import Footer from '../Components/Footer';  
import "../Styles/HomePage.css"; 
import heroImage from "../assets/lake.jpg";

const HomePage = () => {
    return (
      <div>
        <Navbar />
       
        
        <div className="hero">
          <img src={heroImage} alt="Beautiful Stay" className="hero-image" />
          <div className="overlay">
            <h1> YatriDuniya</h1>
            <p>"Turning Travel Dreams Into Reality"</p>
            
          </div>
        </div>
  
        <Footer />
      </div>
    );
};

export default HomePage;