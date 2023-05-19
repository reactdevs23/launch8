import React, { useState } from "react";
import styles from "./PresaleStratIn.module.css";
import ProgressBar from "../../../Home/FindProject/SingleProject/ProgressBar/ProgressBar";
import ClosedIn from "./ClosedIn/ClosedIn";

const PresaleStratIn = () => {
  const [amount, setAmount] = useState("0.00");
  return (
    <div className={[styles.wrapper, styles.presaleStartIn].join(" ")}>
      <h4 className={styles.presaleStart}>Presale Start in</h4>
      <ClosedIn time="Jun 01 2023 05:30:01" />
      <div className={styles.progressContainer}>
        <p className={styles.progressText}>Progress ({50}%)</p>
        <ProgressBar progress={50} />
        <p className={[styles.price, styles.progressText].join(" ")}>
          <span>{84000} usdt</span>
          <span>{100000} usdt</span>
        </p>
      </div>{" "}
      <div className={styles.amountContainer}>
        <p className={styles.amountText}>Amount</p>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className={styles.input}
          />
          <p className={styles.max}>MAX</p>
        </div>
      </div>
      <button className={styles.connectButton}>Connect Wallet</button>
    </div>
  );
};

export default PresaleStratIn;
