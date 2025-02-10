import "./style/guide.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBox,
  faPlane,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
export default function Guide({ onSelectService }) {
  // Set body height to 250vh when the component mounts
    useEffect(() => {
      document.body.style.height = '150vh';
      // Reset body height when the component unmounts
      return () => {
        document.body.style.height = '100vh';
      };
    }, []);
    return (
      <div>
        {/* Services Dropdown Buttons */}
              <div className="services1">
                <button className="servicesbtn1" onClick={() => onSelectService('package')}>
                  <FontAwesomeIcon icon={faBox} /> Package
                </button>
                <button className="servicesbtn2" onClick={() => onSelectService('guide')}>
                  <FontAwesomeIcon icon={faPlane} /> Guide
                </button>
                <button className="servicesbtn3" onClick={() => onSelectService('recommendation')}>
                  <FontAwesomeIcon icon={faHandshake} /> Recommendation
                </button>
              </div>
        
        <div className="blog">
          <img src="people.png" alt="people" className="people"/>
          <h1>Davidn william</h1>
          <h2>Evrest Base camp</h2>
         
            <div className="blogp">
              <p>My journey to Everest Base Camp was
               an incredible adventure filled with 
               challenges, beauty, and unforgettable
                moments. From the excitement of landing at Lukla to
                 trekking through serene forests, crossing suspension 
                 bridges, and walking alongside towering peaks, every 
                 step was an awe-inspiring experience. Meeting the resilient 
                 Sherpa people, witnessing their culture, and standing at the 
                 base of the world’s highest mountain were truly humbling. 
                 This trek was not just about reaching the destination but about
                  embracing the journey, pushing my limits, and creating memories
                   that will last a lifetime.</p>
                   </div>
        </div>
        <div className="blog2">
          <img src="img.png" alt="people1" className="people1"/>
          <h1>Jake Mollin</h1>
          <h2> Pokhara</h2>
          <div className="blog2p">
            <p>My journey to Pokhara was a refreshing 
              escape into nature’s beauty and 
              tranquility. From the moment I 
              arrived, I was captivated by 
               city's serene atmosphere,
                surrounded by lush hills and 
                the stunning Annapurna range. 
                Strolling along the peaceful 
                Phewa Lake, exploring charming
                 streets, and soaking in the 
                 vibrant local culture made the 
                 experience unforgettable. 
                 Pokhara’s laid-back vibe, combined with 
                 its adventure offerings and 
                 breathtaking views, made it a 
                 perfect blend of relaxation and 
                 exploration. It was truly a 
                 journey to remember!</p>
          </div>
        </div>
        <div className="blog3">
          <img src="mount.png" alt="mount" className="people2"/>
          <h1>

          </h1>
          <h2>
          Namche Bazaar


          </h2>
          <div className="blog3p">
            <p>

            </p>
          </div>
        </div>
        <div className="blog4">
          <img src="yogi.png" alt="yogi" className="people3"/>
          <h1>
          Aakriti Yogi</h1>
          <h2>
          Api base camp</h2>
          <div className="blog4p">
            <p>
              The API Base Camp Trek is a stunning
               off-the-beaten-path adventure located in the far-western region of Nepal, in the Darchula District of Sudurpashchim Province. Named after Mount Api (7,132 meters), the trek takes you to the base of one of the most remote and pristine Himalayan peaks. This region is part of the Api Nampa Conservation Area, home to diverse flora, fauna, and rich cultural heritage. The trek offers breathtaking views of Mount Api, Nampa, and other towering peaks, alongside stunning landscapes of glaciers, alpine meadows, and dense forests.

            </p>
          </div>
        </div>
        <div className="blog5">
          <img src="jackson.png" alt="jackson" className="people4"/>
          <h1>

          </h1>
          <h2>

          </h2>
          <div className="blog5p">
            <p>
              
            </p>
          </div>
        </div>
        <div className="blog6">
          <img src="karki.png" alt="karki" className="people5"/>
          <h1>

          </h1>
          <h2>

          </h2>
          <div className="blog4p">
            <p>
              
            </p>
          </div>
        </div>
      </div>
    );
  }
  