import React, { useState } from "react";
import styles from "./MintInfo.module.css";
import { decimal, supply, symbol, token } from "../../../images/image";
const MintInfo = () => {
  const [values, setValues] = useState({
    tokenname: "",
    tokensymbol: "",
    tokensupply: "",
    decimals: "",
  });

  const inputs = [
    {
      label: { leftLabel: "Token Name", rightLabel: "Ethereum" },
      icon: token,
      type: "text",
      name: "tokenname",
      placeholder: "Enter your token name",
    },
    {
      label: { leftLabel: "Token Symbol", rightLabel: "ETH" },
      icon: symbol,
      type: "text",
      name: "tokensymbol",
      placeholder: "Enter your token symbol",
    },
    {
      label: {
        leftLabel: "Token Supply",
        rightLabel: " 1000 (Don't include decimals)",
      },
      icon: supply,
      type: "number",
      name: "tokensupply",
      placeholder: "0000000000000",
    },
    {
      label: { leftLabel: "Decimals", rightLabel: "18" },
      icon: decimal,
      type: "number",
      name: "decimals",
      placeholder: "18",
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleKeyDown = (event) => {
    if (event.key !== "Backspace" && !/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>
        Launc8 Ecosystem Token <span className={styles.gradient}>Minter</span>
      </h4>
      <form action="" className={styles.form}>
        {inputs.map((input, i) => (
          <div className={styles.inputWrapper} key={i}>
            <label
              htmlFor={input.name}
              className={`${styles.label} ${styles.text}`}
            >
              <span> {input.label.leftLabel}</span>
              <span className={styles.rightLabel}>
                {" "}
                Ex: {input.label.rightLabel}
              </span>
            </label>
            <div className={styles.inputContainer}>
              <img src={input.icon} alt="#" className={styles.icon} />
              <input
                type={input.type}
                id={input.name}
                name={input.name}
                value={values[input.name]}
                onChange={onChange}
                className={`${styles.input} ${styles.text}`}
                placeholder={input.placeholder}
                onKeyDown={input.type === "number" ? handleKeyDown : null}
              />
            </div>
          </div>
        ))}
        <button className={styles.connectButton}>Connect Wallet</button>
      </form>
    </div>
  );
};

export default MintInfo;
