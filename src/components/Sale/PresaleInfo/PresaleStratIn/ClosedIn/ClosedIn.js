import React, { useEffect, useState } from "react";
import styles from "./ClosedIn.module.css";

const ClosedIn = ({ time }) => {
  const endTime = new Date(time).getTime();

  const [currentTime, setcurrentTime] = useState(new Date().getTime());
  const [timeisOver, setTimeIsOver] = useState(false);
  const gap = endTime - currentTime; //177670892

  const seconds = 1000; // in milliseconds
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const day = Math.floor(gap / days);
  const hour = Math.floor((gap % days) / hours);
  const minute = Math.floor((gap % hours) / minutes);
  const second = Math.floor((gap % minutes) / seconds);

  useEffect(() => {
    if (gap <= 0) {
      setTimeIsOver(true);
    } else {
      const timeoutId = setTimeout(
        () => setcurrentTime(new Date().getTime()),
        1000
      );
      return () => clearTimeout(timeoutId);
    }
  }, [currentTime, gap]);

  return (
    <>
      {timeisOver ? (
        <p className={styles.count}>Closed</p>
      ) : (
        <div className={styles.contain}>
          <div className={styles.wrapper}>
            <p className={styles.count}>{`${day < 10 ? "0" + day : day}`}</p>:
            <p className={styles.count}>{`${hour < 10 ? "0" + hour : hour}`}</p>
            :{" "}
            <p className={styles.count}>{`${
              minute < 10 ? "0" + minute : minute
            }`}</p>
            :
            <p className={styles.count}>
              {`${second < 10 ? "0" + second : second}`}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ClosedIn;
