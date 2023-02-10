import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { HiOutlineMoon } from "react-icons/hi";
import { CgSun } from "react-icons/cg";
import { useState, useContext } from "react";
import { ThemeContext } from "../../App";
import Shivam_Gote_Resume from "./Shivam_Gote_Resume.pdf"

function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const { changeTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    changeTheme();
  };

  const toggleMobileMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav className={styles.nav_container}>
      <div className={styles.desktopMenu}>
        <div className={styles.nav_left}>
          <a href="#home">Shivam.</a>
        </div>
        <div className={styles.nav}>
          <a href="#about" className={styles.nav_link}>
            About
          </a>
          <a href="#resume" className={styles.nav_link}>
            Education
          </a>
          <a href="#resume" className={styles.nav_link}>
            Experience
          </a>
          <a href="#work" className={styles.nav_link}>
            Work
          </a>
          <a href="#contact" className={styles.nav_link}>
            Contact
          </a>
        </div>
        <div className={styles.nav_right}>
          <div className={styles.theme_icon} onClick={toggleTheme}>
            {darkTheme ? <CgSun /> : <HiOutlineMoon />}
          </div>

          <a

            href={Shivam_Gote_Resume}
            target="_blank"
            download
          >
            <button onClick={() => window.open(Shivam_Gote_Resume)} className={styles.nav_resume_btn}>
              Resume
            </button>
          </a>
        </div>
      </div>


      <div className={styles.mobileMenu}>
        {/* Hamburger menu */}
        <div className={styles.nav_left}>
          <a href="#home">Shivam Gote.</a>
        </div>
        <div
          className={`${styles.navMobile} ${isMenuClicked ? styles.active : ""
            }`}
        >
          <a href="#about" className={styles.nav_link}>
            About
          </a>
          <a href="#resume" className={styles.nav_link}>
            Education
          </a>
          <a href="#resume" className={styles.nav_link}>
            Experience
          </a>
          <a href="#work" className={styles.nav_link}>
            Work
          </a>
          <a href="#contact" className={styles.nav_link}>
            Contact
          </a>
          <a

            href={Shivam_Gote_Resume}
            target="_blank"
            download
          >
            <button onClick={() => window.open(Shivam_Gote_Resume)} className={styles.nav_resume_btn}>
              Resume
            </button>
          </a>
        </div>
        <div className={styles.nav_right}>
          <div className={styles.theme_icon} onClick={toggleTheme}>
            {darkTheme ? <CgSun /> : <HiOutlineMoon />}
          </div>
          <div className={styles.hamburgerMenu} onClick={toggleMobileMenu}>
            {isMenuClicked ? <IoClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
