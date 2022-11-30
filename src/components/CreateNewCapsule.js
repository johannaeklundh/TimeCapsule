import App from "../App";
import { useState } from "react";
import DatePicker from "react-datepicker";

const CreateNewCapsule = ({ onCapsule, onCanceled, visible }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [textInput, setTextInput] = useState("");

  const createCapsule = () => {
    if (textInput === "") return;
    const days =
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
    if (days <= 0) return;
    const newCapsule = {
      name: textInput,
      startDate: startDate.toISOString(),
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
        <p>Select start date:</p>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <p>Select end date:</p>
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
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
