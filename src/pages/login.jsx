


import "./style/login.css";
import { Link} from "react-router-dom";
import React, { useEffect,useState }from "react";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Reset error message
    setError("");

    // Simple Validation
    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email format.");
      return;
    }

    // Dummy password validation (Example: Minimum 6 characters)
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Successful Login (Replace this with API request)
    alert("Login successful!");
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", remember);
  };

   useEffect(() => {
          document.body.style.height = '100vh';
          // Reset body height when the component unmounts
          return () => {
            document.body.style.height = '100vh';
          };
        }, []);
    

  return (
    <>
     <div className="nav">
            <img src="logo.png" alt="logo" className="logo" />
            <Link to="/">Home</Link> {/* Link to Home page */}
            <Link to="/about">About Us</Link> {/* Link to About page */}
            <Link to="/services">Services</Link> {/* Link to Services page */}
            <Link to="/contact">Contact Us</Link> {/* Link to Contact page */}
            <Link to="/login" className="login">Login</Link> {/* Link to Login page */}
          </div>
    
    <div className="login1">
      <h1>Login now!</h1>

      {error && <p className="error">{error}</p>} {/* Show error message */}

      <label htmlFor="email">Email:</label>
      <input 
        type="text" 
        id="email" 
        name="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input 
        type="password" 
        id="password" 
        name="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="checkbox">
        <label htmlFor="Remember">
          <input
            type="checkbox"
            id="Remember"
            name="Remember"
            checked={remember}
            onChange={() => setRemember(!remember)}
          />
          Remember me
        </label>

        <p>Forget password?</p>
      </div>

      <button type="button" onClick={handleLogin}>Login</button>

      <div className="text">
        <span>Don't have an account? </span>
        <a href="Register.html">Create Now</a>
      </div>
    </div>
    </>
  );
}
