import { useState } from "react";

const Timer = () => {
  const [time, setTime] = useState({
    hour: 0,
    min: 0,
    sec: 0,
  });

  return (
    <div className="container">
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </div>
  );
};

export default Timer;
