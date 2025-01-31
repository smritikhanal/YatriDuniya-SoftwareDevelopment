import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faClock, faMountain,faGaugeHigh, faStar} from '@fortawesome/free-solid-svg-icons'; // Import solid icons
import "./guide.css";
export default function Package({ onBack }) {
  return (
    <div className="container1">
      <img src="mukitnath.png" alt="mukitnath" className="mukitnath"/>
      <div className="container2">
        <h1 >Muktinath Temple tour</h1>
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

      <button onClick={onBack}>View detials</button>
      </div>
    </div>

  );
}
