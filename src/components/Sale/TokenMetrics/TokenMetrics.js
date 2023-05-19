import React from "react";
import styles from "./TokenMetrics.module.css";
import MyDonutChart from "./Chart/Chart";

const TokenMetrics = () => {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Token Metrics</h3>
      <p className={styles.tagline}>Diluted Market Cap: $875,253</p>
      <MyDonutChart total="100B" />
    </section>
  );
};

export default TokenMetrics;
