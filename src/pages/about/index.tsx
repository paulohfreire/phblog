import Head from "next/head";
import styles from "./about.module.scss";

export default function About() {
  return (
    <>
      <Head>
        <title> Sobre | ph.blog</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>Sobre o blog</h1>

          <div className={styles.postContent}>
            <p>O blog é um projeto criado para ajudar aos desenvolvedores a</p>
          </div>
        </article>
      </main>
    </>
  );
}
