import App from "../App";
import React from "react";
import SlideShow from "../components/SlideShow";
import pil from "../pilTillbaka.png";

const AvailableCapsule = (props) => {
  return (
    <div className="Component">

      { /* CSSen för denna bild ligger i app.ss */ }
      <img src={pil} id="tillbakaKnapp"/>

      <h1>Hej Johanna</h1>

      <SlideShow></SlideShow>
    </div>
  );
};

export default AvailableCapsule;
