import React from "react";
import styles from "./PartOfFuture.module.css";
import { partOfFuturePattern, pattern1, pattern2 } from "../../images/image";

const PartOfFuture = () => {
  return (
    <div className={`wrapper ${styles.finalWrapp}`}>
      <img src={pattern1} className={styles.pattern1} alt="" />
      <img src={pattern2} className={styles.pattern2} alt="" />
      <div className="contain">
        <div className={styles.content}>
          <img src={partOfFuturePattern} className={styles.bg} alt="" />
          <h3>
            Be part of the future of <br />
            <span>Launch8</span>
          </h3>
          <p>
            Launc8 is a multi network launchpad service provider aimed at
            simplifying the process of onboarding the blockchain.
          </p>
          <a
            href="/#"
            target="_blank"
            rel="noreferrer"
            className={[styles.button, "source"].join(" ")}
          >
            View docs
          </a>
        </div>
      </div>
    </div>
  );
};

export default PartOfFuture;
