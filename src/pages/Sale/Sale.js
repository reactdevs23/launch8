import React from "react";
import Details from "../../components/Sale/Details/Details";
import TokenMetrics from "../../components/Sale/TokenMetrics/TokenMetrics";
import PresaleInfo from "../../components/Sale/PresaleInfo/PresaleInfo";
import LearnMore from "../../components/Sale/LearnMore/LearnMore";
import LockRecords from "../../components/Sale/LockRecords/LockRecords";
import styles from "./Sale.module.css";
import { trending } from "../../images/image";

const Sale = () => {
  const trendingItems = [
    "lyopay",
    "lyopay",
    "lyopay",
    "lyopay",
    "lyopay",
    "lyopay",
    "lyopay",
    "lyopay",
    "lyopay",
    "lyopay",
  ];
  return (
    <section className={styles.myWrapper}>
      <div className="contain">
        <div className={styles.header}>
          <div className={styles.trending}>
            <img src={trending} alt="#" className={styles.icon} />
            <p className={styles.title}>Trending</p>
          </div>
          <div className={styles.trendingItems}>
            {trendingItems.map((el, i) => (
              <div className={styles.trendingItem} key={i}>
                <div className={styles.hexagon}>
                  <p className={styles.text}>{i + 1}</p>{" "}
                </div>
                <p className={styles.text}>{el}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.box}>
            <Details /> <LockRecords />
          </div>

          <div className={styles.box}>
            <LearnMore />
            <PresaleInfo />
            <TokenMetrics />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sale;
