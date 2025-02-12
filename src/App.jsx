import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css"; // Import the CSS file for styling


// Import your page components
import Home from './pages/Home';
import About from './pages/about'; // Changed 'about' to 'About'
import Services from "./pages/services";
import ContactUs from "./pages/contactUs";
import Package from "./pages/packages";
import Guide from "./pages/Guide";
<<<<<<< HEAD
import MukitnathViewDetials from "./pages/mukitnathviewdetials";
import RaraViewDetials from "./pages/raraviewdetils";
=======
import RaraViewDetials from "./pages/raraviewdetils";
import MukitnathViewDetials from "./pages/mukitnathviewdetials";
import KalinchowkViewDetials from "./pages/kalinchowkviewdetils";
import PokharaViewDetials from "./pages/pokharaviewdetils";
import Recommendation from "./pages/recommendation";
>>>>>>> sujal
import Booking from "./pages/Booking";
import Footer from "./pages/footer";


 
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
     
      {/* Routes to handle navigation */}
      <Routes>
        <Route path="/" element={<Home/>} /> {/* Home Page */}
        <Route path="/about" element={<About/>} /> {/* About Page */}
        <Route path="/services"element={<Services/>} /> {/* About Page */}
        <Route path="/contact"element={<ContactUs/>} /> {/* About Page */}
        <Route path = "/packages" element={<Package/>}/>
        <Route path = "/Guide" element={<Guide/>}/>
<<<<<<< HEAD
        <Route path="/mukitnathviewdetials" element={<MukitnathViewDetials/>}/>
        <Route path="/raraviewdetials" element={<RaraViewDetials/>}/>
=======
        <Route path ="/recommendation" element={<Recommendation/>}/>
       

        <Route path="/mukitnathviewdetials" element={<MukitnathViewDetials/>}/>
        <Route path="/raraviewdetials" element={<RaraViewDetials/>}/>
        <Route path="/kalinchowkviewdetials" element={<KalinchowkViewDetials/>}/>
        <Route path="/pokharaviewdetials" element={<PokharaViewDetials/>}/>
>>>>>>> sujal
        <Route path = "/booking" element={<Booking/>}/>

      </Routes>
    </Router>
  );
}

export default App;
