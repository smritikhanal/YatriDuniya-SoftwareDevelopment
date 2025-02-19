import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Import solid icons
import { Facebook } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import "./style/about.css";

export default function ContactUs() {
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
        <div className="aboutconatiner">
          <p>Yatri Duniya welcomes you. Set out on adventures that will never be forgotten with Yatri Duniya! Explore amazing locations, one-of-a-kind experiences, and simple travel arrangements. Let us turn your trip fantasies into a reality so that your adventure can begin!</p>
        </div>

        <div className="aboutcontainer1">
        
        <img src="marpha.jpg" alt="marpha" className="marpha"></img>
        <img src="mukitnathtemple.png" alt="mukitnath"className="aboutmukitnath"></img>
        <img src="winter.jpg" alt="winter" className="winter"></img>
        <img src="pokharaabout.jpg" alt="pokharaabout" className="pokharaabout"></img>
        <img src="abc.jpg" alt="abc" className="abc"></img>
        <img src="aboutkalinchowk.jpg" alt="aboutkalinchowk" className="aboutkalinchowk"></img>
        <div className="abouth1">
        <h1>This are the place we visited in 2025</h1>
        </div>


        </div>


        <div className="bottomabout">
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