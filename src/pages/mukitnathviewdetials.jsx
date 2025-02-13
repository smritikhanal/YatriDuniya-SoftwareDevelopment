import { Link} from "react-router-dom";
import React, { useEffect }from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox,faPhone, faPlane, faHandshake,faMapMarkerAlt, faFlag,faClock,faMountain,faGaugeHigh,faStar,faUsers} from '@fortawesome/free-solid-svg-icons';
import "./style/mukitnath.css";
import { Facebook } from "lucide-react";
import { FaInstagram } from "react-icons/fa";


export default function MukitnathViewDetials() {
  
  

  // Set body height to 250vh when the component mounts
  useEffect(() => {
    document.body.style.height = '400vh';
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
      <div className="mukitnathservices-dropdown">
        <Link to= "/packages">
            <button className="mukitnathservice-btn1">
            <FontAwesomeIcon icon={faBox} /> Package
          </button>
        </Link>
           

           <Link to ="/Guide">
           <button className="mukitnathservice-btn2" >
            <FontAwesomeIcon icon={faPlane} /> Guide
          </button>
          </Link>
          <Link to="/recommendation">
          <button className="mukitnathservice-btn3">
            <FontAwesomeIcon icon={faHandshake} /> Recommendation
          </button>
          </Link>
        </div>

        
        <div className="mukitnathtemplecontainer">
          <h1 className="mukitnathtempleh1"><FontAwesomeIcon icon={faMapMarkerAlt} /> Mukitnath Temple</h1>
          <img src="mukitnathtemple.png" alt="mukitnathtemple" className="mukitnathtempleimg"></img>


           <div className="mukitnathtemplecontainer2">
            <div className="mukitnathtemple2">
              <h2>  <FontAwesomeIcon icon={faFlag} /> Journey starts</h2>
              <p>Kathmandu</p>
            </div>

            <div className="mukitnathtemple3">
              <h2>Travel Difficulty</h2>
              <p>Moderate</p>
            </div>

            <div className="mukitnathtemple4">
              <h3>Best Months </h3>
              <p>Autumn(September-November)
              Spring(March - May)</p>
              </div>

              
            <div className="mukitnathtemple5">
              <h3><FontAwesomeIcon icon={faFlag} className="flagicon"/> Journey Finish</h3>
              <p>Kathmandu</p>
              </div>
              <div className="mukitnathtemple6">
              <h3> Accommodation</h3>
              <p>Hotel</p>
              </div>


          </div>
          <div className="mukitnathtemple7">
                <h1>About Muktinath</h1>
                <p>Muktinath is a sacred pilgrimage site located in the Mustang
                   district of Nepal, at an altitude of approximately 3,710 
                   meters (12,172 feet) in the Himalayan region. Revered 
                    both Hindus and Buddhists, it is home to the famous 
                    Muktinath Temple, dedicated to Lord Vishnu. The site is
                     renowned for its spiritual significance, natural beauty,
                      and unique features, such as the 108 water spouts and 
                       eternal flame that burns naturally. Nestled along the 
                       Annapurna Circuit, Muktinath attracts pilgrims and
                        trekkers seeking serenity, adventure, and blessings.</p>
              </div>

              <div className="mukitnathtemple8">
                <h1>4 days itinerary from kathmandu to Muktinath</h1>
                <p>Day 1st – Pick up from your nearby places and leave from Kathmandu to Tatopani. On the way, we take our lunch 
                  on the way. After a 10hrs drive from Kathmandu, we reach Tatopani. In the late evening, we take our dinner at 
                   hotel and we stay at the hotel.
         Day 2nd – In the morning we woke up and had our morning coffee and breakfast. And we leave for Muktinath from Tatopani. On the way, 
         take our meal. We can enjoy our trip by sightseeing Marfa village, Kagbeni, and other natural beauties. After reaching Muktinath,
         we worship the gods and enjoy ourselves thereby sightseeing. In the evening we stay at a hotel in Jomsom. We have our dinner and sleep.
         Day 3rd – In the morning we take our breakfast and leave for Pokhara. On the way to Pokhara, we take our meal on the way. After 
         9hrs/10hrs drive we reach Pokhara. At night we stay at the hotel and take our dinner.
         Day 4th – In the morning we have our breakfast and go sightseeing at Davis Falls, Mahendra Cave, a 
         few lakes, and Talbharai temple. And we will come back to the hotel and take our lunch and leave for Kathmandu after a 6-hour 
         drive we drop you at your house.</p>
              </div>

              <div className="mukitnathtemple9">
                <h1>
                Tour Cost Includes
                </h1>
                <p>Transportation (Tourist Bus)<br></br>
                  Hotel <br></br>
                   Breakfast, lunch and Dinner<br></br>
                   guide<br></br>
                   </p>
                   <h2>Tour Cost excludes</h2>
                   <p>Bar Bills<br></br>
                   personal Expenditure</p>

              </div>
              <div className="mukitnathtemple10">
                <div className="mukitnathtemple11">
                  <h1>Muktinath Temple </h1>
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

                          <h2> <FontAwesomeIcon icon={faUsers} />Group Size</h2>
                          <p className="p1">20-25 Person(Bus)<br></br>
                           Rs.10,000 per Person<br></br>
                              8-10 Person (Scorpio)<br></br>
                                   Rs.14,000 Per Person</p>
                                   <Link to = "/booking">
                                   <button className="button">
                                    Book this trip
                                    </button>
                                    </Link>
 
                                   
                </div>
              </div>

        </div>
        <div className="bottommukitnath">
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
