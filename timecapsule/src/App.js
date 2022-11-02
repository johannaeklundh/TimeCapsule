import React from "react";
import "./App.css";
import { useState } from "react";
import Popup from "react-animated-popup";

function App() {
  const [capsules, setCapsules] = useState([]);
  const [visible, setVisible] = useState(false);
  const [tempCap, setTempCap] = useState("");

  const createCapsule = () => {
    if (tempCap === "") return;
    const newCapsule = tempCap; //skapar ny kapsel med namnet test
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
        {capsules.map((capsule, index) => {
          return <p className="capsule"> {capsule} </p>;
        })}
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default App;
