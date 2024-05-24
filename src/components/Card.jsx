import React from "react";
import "../Styles/Card.css";
import logo from '../assets/logo.png'

const Card = () => {
  return (
    <div>
      <div className="card text-white">
        <h2>About Ethereum</h2>
        <h2><img src={logo}/></h2>
      </div>
    </div>
  );
};

export default Card;
