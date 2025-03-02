

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import "../Styles/Navbar.css"; 
import logo from "../assets/logo.png"; 

const Navbar = () => {
  const [loginClicked, setLoginClicked] = useState(false); // State to track Login button click
  const location = useLocation(); // Get the current route

  useEffect(() => {
    // Check if loginClicked is stored in localStorage
    const loggedIn = localStorage.getItem("loginClicked");
    if (loggedIn === "true") {
      setLoginClicked(true); // Set the state if loginClicked is true
    }
  }, [location]); // Re-run when the location changes

  return (
    <header className="navbar-header">
      <div className="logo">
        <img src={logo} alt="Yatri Duniya Logo" />
        
      </div>
      <nav>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>

        <Link 
          to="/about" 
          className={ location.pathname.startsWith("/about") ? "active" : ""}
        >
          About Us
        </Link>

        <Link 
          to="/services" 
          className={location.pathname.startsWith("/services") ||
            location.pathname.startsWith("/all-hotels") ||
            location.pathname.startsWith("/Hotels/HotelMalla") ||
            location.pathname.startsWith("/Hotels/Fishtail") ||
            location.pathname.startsWith("/Hotels/KarmaVilla") ||
            location.pathname.startsWith("/Hotels/LakesideStay") ||
            location.pathname.startsWith("/Pages/Confirmation") 
            ? "active" : ""
          }>
        
          Services
        </Link>

        <Link to="/contactUs" className={location.pathname === "/contactUs" ? "active" : ""}>
          Contact Us
        </Link>
      </nav>

      {/* Conditionally render the Login button on the homepage */}
      {location.pathname === "/" && (
        <button className="auth-button">
          <Link to="/login">Login</Link>
        </button>
      )}
    </header>
  );
};

export default Navbar;

