import React, { useEffect, useState } from "react";
import FlipContainer from "./FlipContainer";

const FlipClock = () => {
  const launchDate = new Date(new Date().setDate(new Date().getDate() + 8));

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    daysShuffle: true,
    hoursShuffle: true,
    minutesShuffle: true,
    secondsShuffle: true,
  });

  useEffect(() => {
    const timerID = setInterval(() => {
      const now = new Date();
      const diff = Math.max(0, launchDate - now); // difference in ms

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime((prevTime) => ({
        days,
        hours,
        minutes,
        seconds,
        daysShuffle:
          days !== prevTime.days ? !prevTime.daysShuffle : prevTime.daysShuffle,
        hoursShuffle:
          hours !== prevTime.hours
            ? !prevTime.hoursShuffle
            : prevTime.hoursShuffle,
        minutesShuffle:
          minutes !== prevTime.minutes
            ? !prevTime.minutesShuffle
            : prevTime.minutesShuffle,
        secondsShuffle:
          seconds !== prevTime.seconds
            ? !prevTime.secondsShuffle
            : prevTime.secondsShuffle,
      }));
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  const {
    days,
    hours,
    minutes,
    seconds,
    daysShuffle,
    hoursShuffle,
    minutesShuffle,
    secondsShuffle,
  } = time;

  return (
    <div className="flip">
      <FlipContainer unit="days" digit={days} shuffle={daysShuffle} />
      <FlipContainer unit="hours" digit={hours} shuffle={hoursShuffle} />
      <FlipContainer unit="minutes" digit={minutes} shuffle={minutesShuffle} />
      <FlipContainer unit="seconds" digit={seconds} shuffle={secondsShuffle} />
    </div>
  );
};

export default FlipClock;
