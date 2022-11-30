import React from "react";
import "../App.css";
import { useState } from "react";

import Capsule from "../components/Capsule";
import "react-datepicker/dist/react-datepicker.css";
import CapsulePlus from "../CapsulePlus.png"; // with import
import OpenedCapsule from "../openedCapsule.png"; // tillgång att se bilderna
import CreateNewCapsule from "../components//CreateNewCapsule";
import Popup from "react-animated-popup";
import ClosedCapsule from "./AvailableCapsule";
import { useNavigate } from "react-router-dom";

import Startsida3 from "../Startsida3.png";
import jord from "../testjord2.png";
import morkJord from "../morkjord2.png";
import AspectImage from "../components/AspectImage";
import Logo from "../Logo.png";
import MemoryLane from "../memorylane.png";
import Arrow from "../arrow.png";

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
      <AspectImage className="top" src={Startsida3}>
        <img id="logo" src={Logo} />
        <button id="plus" type="button" onClick={() => setVisible(true)}>
          <img src={CapsulePlus} />
        </button>
        <img id="memorylane" src={MemoryLane} />
        <img id="arrow" src={Arrow} />
      </AspectImage>

      <CreateNewCapsule
        onCapsule={addCapsule}
        onCanceled={() => setVisible(false)}
        visible={visible}
      />

      <AspectImage className="top" src={Startsida3}>
        <button id="plus" type="button" onClick={() => setVisible(true)}>
          <img src={CapsulePlus} />
        </button>
      </AspectImage>

      <AspectImage className="middle" src={jord}>
        {capsules.map((capsuledata, index) => {
          return <Capsule data={capsuledata}></Capsule>;
        })}
      </AspectImage>

      <AspectImage className="bottom" src={morkJord}>
        <h3>Snattartiden</h3>
        <button
          id="open"
          type="button"
          onClick={() => navigate("/capsule")}
          style={{ cursor: "pointer" }}
        >
          <img src={OpenedCapsule} />
        </button>
        <h3>Sommar 2022</h3>
        <button
          id="open"
          type="button"
          onClick={() => navigate("/capsule")}
          style={{ cursor: "pointer" }}
        >
          <img src={OpenedCapsule} />
        </button>
        <h3>Vinter 2021</h3>
        <button
          id="open"
          type="button"
          onClick={() => navigate("/capsule")}
          style={{ cursor: "pointer" }}
        >
          <img src={OpenedCapsule} />
        </button>
      </AspectImage>
    </div>
  );
}

export default Home;
