import React from "react";
import styles from "./Mint.module.css";
import MintDetails from "../../components/Mint/MintDetails/MintDetails";
import MintInfo from "../../components/Mint/MintInfo/MintInfo";
import ApyStaking from "../../components/Home/ApyStaking/ApyStaking";

const Mint = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <MintDetails />
        <MintInfo />
      </div>
      <ApyStaking />
    </>
  );
};

export default Mint;
