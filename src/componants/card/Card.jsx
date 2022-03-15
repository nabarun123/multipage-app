import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="card">
      <p>This is a simple</p>
      <p>card of blog</p>
      <Link to="/dashboard">
        <p className="text">Read more</p>
      </Link>
    </div>
  );
}

export default Card;
