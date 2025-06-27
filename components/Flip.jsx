import React, { useEffect, useMemo, useState } from "react";
import FlipContainer from "./FlipContainer";

const FlipClock = () => {
const launchDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 8);
    return date;
  }, []);
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
    const updateCountdown = () => {
      const now = new Date();
      const diff = Math.max(0, launchDate - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime((prev) => ({
        days,
        hours,
        minutes,
        seconds,
        daysShuffle: days !== prev.days ? !prev.daysShuffle : prev.daysShuffle,
        hoursShuffle: hours !== prev.hours ? !prev.hoursShuffle : prev.hoursShuffle,
        minutesShuffle: minutes !== prev.minutes ? !prev.minutesShuffle : prev.minutesShuffle,
        secondsShuffle: seconds !== prev.seconds ? !prev.secondsShuffle : prev.secondsShuffle,
      }));
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

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
