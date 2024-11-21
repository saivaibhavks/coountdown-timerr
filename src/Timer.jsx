import { useState } from "react";
import "./Timer.css";

const Timer = () => {
  const [time, setTime] = useState({
    hour: 23,
    min: 59,
    sec: 59,
  });

  const clickHandler = (e, field) => {
    console.log("event", e.target.value, "field", field);
    setTime((prev) => {
      let temp = { ...prev };
      temp[field] = e.target.value;
      return temp;
    });
  };

  return (
    <div className="container">
      <h1>Count down</h1>
      <div className="timer" style={{ display: "flex" }}>
        <input type="text" value={time.hour} />
        <input type="text" value={time.min} />
        <input type="text" value={time.sec} />
      </div>
      <div className="btn-actions">
        <button>Start</button>
        <button>Stop</button>
      </div>
    </div>
  );
};

export default Timer;
