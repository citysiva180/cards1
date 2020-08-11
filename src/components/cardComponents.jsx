import React from "react";
import "../components/card.css";
import sivapic from "../images/IMG_5541.jpg";
import rampic from "../images/IMG_4822.jpg";
import dkpic from "../images/IMG_3367.jpg";
import satzpic from "../images/IMG_E3874.jpg";
import "bootstrap/dist/css/bootstrap.css";

const Cardcomponent = () => {
  const cardInfo = [
    { image: sivapic, title: "Siva", text: "Fullstack Developer" },
    { image: rampic, title: "Ram", text: "Cyber security Engineer" },
    { image: satzpic, title: "RockySatz", text: "Python Engineer" },
    { image: dkpic, title: "Dk", text: "Fullstack Developer" },
  ];

  const renderCard = (card, index) => {
    return (
      <div className="card" key={card.index}>
        <img src={card.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.text}</p>
          <a href="www.google.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  };

  return <div className="container">{cardInfo.map(renderCard)}</div>;
};

export default Cardcomponent;
