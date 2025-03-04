import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Import icons
import { Link } from "react-router-dom";
import axiosInstance from "../axiosConfig"; // Adjust path to axiosConfig
import "./style/Register.css";

export default function Register() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // Success message
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = async () => {
    setError("");
    setSuccess(""); // Reset messages

    if (!name || !contact || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    const contactPattern = /^[0-9]{10}$/;
    if (!contactPattern.test(contact)) {
      setError("Invalid contact number. It should be 10 digits.");
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

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axiosInstance.post("/auth/register", {
        name,
        contact,
        email,
        password,
      });
      setSuccess("Account created successfully!");
      console.log("Registration successful:", response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
      console.error("Registration error:", err);
    }
  };

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
      <div className="register">
        <h1>Create Your Account Now!</h1>

        {error && <p className="error">{error}</p>} {/* Show error message */}
        {success && <p className="success">{success}</p>} {/* Show success message */}

        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="contact">Contact Number</label>
        <input type="text" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Password</label>
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" className="eye-button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <label htmlFor="confirmPassword">Confirm Password</label>
        <div className="password-container">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="button" className="eye-button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button className="button" onClick={handleRegister}>CREATE ACCOUNT</button>

        <span className="registerspan">Already have an account?</span>
        <a href="/login">Log in</a>
      </div>
    </>
  );
}
