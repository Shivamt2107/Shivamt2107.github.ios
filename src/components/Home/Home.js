import React from "react";
import styles from "./Home.module.css";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const Home = () => {
  return (
    <section className={styles.home_section} id="home">
      <div className={styles.home_left}>
        <div className={styles.home_img}>
          <div className={styles.cover}></div>
          <img
            className={styles.image}
            src={process.env.PUBLIC_URL + "/profile/profilePhoto.png"}
          />
        </div>
      </div>
      <div className={styles.home_right}>
        <p className={styles.greet}>Hi, my name is</p>
        <h1 className={styles.heading_1}>
          Shivam <span>Gote.</span>
        </h1>
        {/* <h1 className={styles.heading_2}>I build things for the web.</h1> */}
        <p className={styles.desc}>
        Creative Full-Stack Web Devloper with building websites using JavaScript and React.
        </p>
        <div className={styles.social_icons}>
          <a href="https://github.com/Shivamt2107" target="_blank">
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shivam-gote/"
            target="_blank"
          >
            <FiLinkedin />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <FiInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
