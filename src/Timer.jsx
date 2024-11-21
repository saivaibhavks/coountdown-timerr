import { useEffect, useState, useRef } from "react";
import "./Timer.css";

const Timer = () => {
  const [time, setTime] = useState({
    hour: 23,
    min: 1,
    sec: 2,
  });

  const [isRunning, setIsRunning] = useState(false);
  const timeInterval = useRef(null);

  useEffect(() => {
    if (isRunning) {
      setInterval(() => {
        setTime((prev) => {
          let temp = { ...prev };

          if (temp.min === 0 && temp.sec === 0 && temp.hour === 0) {
            setIsRunning(false);
            let obj = { hour: 0, min: 0, sec: 0 };
            return obj;
          }
          if (temp.sec <= 1) {
            if (temp.min <= 1) {
              temp.hour--;
              temp.min = 59;
            } else {
              temp.min--;
              temp.sec = 59;
            }
          } else {
            temp.sec--;
          }
          console.log("temp", temp);
          return temp;
        });
      }, 1000);
    }
  }, [isRunning]);
  return (
    <div className="container">
      <h1>Count down</h1>
      <div className="timer" style={{ display: "flex" }}>
        <input type="text" value={time.hour.toString()} />
        <input type="text" value={time.min.toString()} />
        <input type="text" value={time.sec.toString()} />
      </div>
      <div
        className="btn-actions"
        style={{ display: "flex", gap: "10px", margin: "20px" }}
      >
        <button onClick={() => setIsRunning(true)}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button>Stop</button>
      </div>
    </div>
  );
};

export default Timer;
