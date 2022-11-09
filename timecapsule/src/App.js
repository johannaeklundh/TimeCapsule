import React from "react";
import "./App.css";
import { useState } from "react";
import Popup from "react-animated-popup";
import Capsule from "./components/Capsule";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [capsules, setCapsules] = useState([]);
  const [visible, setVisible] = useState(false);
  const [tempCap, setTempCap] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const createCapsule = () => {
    if (tempCap === "") return;
    const newCapsule = {
      name: tempCap,
      openDate: new Date(),
      closeDate: new Date(),
    }; //skapar ny kapsel med namnet test
    setCapsules([...capsules, newCapsule]); // lägger till den nya kaspeln i en array med alla andra
    setVisible(false);
  };

  const capsuleNameHandler = (event) => {
    console.log(event.target.value);
    setTempCap(event.target.value);
  };

  return (
    <div>
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
        <h1> TIME CAPSULE </h1>
        <button type="button" onClick={() => setVisible(true)}>
          Create new capsule
        </button>
      </div>
      <div className="middle">
        {capsules.map((capsuledata, index) => {
          return <Capsule data={capsuledata}></Capsule>;
        })}
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default App;
