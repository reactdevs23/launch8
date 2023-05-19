import React from "react";
import styles from "./LockRecords.module.css";

const LockRecords = () => {
  const data = [
    { amount: 100000, releaseDate: "2023.06.14 16:00", to: "" },
    { amount: 100000, releaseDate: "2023.06.14 16:00", to: "" },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h5 className={styles.heading}>LockRecords</h5>
        <p className={[styles.text, styles.viewAll].join(" ")}>View All</p>
      </div>
      <div className={styles.table}>
        <p className={styles.title}>Token Amount</p>
        <p className={styles.title}>Release Date</p>
        <p className={styles.title}></p>
      </div>
      {data.map((el, i) => (
        <div className={styles.table} key={i}>
          <p className={styles.text}>{el.amount}</p>
          <p className={styles.text}>{el.releaseDate}</p>
          <button className={[styles.text, styles.view].join(" ")}>View</button>
        </div>
      ))}
    </div>
  );
};

export default LockRecords;
