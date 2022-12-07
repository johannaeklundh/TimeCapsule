import App from "../App";
import React from "react";
import SlideShow from "../components/SlideShow";
import pil from "../tillbakaknapp.png";
import { useNavigate } from "react-router-dom";

const AvailableCapsule = (props) => {
  const navigate = useNavigate();

  return (
    <div className="component" id="brown">
      {/* CSSen för denna bild ligger i app.ss */}
        <img src={pil} id="tillbakaKnapp" onClick={() => navigate("/")}/>

      <h1>Snattartiden</h1>

      <SlideShow></SlideShow>
    </div>
  );
};

export default AvailableCapsule;
