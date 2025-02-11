
import { Link} from "react-router-dom";
import React, { useEffect }from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faPlane, faHandshake/*,faMapMarkerAlt, faFlag,faClock,faMountain,faGaugeHigh,faStar,faUsers*/} from '@fortawesome/free-solid-svg-icons';
export default function PokharaViewDetials() {
  
  

  // Set body height to 250vh when the component mounts
  useEffect(() => {
    document.body.style.height = '550vh';
    return () => {
      document.body.style.height = '100vh';
    };
  }, []);


  

  return (
    <>
    {/* Navigation */}
     <div className="nav">
       <img src="logo.png" alt="logo" className="logo" />
       <Link to="/">Home</Link>
       <Link to="/about">About Us</Link>
       <Link to="/services">
           <button className="services-button">Services</button>
        </Link>
    

       <Link to="/contact">Contact Us</Link>
       <Link to="/login" className="login">Login</Link>
     </div>
      
            
             </>
  );
}