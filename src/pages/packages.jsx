import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faMountain,
  faGaugeHigh,
  faStar,
  faBox,
  faPlane,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';
import './packages.css';
import React, { useEffect } from 'react';

export default function Package({ onBack, onSelectService }) {
  // Set body height to 250vh when the component mounts
  useEffect(() => {
    document.body.style.height = '250vh';
    // Reset body height when the component unmounts
    return () => {
      document.body.style.height = '100vh';
    };
  }, []);

  return (
    <div>
      {/* Services Dropdown Buttons */}
      <div className="services">
        <button className="servicebtn1" onClick={() => onSelectService('package')}>
          <FontAwesomeIcon icon={faBox} /> Package
        </button>
        <button className="servicebtn2" onClick={() => onSelectService('guide')}>
          <FontAwesomeIcon icon={faPlane} /> Guide
        </button>
        <button className="servicebtn3" onClick={() => onSelectService('recommendation')}>
          <FontAwesomeIcon icon={faHandshake} /> Recommendation
        </button>
      </div>

      {/* Tour Details */}
      <div className="container1">
        <img src="muktinath.png" alt="Muktinath" className="muktinath" />
        <div className="container2">
          <h1>Muktinath Temple Tour</h1>
          <p>
            <FontAwesomeIcon icon={faClock} /> 4 Days
          </p>
          <p>
            <FontAwesomeIcon icon={faMountain} /> 3,710 M
          </p>
          <p>
            <FontAwesomeIcon icon={faGaugeHigh} /> Moderate
          </p>
          <p>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </p>

          {/* Buttons */}
          <div className="button-group">
            <button className="details-button">View Details</button>
            <button className="book-now-button">Book Now</button>
            <button className="back-button" onClick={onBack}>
              Go Back
            </button>
          </div>
        </div>
      </div>

      {/* Second Tour Details */}
      <div className="container3">
        <img src="rara.png" alt="Rara Lake" className="rara" />
        <div className="container4">
          <h1>Rara Lake Tour</h1>
          <p>
            <FontAwesomeIcon icon={faClock} /> 5 Days
          </p>
          <p>
            <FontAwesomeIcon icon={faMountain} /> 2,990 M
          </p>
          <p>
            <FontAwesomeIcon icon={faGaugeHigh} /> Easy
          </p>
          <p>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </p>
        </div>
      </div>

      {/* Third Tour Details */}
      <div className="container5">
        <img src="pokhara.png" alt="Pokhara" className="pokhara" />
        <div className="container4">
          <h1>Pokhara City Tour</h1>
          <p>
            <FontAwesomeIcon icon={faClock} /> 3 Days
          </p>
          <p>
            <FontAwesomeIcon icon={faMountain} /> 822 M
          </p>
          <p>
            <FontAwesomeIcon icon={faGaugeHigh} /> Easy
          </p>
          <p>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </p>
          {/* Buttons */}
          <div className="button-group">
            <button className="details-button">View Details</button>
            <button className="book-now-button">Book Now</button>
            <button className="back-button" onClick={onBack}>
              Go Back
            </button>
          </div>
        </div>
      </div>

      {/* Fourth Tour Details */}
      <div className="container5">
        <img src="kalinchowk.png" alt="Kalinchowk" className="kalinchowk" />
        <div className="container4">
          <h1>Kalinchowk Temple Tour</h1>
          <p>
            <FontAwesomeIcon icon={faClock} /> 2 Days
          </p>
          <p>
            <FontAwesomeIcon icon={faMountain} /> 3,842 M
          </p>
          <p>
            <FontAwesomeIcon icon={faGaugeHigh} /> Moderate
          </p>
          <p>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </p>
          {/* Buttons */}
          <div className="button-group">
            <button className="details-button">View Details</button>
            <button className="book-now-button">Book Now</button>
            <button className="back-button" onClick={onBack}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
