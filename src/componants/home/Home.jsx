import React from "react";
import "./Home.css";
import Card from "../card/Card";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/about");
  };
  const goToDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <div className="home">
      <h2>Hello, you have routed to Home page</h2>
      <h1>Welcome to my blog app</h1>
      <button onClick={goToAbout}>Go to About</button>
      <br />
      <button onClick={goToDashboard}>Go to Dashboard</button>
      <div className="home-cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Link to="/about">Go to About</Link>
      <br />
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
}

export default Home;
