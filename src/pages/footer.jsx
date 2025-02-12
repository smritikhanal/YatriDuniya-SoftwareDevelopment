import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Import solid icons
import { Facebook } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link

export default function Footer() {
    return (
        <div className="bottom">
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
    );
}
