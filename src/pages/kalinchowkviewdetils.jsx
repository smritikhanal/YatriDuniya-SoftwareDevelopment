
import { Link} from "react-router-dom";
import React, { useEffect }from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox,faPhone, faPlane, faHandshake,faMapMarkerAlt, faFlag,faClock,faMountain,faGaugeHigh,faStar,faUsers} from '@fortawesome/free-solid-svg-icons';
import "./style/Kalinchowk.css";
import { Facebook } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
export default function KalinchowkViewDetials() {
  
  

  // Set body height to 250vh when the component mounts
  useEffect(() => {
    document.body.style.height = '430vh';
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
      <div className="kalinchowkservices-dropdown">
             <Link to= "/packages">
                 <button className="kalinchowk-btn1">
                 <FontAwesomeIcon icon={faBox} /> Package
               </button>
             </Link>
                
     
                <Link to ="/Guide">
                <button className="kalinchowk-btn2" >
                 <FontAwesomeIcon icon={faPlane} /> Guide
               </button>
               </Link>
               <Link to="/recommendation">
               <button className="kalinchowk-btn3">
                 <FontAwesomeIcon icon={faHandshake} /> Recommendation
               </button>
               </Link>
             </div>
             <div className="kalinchowkcontainer">
              <h1 className="kalinchowkh1"><FontAwesomeIcon icon={faMapMarkerAlt} />Kalinchowk tour</h1>
              <img src="imagekalinchowk.png" alt="kalinchowkviewdetils" className="kalinchowkimg2"></img>
              <div className="kalinchowkcontainer2">
                 <div className="kalinchowk2">
                    <h2>  <FontAwesomeIcon icon={faFlag} /> Journey starts</h2>
                     <p>Kathmandu</p>
                   </div>
                
               <div className="kalinchowk3">
                <h2>Travel Difficulty</h2>
                 <p>Easy</p>
                  </div>
                   <div className="kalinchowk4">
                    <h3>Best Months </h3>
                    <p>winter(December-February)
                    Spring(March - May)</p>
                     </div>
                      <div className="kalinchowk5">
                        <h3><FontAwesomeIcon icon={faFlag} className="flagicon"/> Journey Finish</h3>
                        <p>Kathmandu</p>
                        </div>
                        <div className="kalinchowk6">
                          <h3> Accommodation</h3>
                          <p>Hotel</p>
                          </div>
                          <div className="kalinchowk7">
                            <h1>About Kalinchowk</h1>
                            <p>Kalinchowk is a popular name for its natural beauty and snowfall experience in winter. Besides that, there is a famous religious site Kalinchowk Bhagawati. Kalinchowk Nepal is situated in Dolakha district, around 150 KM far from Kathmandu. One can experience the view from 3842M above sea level. The place is now becoming a popular quick city escape and snowfall destination during the winter season.</p>
                          </div>
                          <div className="kalinchowk8">
                            <h1>3 days itinerary from kathmandu to kalinchowk</h1>
                            <h2>Day 1: Drive to Charikot (1554m) and Hike to Kuri Village (3447m):</h2>
                            <p>The Kalinchowk trek officially begins from Charikot, the headquarter of the Dolakha district. Charikot can be reached after a 5-6 hour ride from Kathmandu and runs along the Arniko highway that offers captivating countryside views.
                              The town is bordered by the Sunkoshi and Khimti Rivers on the west and east. On the northeast and the western side are captivating Rolwaling and Gauri Shankar Himal. Apart from being the gateway to the Kalinchowk area, Charikot is the oldest Newari town which has preserved its culture to this time. There are several attractions around like the Dolkha Bhimeshwar temple-the oldest temple in the town, Kotihom, Mahangkal and Pashupati.
                              After arriving at Charikot, you will start your journey towards Kuri village through lush woodlands and village areas like Deurali. Enjoying the views of the Himalayas and beautiful landscape, you will arrive at the cosy Kuri village filled with lodges and restaurants.</p>
                              <h2>Day 2: Hike up to the Kalinchowk Bhagwati temple and head down to Kuri village:</h2>
                              <p>The ascent from Kuri village to Kalinchowk is not exhausting as the previous day. With slow and steady climb on the stony pathway, you will gain atltitude and arrive at the temple in 2 hours. If you make it on time, you can enjoy the sunrise view from the top which is magical specially because of the panoramic sights of the Gaurishankar and Ganesh himal. After capturing this moment, you can seek blessing from Kalinchowk Bhagwati and soak yourself in the majestic views from the hilltop.
                              After spending few hours in the hill, you will hike down to Kuri village and spend the rest of the day exploring the village. Located at 2300m, Kuri is a traditional village that offers breathtaking sights of the Himalayas and a peek into the daily life of the locals.</p>
                          <h2>Day 3: Trek down to Charikot and drive to Kathmandu </h2>
                          <p>The Kalinchowk 3-day trek ends today, so prepare to bid goodbye to the Himalayas. Pack your bags and get ready for the downhill journey to Charikot. You will follow the same route as the first-day trip and drive back to Kathmandu.</p>
                          </div>
                          <div className="kalinchowk9">
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
                                                                    <div className="kalinchowk10">
                                                                      <div className="kalinchowk11">
                                                                        <h1 className="kalinchowk11h1">Muktinath Temple </h1> <p>
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
                                                               
                                                                                         <h2 className="kalinchowkkk"> <FontAwesomeIcon icon={faUsers} />Group Size</h2>
                                                                                         <p className="p11">20-25 Person(Bus)<br></br>
                                                                                          Rs.10,000 per Person<br></br>
                                                                                             8-10 Person (Scorpio)<br></br>
                                                                                                  Rs.14,000 Per Person</p>
                                                                                                  <Link to = "/kalinchowkbooking">
                                                                                                  <button className="button1">
                                                                                                   Book this trip
                                                                                                   </button>
                                                                                                   </Link>
                                                                
                                                                                                  
                                                                               </div>
                          </div>

              </div>
             </div>
             <div className="bottomkalinchowk">
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