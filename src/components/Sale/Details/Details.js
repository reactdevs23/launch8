import React, { useState } from "react";

import { icon1, project, successFull, upcoming } from "../../../images/image";

import { TbWorld } from "react-icons/tb";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineShieldCheck } from "react-icons/hi";
import styles from "./Details.module.css";

const Details = ({
  status = "live",
  feature = ["Kyc+", "audit"],
  image = project,
  icon = icon1,
  title = "About Lyopay",
  info = "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
  web = "#",
  twitter = "#",
  linkedin = "#",
}) => {
  const [showAll, setShowAll] = useState(false);
  function toggleShowAll() {
    setShowAll(!showAll);
  }

  const data = [
    {
      key: "Presale Address",
      value: "0xbf3b9256df079bc5c0055354b359fb136007ccfd",
      gradient: true,
    },
    {
      key: "Token Name",
      value: "Lyopay",
    },
    {
      key: "Token Symbol",
      value: "Lyopay",
    },
    {
      key: "Total Supply",
      value: 100000000,
    },
    {
      key: "Token Address",
      value: "0xbf3b9256df079bc5c0055354b359fb136007ccfd",
      gradient: true,
    },
    {
      key: "Token For Presale",
      value: 80000000,
    },
    {
      key: "Token For Liquidity",
      value: 25000000,
    },
    {
      key: "Liquidity Percent",
      value: "46%",
    },
    {
      key: "Softcap",
      value: "50000 USDT",
    },
    {
      key: "Hardcap",
      value: "100000 USDT",
    },
    {
      key: "Current Price",
      value: "0.001 USDT",
    },
    {
      key: "Listing On",
      value: "Uniswap",
      gradient: true,
    },
    {
      key: "Presale Start Time (UTC)",
      value: "2023-05-19 15:00",
    },
    {
      key: "Presale End Time (UTC)",
      value: "2023-05-22 14:00",
    },
    {
      key: "Liquidity Unlocked Time (UTC)",
      value: "2023-06-14 22:00",
    },
  ];
  return (
    <section>
      {" "}
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

          <p className={styles.info}>
            {showAll ? info : info.slice(0, 99)}
            <span
              className={[styles.info, styles.showMore].join(" ")}
              onClick={toggleShowAll}
            >
              {info.length > 99 &&
                (showAll ? " ... See Less" : " ... See More")}
            </span>
          </p>
          <div className={styles.details}>
            <h6 className={styles.detailsTitle}>Details</h6>
            {data.map((el, i) => (
              <div className={styles.keyAndValue} key={i}>
                <p className={styles.key}>{el.key}</p>
                <p
                  className={[
                    styles.value,
                    el.gradient && styles.gradient,
                  ].join(" ")}
                >
                  {el.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
