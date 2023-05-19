import React from "react";
import { IoMdClose } from "react-icons/io";
import {
  usdt,
  document,
  waitListed,
  connectedWallet,
  coin,
  usdtPyo,
  lock,
} from "../../../images/image";
import styles from "./PresaleInfo.module.css";
import PresaleStratIn from "./PresaleStratIn/PresaleStratIn";

const PresaleInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={[styles.wrap, styles.currencyContainer].join(" ")}>
        <div className={[styles.box, styles.currencyInfo].join(" ")}>
          <img src={usdt} alt="#" className={styles.icon} />
          <p className={styles.text}>USDT</p>
        </div>{" "}
        <div className={[styles.box, styles.currencyInfo].join(" ")}>
          <img src={lock} alt="#" className={styles.icon} />
          <p className={styles.text}>85.50%</p>
        </div>{" "}
        <div className={[styles.box, styles.currencyInfo].join(" ")}>
          <img src={document} alt="#" className={styles.icon} />
          <p className={styles.text}>85 / 1K</p>
        </div>
      </div>
      <div className={styles.wrap}>
        <div className={[styles.box].join(" ")}>
          <div className={styles.iconAndText}>
            {" "}
            <img src={waitListed} alt="#" className={styles.icon} />
            <p className={styles.text}>Waitlisted</p>
          </div>
          <div className={styles.waitlisted}>
            <p className={styles.isWaitlisted}>False</p>
            <IoMdClose className={styles.isWaitlisted} />
          </div>
        </div>{" "}
      </div>{" "}
      <div className={styles.wrap}>
        <div className={[styles.box].join(" ")}>
          <div className={styles.iconAndText}>
            {" "}
            <img src={connectedWallet} alt="#" className={styles.icon} />
            <p className={styles.text}>Connected Wallet</p>
          </div>
          <button className={styles.connectBtn}>Connect wallet</button>
        </div>{" "}
      </div>
      <div className={[styles.wrap, styles.gridBox].join(" ")}>
        <div className={[styles.box, styles.currencyInfo].join(" ")}>
          <img src={coin} alt="#" className={styles.icon} />
          <p className={styles.text}>150 / 200 USDT</p>
        </div>{" "}
        <div className={[styles.box, styles.currencyInfo].join(" ")}>
          <img src={usdtPyo} alt="#" className={styles.icon} />
          <p className={styles.text}>1 USDT = 34 Pyo</p>
        </div>
      </div>
      <div className={[styles.wrap, styles.gridBox].join(" ")}>
        <div className={[styles.box].join(" ")}>
          <p className={styles.minMax}>Minimum Buy :</p>{" "}
          <p className={styles.minMax}> 50 USDT</p>
        </div>{" "}
        <div className={[styles.box, styles.minMaxBox].join(" ")}>
          <p className={styles.minMax}>Maximum Buy :</p>{" "}
          <p className={styles.minMax}> 200 USDT</p>
        </div>{" "}
      </div>
      <PresaleStratIn />
    </div>
  );
};

export default PresaleInfo;
