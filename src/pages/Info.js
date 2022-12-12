import "../App.css";
import AspectImage from "../components/AspectImage";
import start from "../startsida_upper.png";
import startLower from "../startsida_lower.png";
import pil from "../pilTillbaka.png";
import { useNavigate } from "react-router-dom";

const Info = (props) => {
  const navigate = useNavigate();
  return (
    <div className="infoBack">
      <AspectImage className="top" src={start}>
        <img src={pil} id="tillbakaKnapp" onClick={() => navigate("/")} />
        <h1 className="info" id="howH1">
          How the app works:{" "}
        </h1>
        <p className="info">
          <i>
            In this app you can create multiple Time Capsules to save photos in
            a fun way.
          </i>
          <br></br>
          <br></br>
          <b>1.</b> When creating a capsule, choose your own name and which day
          you want to close the capsule.<br></br>
          <br></br> <b>2.</b> Photos can only be uploaded to the capsule between
          the start date and end date. When the time is up, photos can no longer
          be uploaded to the capsule. <br></br>
          <br></br>
          <b>2.</b> Photos can only be uploaded to the capsule between the start
          date and end date. When the time is up, photos can no longer be
          uploaded to the capsule.
        </p>
      </AspectImage>
      <p className="info">
        <br></br>
        <br></br>
        <b>3.</b> Photos that have been added can now be viewed! Enjoy making
        memories that last forever!
      </p>
      <AspectImage className="lower" src={startLower}></AspectImage>
    </div>
  );
};

export default Info;
