import "./style/login.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axiosInstance from "../axiosConfig"; // Adjust path to axiosConfig

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email format.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await axiosInstance.post("/auth/login", { email, password });
      console.log("Login successful:", response.data);
      alert("Login successful!");
      navigate("/"); // Redirect to homepage after login
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
      console.error("Login error:", err);
    }
  };

  useEffect(() => {
    document.body.style.height = "100vh";
    return () => {
      document.body.style.height = "100vh";
    };
  }, []);

  return (
    <>
      <div className="nav">
        <img src="logo.png" alt="logo" className="logo" />
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/login" className="login">Login</Link>
      </div>

      <div className="login1">
        <h1>Login now!</h1>
        {error && <p className="error">{error}</p>}

        <label htmlFor="email">Email:</label>
        <input 
          type="text" 
          id="email" 
          name="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

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

        <button className="button" type="button" onClick={handleLogin}>Login</button>

        <div className="text">
          <span>Don't have an account? </span>
          <Link to="/register">Create Now</Link>
        </div>
      </div>
    </>
  );
}
