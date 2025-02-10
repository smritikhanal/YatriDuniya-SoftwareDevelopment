import "./style/Rara.css";
import React, { useEffect } from 'react';
import { Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faPlane, faHandshake, faMapMarkerAlt , faFlag,faClock,faMountain,faGaugeHigh,faStar,faUsers} from '@fortawesome/free-solid-svg-icons';

export default function RaraViewDetials() {
  
  

  // Set body height to 250vh when the component mounts
  useEffect(() => {
    document.body.style.height = '500vh';
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
      <div className="Raraservices-dropdown">
        <Link to= "/packages">
            <button className="Raraservice-btn1">
            <FontAwesomeIcon icon={faBox} /> Package
          </button>
        </Link>


          <Link to="/Guide">
           <button className="Raraservice-btn2" >
            <FontAwesomeIcon icon={faPlane} /> Guide
          </button>
          </Link>

          
          <button className="Raraservice-btn3">
            <FontAwesomeIcon icon={faHandshake} /> Recommendation
          </button>
        </div>

        <div className="RaraLakecontainer">
             <h1 className="Raralakeh1"><FontAwesomeIcon icon={faMapMarkerAlt} /> Rara Lake </h1>
                      <img src="RaraLake.png" alt="RaraLake" className="RaraLakeimg"></img>
                       <div className="RaraLakecontainer2">
                                  <div className="RaraLake2">
                                    <h2>  <FontAwesomeIcon icon={faFlag} /> Journey starts</h2>
                                    <p>Kathmandu</p>
                                  </div>
                      
                                  <div className="RaraLake3">
                                    <h2>Travel Difficulty</h2>
                                    <p>Easy</p>
                                  </div>
                      
                                  <div className="RaraLake4">
                                    <h3>Best Months </h3>
                                    <p>Autumn(September-November)
                                    Spring(March - May)</p>
                                    </div>
                                    <div className="RaraLake5">
                                     <h3><FontAwesomeIcon icon={faFlag} className="flagicon"/> Journey Finish</h3>
                                      <p>Kathmandu</p>
                                       </div>
                                         
                                         <div className="RaraLake6">
                                                  <h3> Accommodation</h3>
                                                  <p>Hotel</p>
                                         </div>
                            </div>
                            <div className="RaraLake7">
                                <h1>About Rara Lake</h1>
                                <p>
                                Rara Lake, often called the "Queen of Lakes," is the largest freshwater lake 
                                in Nepal, situated in the remote Mugu district at an altitude
                                 of 2,990 meters (9,810 feet). Surrounded by lush forests and
                                  the snow-capped peaks of the Himalayas, the lake lies within Rara National Park, a
                                   haven for diverse flora and fauna. Known for its pristine
                                    blue waters and tranquil atmosphere, Rara Lake is a popular
                                     destination for nature lovers, trekkers, and those seeking
                                      solitude amidst breathtaking landscapes.
                                </p>
                            </div>
                            <div className="RaraLake8">
                                <h1>7 days itinerary from kathmandu to Rara Lake</h1>
                                <h2>Day 01: Drive From Kathmandu to Kohalpur (Full Day)</h2>
                                <p>Distance traveled: more than 500 km 
                                    Trip duration: 12 hours
                                    Road condition: good
                                    Kohalpur is more than 500km far from Kathmandu. And the
                                     first day of your tour is going to be long and tiring. The
                                      journey starts early in the morning. You will be riding 
                                      alongside beautiful hills and terrains. The majestic 
                                      Trishuli river flows below you.
                                    After many tea breaks and toilet breaks, you will reach 
                                    Kohalpur after 11 to 12 hours. The duration of your travel 
                                    also depends on the condition of roads and traffic.
                                    Overnight at a hotel.
                                    </p>

                                    <h2>Day 02: Kohalpur to Manma Of Kalikot District (Full day)</h2>
                                    <p>Distance traveled: 250 km approx.
                                        Trip duration: 7 to 8 hours
                                        Road condition: mostly good, off-road somewhere
                                        The second day of your tour starts early in the morning as well. Today you will be traveling through some dense forests and beautiful landscapes. It will take about 3 hours for your jeep to reach Surkhet. Then another 4 to 5 hours to arrive at Manma. Manma is the headquarter of Kalikot district.
                                        There are a few bumps and off-roads during your travel, but the overall road condition is good. This day can be tiring and worthy. You will see many villages along the way. Manma is a beautiful town. It lies between massive hills, and the scenarios are incredible.
                                        Overnight at a guest house.</p>

                                        <h2>Day 03: Drive via Sinja Valley, And Nagma, And Walk to Rara Lake</h2>
                                        <p>Distance traveled: 62 km
                                            Walking distance: around 10 km
                                            Trip duration: 7 hours
                                            Road condition: off-road
                                            You will be reaching Rara lake today. Today’s journey starts early with a soothing ride towards Nagma valley through the Sinja valley. The views are beautiful, with different flowers and domestic animals along the way. Your off-road experience begins once you cross the Nagma valley.
                                            It is now off-road all the way up. The 4 hours long off-road drive is exciting. You will be riding alongside the massive Karnali river. Some turns are thrilling and hair raising. Riding on the edge of the Karnali river is quite an experience. You will leave the Talcha airport behind. Then drive for about 20 minutes before you arrive at the place where you will park your 4-wheeler. This is as far as the jeep goes. Further, you need to ascend for 30 minutes through dense forest and woods.
                                            After about 30 minutes of climb, you will reach a point from where you can see the beautiful Rara lake. Right away, you will forget how tired you were feeling from this travel. The view is incredible.
                                            Rara is as beautiful as people described. After that, it is all downhill till you reach the hotel in about 1.5 hours. The landscapes are spectacular, and the lake itself is astounding.
                                            Overnight at a guesthouse or tented camp</p>

                                            <h2>Day 04: Explore the Rara Lake</h2>
                                            <p>
                                            Who needs an alarm clock, when you can wake up with the soothing songs of birds? The morning at Rara is fascinating. You can hear the birds singing, the trees whistling, and the sound of waves. It feels like you are in heaven. There is nothing more beautiful than a massive lake at the foot of incredible hills.
A whole day at Rara is awe-inspiring. You can engage yourself in different activities available. Activities like boating and horse riding are some of the few. Explore this beautiful place, and I can guarantee you will have the best time of your life.
Overnight at the banks of Rara.
                                            </p>
                                            <h2>
                                            Day 05: Rara Lake to Manma (Kalikot)
                                            </h2>
                                            <p>After an exciting day at Rara, it is now time to say goodbye to this place. You have all the memories to share with your friends and family back home. And I hope you have enough pictures to make them jealous.
After a short hike, you will reach the point where your Jeep is waiting for you. And you will follow the same route towards Manma.
Overnight at a guest house.</p>
<h2>Day 06: Drive from Manma to Kohalpur</h2>
<p>You will head towards Kohalpur, after an early breakfast at Manma. The journey for today is long and tiring. So, buckle up and get ready for it. It’s the same way back to Kohalpur from day 02.
Overnight at a hotel</p>
<h2>Day 07: Drive Back to Kathmandu.</h2>
<p>Your drive back to Kathmandu starts early as always. You will hit the highway, rest between your journey, and reach Kathmandu. Your Rara lake jeep tour ends once you have reached your hotel.</p>

                            </div>
                             <div className="RaraLake9">
                                            <div className="RaraLake10">
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
      </>
   
  );
}