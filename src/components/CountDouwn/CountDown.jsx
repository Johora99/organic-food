"use client";

import { useState, useEffect } from "react";

export default function CountDown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("2025-05-20T00:00:00").getTime(); // Set your target date

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div style={{ color: "white", display: "flex", justifyContent: "space-around", width: "300px" }} className="my-5">
      <div>
        <p className="text-xl tracking-widest text-center">{time.days} :</p>
        <span className="text-xs tracking-widest">DAYS</span>
      </div>
      <div>
        <p className="text-xl tracking-widest text-center">{time.hours} :</p>
        <span className="text-xs tracking-widest">HOURS</span>
      </div>
      <div>
        <p className="text-xl tracking-widest text-center"> {time.minutes} :</p>
        <span className="text-xs tracking-widest">MINS</span>
      </div>
      <div>
        <p className="text-xl tracking-widest text-center">{time.seconds} :</p>
        <span className="text-xs tracking-widest">SECS</span>
      </div>
    </div>
  ); 
}