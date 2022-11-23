import React from "react";
import "../App.css";
import { useState } from "react";

import Capsule from "../components/Capsule";
import "react-datepicker/dist/react-datepicker.css";
import CapsulePlus from "../CapsulePlus.png"; // with import
import OpenedCapsule from "../openedCapsule.png";
import CreateNewCapsule from "../components//CreateNewCapsule";
import Popup from "react-animated-popup";
import ClosedCapsule from "./AvailableCapsule";
import { useNavigate } from "react-router-dom";

function Home() {
  const [capsules, setCapsules] = useState([]);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const addCapsule = (newCapsule) => {
    console.log(newCapsule);
    setCapsules([...capsules, newCapsule]); // lägger till den nya kaspeln i en array med alla andra
    setVisible(false);
  };

  return (
    <div className="container">
      <Popup visible={visible} onClose={() => setVisible(false)}>
        <CreateNewCapsule
          onCapsule={addCapsule}
          onCanceled={() => setVisible(false)}
        />
      </Popup>
      <div className="top">
        <button id="plus" type="button" onClick={() => setVisible(true)}>
          <img src={CapsulePlus} />
        </button>
      </div>
      <div className="middle">
        {capsules.map((capsuledata, index) => {
          return <Capsule data={capsuledata}></Capsule>;
        })}
      </div>
      <div className="bottom">
        <button
          id="open"
          type="button"
          onClick={() => navigate("/capsule")}
          style={{ cursor: "pointer" }}
        >
          <img src={OpenedCapsule} />
        </button>
      </div>
    </div>
  );
}

export default Home;
