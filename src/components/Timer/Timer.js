import React, { useState, useEffect } from 'react';
import './Timer.css';

export default function Timer(startTime) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const time =
        new Date(startTime.startTime).getTime() - new Date().getTime();

      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  return (
    <div className="timer">
      <div className="time-left">
        <span className="time">{days}</span>
        <span className="time-name">days</span>
      </div>
      <div className="time-left">
        <span className="time">{hours}</span>
        <span className="time-name">hours</span>
      </div>
      <div className="time-left">
        <span className="time">{minutes}</span>
        <span className="time-name">minutes</span>
      </div>
      <div className="time-left">
        <span className="time">{seconds}</span>
        <span className="time-name">seconds</span>
      </div>
    </div>
  );
}
