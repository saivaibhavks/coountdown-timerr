import { useState } from "react";

const Timer = () => {
  const [time, setTime] = useState({
    hour: 0,
    min: 0,
    sec: 0,
  });

  return (
    <div className="container">
      <input
        type="text"
        value={time.hour.toString()}
        onChange={(e) => clickHandler(e, "hour")}
      />
      <input type="text" value={time.min.toString()} />
      <input type="text" value={time.sec.toString()} />
    </div>
  );
};

export default Timer;
