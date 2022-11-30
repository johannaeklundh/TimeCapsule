import { useEffect, useState } from "react";

const useCountDown = (initialTime = 10000) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setTimeout(() => {
      let newTime = timeLeft - 1000;
      if (newTime < 1) {
        newTime = 0;
      }
      setTimeLeft(() => newTime);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return timeLeft;
};

export default useCountDown;
