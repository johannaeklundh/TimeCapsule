import App from "../App";
import React from "react";
import SlideShow from "../components/SlideShow";
import pil from "../pilTillbaka.png";
import { useNavigate } from "react-router-dom";

const AvailableCapsule = (props) => {
  const navigate = useNavigate();

  return (
    <div className="Component" id="brown">
      {/* CSSen för denna bild ligger i app.ss */}

      <button onClick={() => navigate("/")}>
        {" "}
        <img src={pil} id="tillbakaKnapp" />{" "}
      </button>

      <h1>Snattartiden</h1>

      <SlideShow></SlideShow>
    </div>
  );
};

export default AvailableCapsule;
