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
import RaraViewDetials from "./pages/raraviewdetils";
import MukitnathViewDetials from "./pages/mukitnathviewdetials";
import KalinchowkViewDetials from "./pages/kalinchowkviewdetils";
import PokharaViewDetials from "./pages/pokharaviewdetils";
import Recommendation from "./pages/recommendation";
import Booking from "./pages/bookingpages/mukitnathbooking";
import RaraBooking from "./pages/bookingpages/rarabooking";
import KalinchowkBooking from "./pages/bookingpages/kalinchowkbooking";
import Login from "./pages/login";
import Register from "./pages/register";
import Footer from "./pages/footer";
import PokharaBooking from "./pages/bookingpages/pokharabooking";


 
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
        <Route path ="/recommendation" element={<Recommendation/>}/>
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/register" element={<Register/>}/>

        <Route path="/mukitnathviewdetials" element={<MukitnathViewDetials/>}/>
        <Route path="/raraviewdetials" element={<RaraViewDetials/>}/>
        <Route path="/kalinchowkviewdetials" element={<KalinchowkViewDetials/>}/>
        <Route path="/pokharaviewdetials" element={<PokharaViewDetials/>}/>
        <Route path = "/booking" element={<Booking/>}/>
        <Route path ="/rarabooking" element={<RaraBooking/>}/>
        <Route path ="/kalinchowkbooking" element={<KalinchowkBooking/>}/>
        <Route path ="/pokharabooking" element={<PokharaBooking/>}/>


      </Routes>
    </Router>
  );
}

export default App;
