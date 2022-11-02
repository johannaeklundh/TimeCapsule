import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [capsules, setCapsules] = useState([]);
  const createCapsule = () => {
    const newCapsule = "test"; //skapar ny kapsel med namnet test
    setCapsules([...capsules, newCapsule]); // lägger till den nya kaspeln i en array med alla andra
  };

  return (
    <div>
      <h1> TIME CAPSULE </h1>
      <button type="button" onClick={createCapsule}>
        Create new capsule
      </button>
      {capsules.map((capsule, index) => {
        return <p className="capsule"> {capsule} </p>;
      })}
    </div>
  );
}

export default App;
