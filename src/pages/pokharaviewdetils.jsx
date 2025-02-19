import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBox, faPlane, faHandshake, faMapMarkerAlt, 
  faFlag, faClock, faMountain, faGaugeHigh, 
  faStar, faUsers ,faPhone
}
 from '@fortawesome/free-solid-svg-icons';
import "./style/pokhara.css";
import { Facebook } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function PokharaViewDetails() {

  // Set body height when the component mounts
  useEffect(() => {
    document.body.style.height = '450vh';
    return () => {
      document.body.style.height = ''; // Reset instead of forcing 100vh
    };
  }, []);

  return (
    <>
      {/* Navigation */}
      <div className="nav">
        <img src="logo.png" alt="Company Logo" className="logo" />
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">
          <button className="services-button">Services</button>
        </Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/login" className="login">Login</Link>
      </div>

      {/* Service Buttons */}
      <div className="pokharaservices-dropdown">
        <Link to="/packages">
          <button className="pokharaservice-btn1">
            <FontAwesomeIcon icon={faBox} /> Package
          </button>
        </Link>
        <Link to="/guide">
          <button className="pokharaservice-btn2">
            <FontAwesomeIcon icon={faPlane} /> Guide
          </button>
        </Link>
        <Link to="/recommendation">
          <button className="pokharaservice-btn3">
            <FontAwesomeIcon icon={faHandshake} /> Recommendation
          </button>
        </Link>
      </div>

      {/* Tour Details */}
      <div className="pokharacontainer">
        <h1 className="pokharah1">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Pokhara Tour
        </h1>
        <img src="pokhara.png" alt="Scenic View of Pokhara" className="pokharaimg" />

        <div className="pokharacontainer2">
          <div className="pokhara2">
            <h2><FontAwesomeIcon icon={faFlag} /> Journey Starts</h2>
            <p>Kathmandu</p>
          </div>
          <div className="pokhara3">
            <h2>Travel Difficulty</h2>
            <p>Moderate</p>
          </div>
          <div className="pokhara4">
            <h3>Best Months</h3>
            <p>Autumn (September-November) <br /> Spring (March-May)</p>
          </div>
          <div className="pokhara5">
            <h3><FontAwesomeIcon icon={faFlag} /> Journey Finish</h3>
            <p>Kathmandu</p>
          </div>
          <div className="pokhara6">
            <h3>Accommodation</h3>
            <p>Hotel</p>
          </div>
        </div>

        {/* About Pokhara */}
        <div className="pokhara7">
          <h1>About Pokhara</h1>
          <p>
            Pokhara, often referred to as the "Gateway to the Himalayas," is a picturesque city 
            in central Nepal, nestled beside the serene Phewa Lake and surrounded by the 
            majestic Annapurna mountain range. Renowned for its natural beauty, adventure 
            activities, and vibrant culture, Pokhara offers stunning views of peaks like 
            Machhapuchhre (Fishtail Mountain) and serene landscapes. It is a hub for trekking, 
            paragliding, and boating, making it a favorite destination for both adventure 
            enthusiasts and those seeking tranquility.
          </p>
        </div>

        {/* Itinerary */}
        <div className="pokhara8">
          <h1>4 Days Itinerary from Kathmandu to Pokhara</h1>

          <h2>Day 1: Travel from Kathmandu to Pokhara</h2>
          <p>
            We begin the 4-day Pokhara tour with a scenic drive from Kathmandu. The drive 
            is around 6 to 7 hours long and offers beautiful views of lush green hills, rivers, 
            waterfalls, and small settlement areas. Once we reach Pokhara, we'll drop you at 
            the hotel. You can rest for a few hours and later explore Phewa Lake. You can do a 
            soothing boat ride on the lake while enjoying the gorgeous sunset.
          </p>

          <h2>Day 2: Pokhara - Sarangkot - Naudada - Pokhara</h2>
          <p>
            We’ll wake up early today and drive to Sarangkot viewpoint after having a 
            delicious breakfast. From here, we begin our short hike through forested paths 
            and terraced farms. The trail ascends to Naudanda, from where we get to witness 
            breathtaking mountain views of Lamjung Himal, Mt. Annapurna, Machhapuchhre, etc. 
            After some time, we drive back to Pokhara to spend the night.
          </p>

          <h2>Day 3: Full Day Tour in Pokhara</h2>
          <p>
            It's going to be a fabulous day today. We will spend the day visiting several 
            tourist sites like Davis Falls, Gupteshwor Cave, Peace Stupa, etc. We explore 
            the local market and spend the evening strolling in the bustling Lakeside Market. 
            Our friendly tour guide will accompany you during the sightseeing. He or she will 
            introduce you to the monuments and tell you all the stories behind them.
          </p>

          <h2>Day 4: Travel from Pokhara to Kathmandu</h2>
          <p>
            It's time to drive back to Kathmandu. We follow the rushing Trishuli river and 
            enjoy a scenic ride. Once we reach Kathmandu, our team will drop you at the hotel.
          </p>
        </div>

        {/* Tour Costs */}
        <div className="pokhara9">
          <h1>Tour Cost Includes</h1>
          <p>
            Transportation (Tourist Bus) <br />
            Hotel <br />
            Breakfast, Lunch, and Dinner <br />
            Guide
          </p>

          <h2>Tour Cost Excludes</h2>
          <p>
            Bar Bills <br />
            Personal Expenditure
          </p>
        </div>

        {/* Muktinath Temple Section */}
        <div className="pokhara10">
          <div className="pokhara11">
            <h1 className="pokhara11h1">Muktinath Temple</h1>
            <p><FontAwesomeIcon icon={faClock} /> 4 Days</p>
            <p><FontAwesomeIcon icon={faMountain} /> 3,710 M</p>
            <p><FontAwesomeIcon icon={faGaugeHigh} /> Moderate</p>
            <p>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </p>

            <h2 className="pokharakk"><FontAwesomeIcon icon={faUsers} /> Group Size</h2>
            <p className="p11">
              20-25 Person (Bus) <br />
              Rs.10,000 per Person <br />
              8-10 Person (Scorpio) <br />
              Rs.14,000 Per Person
            </p>


              <Link to ="/pokharabooking">
              <button className="button1">Book this trip</button>
              </Link>
           
          </div>
        </div>
      </div>
      <div className="bottompokhara">
        <h1><FontAwesomeIcon icon={faPhone} /> +977 9813769389</h1>
         <h2>yatriduniya12@gmail.com</h2>
          <h3>Follow us on Social Media</h3><Link to="https://www.instagram.com/sujalgauchan/" target="_blank"> 
            <div className="insta"><FaInstagram size={40} color="#E4405F" /></div>
            </Link>
            <Link to="https://www.facebook.com/" target="_blank"> 
                <div className="feb"><Facebook size={40} color="Blue" /></div>
            </Link>
        </div>
    </>
  );
}
