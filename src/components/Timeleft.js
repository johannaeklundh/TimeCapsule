import { formatDistance } from "date-fns";
import useCountDown from "../hooks/useCountDown";

const TimeLeft = ({ capsule }) => {
  const timeDifference =
    new Date().getTime() - new Date(capsule.endDate).getTime();
  const timeLeft = useCountDown(-timeDifference);
  return <span>{formatDistance(new Date(0), new Date(timeLeft))}</span>;
};
export default TimeLeft;
