import { useState } from "react";
import { MdClose } from "react-icons/md";
import { AiOutlineAlignRight } from "react-icons/ai";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

import styles from "./Header.module.css";
import {
  avatar,
  eth,
  binance,
  arbiturm,
  optimism,
  logo,
} from "../../images/image";

const Header = () => {
  const [connected, setConnected] = useState(false);
  const [headerToggle, setHeaderToggle] = useState(false);
  const [currency, setCurrency] = useState({ icon: eth, name: "Ethereum" });
  const allCurrency = [
    { icon: eth, name: "Ethereum" },
    { icon: binance, name: "Binance Smart Chain" },
    { icon: arbiturm, name: "Arbitrum One" },
    { icon: optimism, name: "Optimism" },
  ];
  const [dropDown, setDropDown] = useState(false);
  const navItems = [
    { navItem: "IDO List", to: "/" },
    { navItem: "Minter", to: "/minter" },
    { navItem: "roadmap", to: "/" },
  ];

  return (
    <header className={`wrapper ${styles.header}`}>
      <div className={`${styles.header__inner}`}>
        <Link to="/">
          {" "}
          <img src={logo} alt="" className={styles.logo} />
        </Link>
        <nav style={{ right: headerToggle ? "0" : "-100%" }}>
          {navItems.map((el, i) => (
            <NavLink
              to={el.to}
              className="source"
              key={i}
              onClick={() => setHeaderToggle((prev) => !prev)}
            >
              {el.navItem}
            </NavLink>
          ))}
          {connected ? (
            <div className={styles.buttonContainer}>
              <div className={styles.dropdown}>
                <p className={styles.currencyContainer}>
                  <img
                    src={currency.icon}
                    alt="#"
                    className={styles.currencyIcon}
                  />
                  <span className={styles.currencyName}>{currency.name}</span>
                </p>
                {dropDown ? (
                  <BiChevronUp
                    className={styles.arrow}
                    onClick={() => setDropDown((prev) => !prev)}
                  />
                ) : (
                  <BiChevronDown
                    className={styles.arrow}
                    onClick={() => setDropDown((prev) => !prev)}
                  />
                )}
                {dropDown && (
                  <div className={styles.dropDownItems}>
                    {allCurrency.map((el, i) => (
                      <p
                        key={i}
                        className={styles.currencyContainer}
                        onClick={() => {
                          setDropDown(false);
                          setCurrency(el);
                        }}
                      >
                        <img
                          src={el.icon}
                          alt="#"
                          className={styles.currencyIcon}
                        />
                        <span className={styles.currencyName}>{el.name}</span>
                      </p>
                    ))}
                  </div>
                )}
              </div>

              <div className={styles.addressContainer}>
                <p className={styles.amount}>150 USDT</p>
                <div className={styles.addressAndAvatar}>
                  <p className={styles.address}>0xBBB6...e96e</p>
                  <img src={avatar} alt="#" className={styles.avatar} />
                </div>
              </div>
            </div>
          ) : (
            <div className={` ${styles.header__btns}`}>
              <button
                href="#/"
                className="source"
                onClick={() => setConnected(true)}
              >
                Connect Wallet
              </button>
            </div>
          )}
        </nav>

        <button
          onClick={() => setHeaderToggle((prev) => !prev)}
          className={`${styles.mobile} ${styles.toggleHeader}`}
        >
          {headerToggle ? (
            <MdClose className={styles.hamberGer} />
          ) : (
            <AiOutlineAlignRight className={styles.hamberGer} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
