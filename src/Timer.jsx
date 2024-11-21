import { useEffect, useState, useRef } from "react";
import "./Timer.css";

const Timer = () => {
  const [time, setTime] = useState({
    hour: 23,
    min: 59,
    sec: 59,
  });

  const [isRunning, setIsRunning] = useState(false);
  const timeInterval = useRef(null);

  useEffect(() => {
    if (isRunning) {
      setInterval(() => {
        setTime(
          (prev) => {
            let temp = { ...prev };

            temp.sec--;
            setTime(temp);
          },
          [1000]
        );
      });
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
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button>Stop</button>
      </div>
    </div>
  );
};

export default Timer;
