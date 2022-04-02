import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import { SignInButton } from "./SignInButton";

export function Header() {
  //Configurar Storybook!!!!!!!
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt="ig.news logo" width={100} height={100} />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
