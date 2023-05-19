import React from "react";
import styles from "./MintDetails.module.css";

const MintDetails = () => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>
        Launc8 Ecosystem Token <span className={styles.gradient}>Minter</span>
      </h4>
      <p className={styles.text}>
        Launc8 Deployer Is A Software Tool That Allows Users To Create And
        Deploy Their Own ERC-20 Tokens On Any EVM Blockchain Quickly And
        Securely. ERC-20 Is A Standard Protocol For Creating Tokens On EVM
        Networks, And Launc8 Deployer Ensures That The Tokens It Mints Are Fully
        Compliant With This Standard, Making Them Safe And Interoperable With
        Other Tokens And Platforms That Support ERC-20. With Launc8 Deployer,
        Users Can Customize Their Token's Name, Symbol, Total Supply, And Other
        Properties, And Have It Ready For Use In Just A Few Steps. This Makes It
        A Useful Tool For Anyone Who Wants To Create Their Own Cryptocurrency Or
        Run An IDO.
      </p>
      <ul className={styles.list}>
        <li className={styles.text}> No Minting Function </li>
        <li className={styles.text}> No Owner Or Admin </li>
        <li className={styles.text}> Functions Fully ERC20 Compliant </li>
        <li className={styles.text}> Fully Decentralised </li>
      </ul>
      <button className={styles.connectButton}>Connect Wallet</button>
    </div>
  );
};

export default MintDetails;
