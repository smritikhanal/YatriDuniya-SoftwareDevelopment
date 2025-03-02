// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import "./App.css"; // Import the CSS file for styling


// // Import your page components
// import Home from './pages/Home';
// import About from './pages/about'; // Changed 'about' to 'About'
// import Services from "./pages/services";
// import ContactUs from "./pages/contactUs";
// import Package from "./pages/packages";
// import Guide from "./pages/Guide";
// import RaraViewDetials from "./pages/raraviewdetils";
// import MukitnathViewDetials from "./pages/mukitnathviewdetials";
// import KalinchowkViewDetials from "./pages/kalinchowkviewdetils";
// import PokharaViewDetials from "./pages/pokharaviewdetils";
// import Recommendation from "./pages/recommendation";
// import Booking from "./pages/bookingpages/mukitnathbooking";
// import RaraBooking from "./pages/bookingpages/rarabooking";
// import KalinchowkBooking from "./pages/bookingpages/kalinchowkbooking";
// import Login from "./pages/login";
// import ForgotPassword from "./pages/forgotpassword";
// import Register from "./pages/register";
// import Footer from "./pages/footer";
// import PokharaBooking from "./pages/bookingpages/pokharabooking";


 
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <Router>
     
//       {/* Routes to handle navigation */}
//       <Routes>
//         <Route path="/" element={<Home/>} /> {/* Home Page */}
//         <Route path="/about" element={<About/>} /> {/* About Page */}
//         <Route path="/services"element={<Services/>} /> {/* About Page */}
//         <Route path="/contact"element={<ContactUs/>} /> {/* About Page */}
//         <Route path = "/packages" element={<Package/>}/>
//         <Route path = "/Guide" element={<Guide/>}/>
//         <Route path ="/recommendation" element={<Recommendation/>}/>
//         <Route path ="/login" element={<Login/>}/>
//         <Route path ="/forgotpassword" element={<ForgotPassword/>}/>
//         <Route path ="/register" element={<Register/>}/>

//         <Route path="/mukitnathviewdetials" element={<MukitnathViewDetials/>}/>
//         <Route path="/raraviewdetials" element={<RaraViewDetials/>}/>
//         <Route path="/kalinchowkviewdetials" element={<KalinchowkViewDetials/>}/>
//         <Route path="/pokharaviewdetials" element={<PokharaViewDetials/>}/>
//         <Route path = "/booking" element={<Booking/>}/>
//         <Route path ="/rarabooking" element={<RaraBooking/>}/>
//         <Route path ="/kalinchowkbooking" element={<KalinchowkBooking/>}/>
//         <Route path ="/pokharabooking" element={<PokharaBooking/>}/>


//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary components from react-router-dom
import Home from "./PagesF/HomePage"; // Import Home component
// import AboutUs from "./Pages/AboutUs"; // Example: AboutUs component
// import Services from "./Pages/Services"; // Example: Services component
// import Allhotels from "./Pages/Allhotels"; 
// import ContactUs from "./Pages/ContactUs"; // Example: ContactUs component
// import Login from "./Pages/Login"; // Example: Login component
// import ForgotPassword from "./Pages/ForgotPassword";
// import Register from "./Pages/Register";
// import Fishtail from "./Hotels/Fishtail"; 
// import HotelMalla from "./Hotels/HotelMalla";
// import KarmaVilla from './Hotels/KarmaVilla';
// import LakesideStay from './Hotels/LakesideStay';
// import Confirmation from './Pages/Confirmation';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        {/* <Route path="/login" element={<Login />} /> 
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutus" element={<AboutUs />} /> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/all-hotels" element={<Allhotels />} />
        <Route path="/Hotels/Fishtail" element={<Fishtail />} /> 
         <Route path="/Hotels/HotelMalla" element={<HotelMalla />} /> 
         <Route path="/Hotels/KarmaVilla" element={<KarmaVilla />} /> 
         <Route path="/Hotels/LakesideStay" element={<LakesideStay />} /> 
         <Route path="/Pages/Confirmation" element={<Confirmation />} /> 
        <Route path="/contactus" element={<ContactUs />} />  */}
        
      </Routes>
    </Router>
  );
};

export default App;