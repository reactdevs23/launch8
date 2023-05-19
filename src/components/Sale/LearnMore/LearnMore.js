import React from "react";
import styles from "./LearnMore.module.css";
import { cornerArrow, learnMore } from "../../../images/image";

const LearnMore = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textContainer}>
        <h5 className={styles.title}>
          Learn More About <br />{" "}
          <span className={styles.gradient}> Lyopay</span>
        </h5>{" "}
        <a href="#/" target="_blank" rel="noreferrer" className={styles.button}>
          <span>Docs</span>
          <img src={cornerArrow} alt="#" className={styles.arrow} />
        </a>
      </div>
      <img src={learnMore} alt="#" className={styles.image} />
    </div>
  );
};

export default LearnMore;
