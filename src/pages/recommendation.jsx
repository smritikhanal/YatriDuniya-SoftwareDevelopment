import React from "react";
{/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Import solid icons*/}

export default function Recommendation({onBack}) {
    return (
      <div className="container1">
        <img src="mukitnath.png" alt="mukitnath" className="mukitnath"/>
        
       
    
        <button onClick={onBack}>Go Back</button>
      </div>
    );
  }
  