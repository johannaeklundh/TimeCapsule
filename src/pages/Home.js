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
import Popup from "react-animated-popup";

let capsuleStorage = JSON.parse(window.localStorage.getItem("capsules"));
capsuleStorage = capsuleStorage == null ? [] : capsuleStorage;

function Home() {
  const [capsules, setCapsules] = useState(capsuleStorage);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const [errNameVisible, setErrNameVisible] = useState(false);
  const [errDateVisible, setErrDateVisible] = useState(false);
  const [doneVisible, setDoneVisible] = useState(false);
  const [ErrVisible, setErrVisible] = useState(false);

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
        setErrNameVisible={setErrNameVisible}
        setErrDateVisible={setErrDateVisible}
        setDoneVisible={setDoneVisible}
        setErrVisible={setErrVisible}
        visible={visible}
      />
      <Popup visible={errNameVisible} onClose={() => setErrNameVisible(false)}>
        <p>
          <b>Error!</b> <br></br>Write a name for the memory!
        </p>
        <button
          type="button"
          className="popupbutton"
          onClick={() => setErrNameVisible(false)}
        >
          Cancel
        </button>
      </Popup>
      <Popup visible={errDateVisible} onClose={() => setErrDateVisible(false)}>
        <p>
          <b>Error!</b> <br></br>Select a end date which is after today!
        </p>
        <button
          type="button"
          className="popupbutton"
          onClick={() => setErrDateVisible(false)}
        >
          Cancel
        </button>
      </Popup>
      <Popup visible={doneVisible} onClose={() => setDoneVisible(false)}>
        <p>
          <b>Sucess</b>
          <br></br>Scroll down to see your capsule!
        </p>
        <button
          type="button"
          className="popupbutton"
          onClick={() => setDoneVisible(false)}
        >
          Cancel
        </button>
      </Popup>
      <Popup visible={ErrVisible} onClose={() => setErrVisible(false)}>
        <p>
          <b>Error!</b> <br></br>Write a name for the memory and select a end
          date which is after today!
        </p>
        <button
          type="button"
          className="popupbutton"
          onClick={() => setErrVisible(false)}
        >
          Cancel
        </button>
      </Popup>
      <AspectImage className="top" src={lower}>
        <img id="memorylane" src={MemoryLane} />
        <img id="arrow" src={Arrow} />
      </AspectImage>
      <div
        className="mellanJord"
        style={{ backgroundImage: "url(/testjord2.png)" }}
      >
        <h5>Tap on a capsule to add photos.</h5>
        {capsules.map((capsuledata) => {
          return <Capsule data={capsuledata}></Capsule>;
        })}
      </div>
      <div
        className="bottenJord"
        style={{ backgroundImage: "url(/morkjord2.png)" }}
      >
        <h4>Tap on a capsule to view your saved photos.</h4>

        <div className="button-group">
          <button
            className="open"
            type="button"
            onClick={() => navigate("/capsule")}
            style={{ cursor: "pointer" }}
          >
            <h3>Snattartiden</h3>
            <img src={OpenedCapsule} />
          </button>

          <button
            className="open"
            type="button"
            onClick={() => navigate("/capsule")}
            style={{ cursor: "pointer" }}
          >
            <h3>Sommar 2022</h3>
            <img src={OpenedCapsule} />
          </button>
        </div>

        <button
          className="open"
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
