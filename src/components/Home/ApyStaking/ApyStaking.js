import React from "react";
import styles from "./ApyStaking.module.css";
import { cornerArrow, stakingApy } from "../../../images/image";

const ApyStaking = () => {
  return (
    <section className={`wrapper ${styles.apyStaking}`}>
      <div className={` ${styles.contain}`}>
        <p className={styles.quote}> “</p>

        <div className={styles.textContainer}>
          <h3 className={styles.title}>
            Earn Up To 25% APY Staking <span>Launc8 Token</span>
          </h3>
          <p className={styles.text}>
            Stake Your Launc8 Tokens And Earn Up To 25% APY. And Access To
            Incubator Projects On Launc8
          </p>
          <div className={styles.buttonContainer}>
            <button className={[styles.button, styles.activeButton].join(" ")}>
              Stake
            </button>
            <a
              href="#/"
              target="_blank"
              rel="noreferrer"
              className={styles.button}
            >
              <span>Docs</span>
              <img src={cornerArrow} alt="#" className={styles.arrow} />
            </a>
          </div>
        </div>
        <img src={stakingApy} alt="#" className={styles.apyStakingImg} />
      </div>
    </section>
  );
};

export default ApyStaking;
