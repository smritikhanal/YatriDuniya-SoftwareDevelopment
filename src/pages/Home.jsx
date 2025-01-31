import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="nav">
        <img src="logo.png" alt="logo" className="logo" />
        <Link to="/">Home</Link> {/* Link to Home page */}
        <Link to="/about">About Us</Link> {/* Link to About page */}
        <Link to="/services">Services</Link> {/* Link to Services page */}
        <Link to="/contact">Contact Us</Link> {/* Link to Contact page */}
        <Link to="/login" className="login">Login</Link> {/* Link to Login page */}
      </div>

      {/* Hero Section */}
      <div className="hero">
        <img src="lake.png" alt="lake" className="lake" />
        <p className="p">"Turning Travel Dreams Into Reality"</p>
      </div>

      {/* Bottom Section */}
      <div className="bottom">
        <h1>Hello World</h1> {/* This is the content for Home page */}
      </div>
    </div>
  );
}

