import { useState } from "react";

const Timer = () => {
  const [time, setTime] = useState({
    hour: 0,
    min: 0,
    sec: 0,
  });

  const clickHandler = (e, field) => {
    console.log("event", e, "field", field);
  };

  return (
    <div className="container">
      <input
        type="text"
        value={time.hour.toString()}
        onChange={(e) => clickHandler(e, "hour")}
      />
      <input
        type="text"
        value={time.min.toString()}
        onChange={(e) => clickHandler(e, "min")}
      />
      <input
        type="text"
        value={time.sec.toString()}
        onChange={(e) => clickHandler(e, "sec")}
      />
    </div>
  );
};

export default Timer;
