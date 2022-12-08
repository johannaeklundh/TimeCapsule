import App from "../App";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Popup from "react-animated-popup";

const CreateNewCapsule = ({
  onCapsule,
  onCanceled,
  setErrNameVisible,
  setErrDateVisible,
  setDoneVisible,
  setErrVisible,
  visible,
}) => {
  const [endDate, setEndDate] = useState(new Date());
  const [textInput, setTextInput] = useState("");

  const createCapsule = () => {
    const current = new Date();
    const days =
      (endDate.getTime() - current.getTime()) / (1000 * 60 * 60 * 24);

    if (textInput === "" && days <= 0) {
      setErrVisible(true);
      return;
    } else if (days <= 0) {
      setErrDateVisible(true);
      return;
    } else if (textInput === "") {
      setErrNameVisible(true);
      return;
    }

    setDoneVisible(true);
    const newCapsule = {
      name: textInput,
      endDate: endDate.toISOString(),
    }; //skapar ny kapsel med namnet testInput
    onCapsule(newCapsule);
  };

  const capsuleNameHandler = (event) => {
    console.log(event.target.value);
    setTextInput(event.target.value);
  };

  return (
    <div
      className="popup"
      style={{ display: visible ? "inline-block" : "none" }}
    >
      <form>
        <label htmlFor="Memoryname">Name Memory:</label>
        <input
          type="text"
          id="Memoryname"
          name="Memoryname"
          onChange={capsuleNameHandler}
        ></input>
        <p className="ptext">Your start date is today </p>
        <p className="ptext">Select end date:</p>
        <DatePicker
          id="Memoryname"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
        />
        <br></br>
      </form>
      <button type="button" class="popupbutton" onClick={onCanceled}>
        Cancel
      </button>
      <button type="button" class="popupbutton" onClick={createCapsule}>
        Done
      </button>
    </div>
  );
};

export default CreateNewCapsule;
