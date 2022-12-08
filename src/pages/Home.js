import React from "react";
import "../App.css";
import { useState } from "react";

import Capsule from "../components/Capsule";
import "react-datepicker/dist/react-datepicker.css";
import CapsulePlus from "../CapsulePlus.png"; // with import
import OpenedCapsule from "../openedCapsule.png"; // tillgång att se bilderna
import CreateNewCapsule from "../components//CreateNewCapsule";
import { useNavigate } from "react-router-dom";
import AspectImage from "../components/AspectImage";

import Logo from "../Logo.png";
import MemoryLane from "../memorylane.png";
import Arrow from "../arrow.png";
import lower from "../startsida_lower.png";
import upper from "../startsida_upper.png";
import howto from "../HowTo.png";

let capsuleStorage = JSON.parse(window.localStorage.getItem("capsules"));
capsuleStorage = capsuleStorage == null ? [] : capsuleStorage;

function Home() {
  const [capsules, setCapsules] = useState(capsuleStorage);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const addCapsule = (newCapsule) => {
    console.log(newCapsule);
    const newState = [newCapsule, ...capsules];
    window.localStorage.setItem("capsules", JSON.stringify(newState));
    setCapsules(newState); // lägger till den nya kaspeln i en array med alla andra
    setVisible(false);
  };

  return (
    <div className="container">
      <img id="how" src={howto} onClick={() => navigate("/info")} />

      <AspectImage className="top" src={upper}>
        <img id="logo" src={Logo} />
        <button id="plus" type="button" onClick={() => setVisible(true)}>
          <img src={CapsulePlus} />
        </button>
      </AspectImage>

      <CreateNewCapsule
        onCapsule={addCapsule}
        onCanceled={() => setVisible(false)}
        visible={visible}
      />

      <AspectImage className="top" src={lower}>
        <img id="memorylane" src={MemoryLane} />
        <img id="arrow" src={Arrow} />
      </AspectImage>

      <div
        className="mellanJord"
        style={{ backgroundImage: "url(/testjord2.png)" }}
      >
        <h5>Tap on a capsule to add photos.</h5>
        {capsules.map((capsuledata, index) => {
          return <Capsule data={capsuledata}></Capsule>;
        })}
      </div>

      <div
        className="bottenJord"
        style={{ backgroundImage: "url(/morkjord2.png)" }}
      >
        <h4>Tap on a capsule to view your saved photos.</h4>

        <div class="button-group">
          <button
            id="open"
            type="button"
            onClick={() => navigate("/capsule")}
            style={{ cursor: "pointer" }}
          >
            <h3>Snattartiden</h3>
            <img src={OpenedCapsule} />
          </button>

          <button
            id="open"
            type="button"
            onClick={() => navigate("/capsule")}
            style={{ cursor: "pointer" }}
          >
            <h3>Sommar 2022</h3>
            <img src={OpenedCapsule} />
          </button>
        </div>

        <button
          id="open"
          type="button"
          onClick={() => navigate("/capsule")}
          style={{ cursor: "pointer" }}
        >
          <h3>Vinter 2021</h3>
          <img src={OpenedCapsule} />
        </button>
      </div>
    </div>
  );
}

export default Home;
