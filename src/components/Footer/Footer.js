import { BsTwitter } from "react-icons/bs";
import { RiInstagramFill, RiDiscordFill } from "react-icons/ri";
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";
import { logo } from "../../images/image";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const navItems = [
    { navItem: "IDO List", to: "/" },
    { navItem: "Minter", to: "/" },
    { navItem: "roadmap", to: "/" },
  ];
  const socials = [
    { icon: <RiDiscordFill className={styles.socialIcon} />, to: "#" },
    { icon: <BsTwitter className={styles.socialIcon} />, to: "#" },
    { icon: <RiInstagramFill className={styles.socialIcon} />, to: "#" },
    { icon: <FaTelegramPlane className={styles.socialIcon} />, to: "#" },
    { icon: <FaFacebookF className={styles.socialIcon} />, to: "#" },
  ];
  return (
    <footer className="wrapper">
      <div>
        <div className={styles.top}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div className={styles.links}>
            {navItems.map((el, i) => (
              <a className="source" href={el.to} key={i}>
                {el.navItem}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© 2023 UI8</p>
          <div className={styles.socials}>
            {socials.map((el, i) => (
              <a href={el.to} target="blank" key={i}>
                {el.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
