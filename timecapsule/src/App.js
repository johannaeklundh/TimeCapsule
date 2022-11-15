import React from "react";
import "./App.css";
import { useState } from "react";
import Popup from "react-animated-popup";
import Capsule from "./components/Capsule";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CapsulePlus from "./CapsulePlus.png"; // with import
import OpenedCapsule from "./OpenedCapsule.png";

function App() {
  const [capsules, setCapsules] = useState([]);
  const [visible, setVisible] = useState(false);
  const [tempCap, setTempCap] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const createCapsule = () => {
    if (tempCap === "") return;
    const days =
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
    if (days <= 0) return;
    const newCapsule = {
      name: tempCap,
      day: days,
    }; //skapar ny kapsel med namnet test
    setCapsules([...capsules, newCapsule]); // lägger till den nya kaspeln i en array med alla andra
    setVisible(false);
  };

  const capsuleNameHandler = (event) => {
    console.log(event.target.value);
    setTempCap(event.target.value);
  };

  return (
    <div className="container">
      <Popup visible={visible} onClose={() => setVisible(false)}>
        <div className="popup">
          <form>
            <label htmlFor="Memoryname">Name Memory:</label>
            <input
              type="text"
              id="Memoryname"
              name="Memoryname"
              onChange={capsuleNameHandler}
            ></input>
            <p>Select startdate:</p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <p>Select enddate:</p>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
            <br></br>
          </form>
          <button type="button" onClick={() => setVisible(false)}>
            Cancel
          </button>
          <button type="button" onClick={createCapsule}>
            Done
          </button>
        </div>
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
      <button id="open" type="button" onClick={() => setVisible(true)}>
          <img src={OpenedCapsule} />
        </button>
      </div>
    </div>
  );
}

export default App;
