import React from "react";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToAbout = () => {
    navigate("/about");
  };

  return (
    <div className="dashboard">
      <h1>Hello, you are routed to the Dashboard of our blog</h1>
      <h2>Welcome to Dasboard</h2>
      <button onClick={navigateToHome}>Go to Home</button>
      <br />
      <button onClick={navigateToAbout}>Go to About</button>
      <div className="dashboard-card">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Link style={{ textDecoration: "none", color: "blue" }} to="/">
        Go to Home
      </Link>
      <br />
      <Link style={{ textDecoration: "none", color: "blue" }} to="/about">
        Go to About
      </Link>
    </div>
  );
}

export default Dashboard;
