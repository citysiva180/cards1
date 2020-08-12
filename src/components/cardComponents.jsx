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
    { image: rampic, title: "Ram", text: "Reverse Engineer" },
    { image: satzpic, title: "RockySatz", text: "Data Scientist" },
    { image: dkpic, title: "Dk", text: "Fullstack Developer" },
  ];

  const renderCard = (card, index) => {
    return (
      <div className="card" key={card.index}>
        <img src={card.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.text}</p>
          <a href="www.google.com" className="btn btn-info">
            Hire for Hacking
          </a>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-white bg-dark">
        <a class="navbar-brand" href="#">
          THE ROOMIES
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="www.google.com"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">{cardInfo.map(renderCard)}</div>
    </React.Fragment>
  );
};

export default Cardcomponent;
