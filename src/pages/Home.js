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

import Startsida2 from '../Startsida2.png';
import jord from '../testjord2.png';
import morkJord from '../morkjord2.png';
import AspectImage from "../components/AspectImage"



function Home() {
  const [capsules, setCapsules] = useState([]);
  const [visible, setVisible] = useState(false);

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
      <AspectImage className="top" src={Startsida2}>
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
        <button id="open" type="button" onClick={() => setVisible(true)}>
          <img src={OpenedCapsule} />
        </button>
      </AspectImage>
    </div>
  );
}

export default Home;
