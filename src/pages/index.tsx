import Head from "next/head";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <div className={styles.title}>
        <h1>Hello</h1>
      </div>
    </>
  );
}
