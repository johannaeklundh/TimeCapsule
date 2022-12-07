import { formatDistance } from "date-fns";
import React, { useEffect } from "react";
import { useState } from "react";
import ImageUploading from "react-images-uploading";
import ClosedCapsule from "../closedcapsule.png";

import UploadPhoto from "./UploadPhoto";
import Popup from "react-animated-popup";
import TimeLeft from "./Timeleft";

const Capsule = ({ data }) => {
  const [type, setType] = React.useState("edit");
  const [visible, setVisible] = useState(false);

  switch (type) {
    case "upload":
      return (
        <div>
          <UploadPhoto data={data} onDone={() => setType("edit")}></UploadPhoto>
        </div>
      );
      break;
    case "edit":
      return (
        <div onClick={() => setType("upload")}>
          <h3>{data.name}</h3>
          <img id="closed" src={ClosedCapsule} />
          <p className="timer">Opens in <TimeLeft capsule={data}></TimeLeft></p>
        </div>
      );
      break;

    default:
      <p>Error</p>;
      break;
  }
};

export default Capsule;
