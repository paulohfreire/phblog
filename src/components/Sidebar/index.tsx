import { GithubLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";
import React from "react";
import styles from "./sidebar.module.scss";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.profile}>
        <img
          className={styles.cover}
          src="https://github.com/paulohfreire.png"
          alt="Paulo H Freire"
        />
        <strong>Paulo H. Freire</strong>
        <span>Software Engineer</span>
      </div>

      <footer>
        <div className={styles.socialLinks}>
          <LinkedinLogo size={32} color="#eba417" />
          <a
            href="https://www.linkedin.com/in/phfreire/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </div>
        <div className={styles.socialLinks}>
          <GithubLogo size={32} color="#eba417" />
          <a
            href="https://github.com/paulohfreire"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <div className={styles.socialLinks}>
          <TwitterLogo size={32} color="#eba417" />
          <a
            href="https://twitter.com/freireopaulo"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </div>
      </footer>
    </aside>
  );
}
