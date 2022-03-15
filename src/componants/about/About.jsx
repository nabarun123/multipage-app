import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <div className="about">
      <h1>Hello you have been routed to About page</h1>
      <h1>About us</h1>

      <button onClick={navigateToHome}>Go to Home</button>
      <br />
      <button onClick={navigateToDashboard}>Go to Dashboard</button>
      <br />
      <Link style={{ textDecoration: "none", color: "blue" }} to="/">
        Go to Home
      </Link>
      <br />
      <Link style={{ textDecoration: "none", color: "blue" }} to="/dashboard">
        Go to Dashboard
      </Link>
    </div>
  );
}

export default About;
