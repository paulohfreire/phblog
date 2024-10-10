import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../../public/images/plogo.svg";
import { SignInButton } from "./SignInButton";
import ActiveLink from "../ActiveLink";
import { useRouter } from "next/router";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt="blog logo" width={100} height={100} />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/about">
            <a>About</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  );
}
