import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faPlane, faHandshake } from '@fortawesome/free-solid-svg-icons';
import "./services.css";
import Package from "./packages";
import Guide from "./Guide";
import Recommendation from "./recommendation";
export default function Services() {
  const [showServices, setShowServices] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const togglePackages = () => {
    setShowServices((prev) => !prev);
  };

  return (
    <div>
      {/* Navigation */}
      <div className="nav">
        <img src="logo.png" alt="logo" className="logo" />
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <button onClick={togglePackages} className="services-button">Services</button>
        <Link to="/contact">Contact Us</Link>
        <Link to="/login" className="login">Login</Link>
        
      </div>

      {/* Services Dropdown */}
      {showServices && !selectedService && (
        <div className="services-dropdown">
          <button className="service-btn1" onClick={() => setSelectedService("package")}>
            <FontAwesomeIcon icon={faBox} /> Package
          </button>
          <button className="service-btn2"onClick={() => setSelectedService("guide")}>
            <FontAwesomeIcon icon={faPlane} /> Guide
          </button>
          <button className="service-btn3"onClick={() => setSelectedService("recomandation")}>
            <FontAwesomeIcon icon={faHandshake} /> Recommendation
          </button>
        </div>
      )}
      {/* Render Package Component When Selected */}
      {selectedService === "package" && <Package onBack={() => setSelectedService(null)} />}
      {selectedService === "guide" && <Guide onBack={() => setSelectedService(null)} />}
      {selectedService === "recomendation" && <Recommendation onBack={() => setSelectedService(null)} />}
    
    



     
    </div>
  );
}
