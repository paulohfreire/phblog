import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export function SignInButton() {
  const isLogged = true;
  return isLogged ? (
    <button type="button" className={styles.sigInButton}>
      <FaGithub color="#04d361" />
      <p>Sign in with Github</p>
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.sigInButton}>
      <FaGithub color="#eba417" />
      <p>Sign in with Github</p>
    </button>
  );
}
