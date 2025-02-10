import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faPlane, faHandshake } from '@fortawesome/free-solid-svg-icons';
import "./style/services.css";
import Package from "./packages";
import Guide from "./Guide";
import Recommendation from "./recommendation";
export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

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

      {/* Services Dropdown */}
      {selectedService === null && (
        <div className="services-dropdown">
          <button className="service-btn1" onClick={() => setSelectedService("package")}>
            <FontAwesomeIcon icon={faBox} /> Package
          </button>
          <button className="service-btn2" onClick={() => setSelectedService("guide")}>
            <FontAwesomeIcon icon={faPlane} /> Guide
          </button>
          <button className="service-btn3" onClick={() => setSelectedService("recommendation")}>
            <FontAwesomeIcon icon={faHandshake} /> Recommendation
          </button>
        </div>
      )}

      {/* Render Components Based on Selection */}
      {selectedService === "package" && (
        <Package onBack={() => setSelectedService(null)} onSelectService={setSelectedService} />
      )}
      {selectedService === "guide" && (
        <Guide onBack={() => setSelectedService(null)} onSelectService={setSelectedService} />
      )}
      {selectedService === "recommendation" && (
        <Recommendation onBack={() => setSelectedService(null)} onSelectService={setSelectedService} />
      )}
    </div>
  );
}
