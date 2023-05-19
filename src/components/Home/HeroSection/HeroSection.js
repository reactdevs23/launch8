import React from "react";
import { heroBg } from "../../../images/image";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={`wrapper ${styles.hero}`}>
      {" "}
      <div className={styles.bg}>
        <img src={heroBg} className={styles.img} alt="#" />
      </div>
      <div className={`contain ${styles.contain}`}>
        <div className={styles.content}>
          <h3>
            Explore the Possibilities <br /> of Top IDOs with{" "}
            <span>Launc8</span>{" "}
          </h3>

          <p>
            Launc8 is a multi network launchpad service provider aimed at
            simplifying the process of onboarding the blockchain.
          </p>
          <button className="source">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
