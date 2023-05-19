import React from "react";
import { TbWorld } from "react-icons/tb";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineShieldCheck } from "react-icons/hi";
import ProgressBar from "./ProgressBar/ProgressBar";
import styles from "./SingleProject.module.css";
import { successFull, upcoming } from "../../../../images/image";

import ClosedIn from "./ClosedIn/ClosedIn";
import { Link } from "react-router-dom";

const Card = ({
  status,
  feature,
  image,
  icon,
  wlSpot,
  title,
  info,
  web,
  twitter,
  linkedin,
  softcap,
  hardcap,
  progress,
  liquidity,
  startPrice,
  endPrice,
  closedIn,
}) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="#" className={styles.banner} />

      <div className={styles.projectInfo}>
        <div className={styles.header}>
          <img src={icon} alt="#" className={styles.icon} />
          <div className={styles.featuresAndStatus}>
            {" "}
            <div className={styles.features}>
              {feature.map((el, i) => (
                <p className={styles.feature} key={i}>
                  <HiOutlineShieldCheck className={styles.checkmark} />
                  <span> {el}</span>
                </p>
              ))}
            </div>
            {status.toLowerCase() === "live" && (
              <p className={[styles.status, styles.live].join(" ")}>
                <span className={styles.circle}></span>

                <span className={styles.statusText}>Sale is Live</span>
              </p>
            )}
            {status.toLowerCase() === "successful" && (
              <p className={[styles.status, styles.succesFull].join(" ")}>
                <img src={successFull} alt="#" className={styles.statusImg} />

                <span className={styles.statusText}>Successful</span>
              </p>
            )}{" "}
            {status.toLowerCase() === "upcoming" && (
              <p className={[styles.status, styles.upcoming].join(" ")}>
                <img src={upcoming} alt="#" className={styles.statusImg} />

                <span className={styles.statusText}>Upcoming</span>
              </p>
            )}
          </div>
        </div>

        <div className={styles.heading}>
          <p className={styles.title}>{title}</p>
          <div className={styles.socialContaner}>
            <a
              href={web}
              target="_blank"
              rel="noreferrer"
              className={styles.iconContainer}
            >
              <TbWorld className={styles.socialIcon} />
            </a>
            <a
              href={twitter}
              target="_blank"
              rel="noreferrer"
              className={styles.iconContainer}
            >
              <FaTwitter className={styles.socialIcon} />
            </a>{" "}
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className={styles.iconContainer}
            >
              <FaLinkedinIn className={styles.socialIcon} />
            </a>
          </div>
        </div>
        <p className={styles.info}>{info}</p>
        <div className={styles.softCaps}>
          <p className={styles.softCap}>
            <span className={styles.text}>Softcap :</span>{" "}
            <span className={`${styles.softCapValue} ${styles.text}`}>
              {softcap} Usdt
            </span>{" "}
          </p>{" "}
          <p className={styles.softCap}>
            <span className={styles.text}>Hardcap :</span>{" "}
            <span className={`${styles.softCapValue} ${styles.text}`}>
              {hardcap} usdt
            </span>{" "}
          </p>{" "}
          <p className={styles.softCap}>
            <span className={styles.text}>Liquidity :</span>
            {"  "}
            <span className={`${styles.softCapValue} ${styles.text}`}>
              {liquidity}%
            </span>{" "}
          </p>{" "}
          <p className={styles.softCap}>
            <span className={styles.text}>WL :</span>{" "}
            <span className={`${styles.softCapValue} ${styles.text}`}>
              {wlSpot} Spots
            </span>{" "}
          </p>{" "}
        </div>
        <div className={styles.progressContainer}>
          <p className={styles.progressText}>Progress ({progress}%)</p>
          <ProgressBar progress={progress} />
          <p className={[styles.price, styles.progressText].join(" ")}>
            <span>{startPrice} usdt</span>
            <span>{endPrice} usdt</span>
          </p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.closedIn}>
            <ClosedIn time={closedIn} />
          </div>
          <Link to="/details" className={styles.seeDetails}>
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
