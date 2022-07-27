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
            <p>
              O blog traz informações sobre a área de tecnologia, em especial
              sobre a carreira de front-end a qual atuo. Mas também devo trazer
              conteúdos mais abrangentes, como as polêmicas da bolha dev, que
              semanalmente explodem nas redes sociais e acontecimentos
              macroeconômicos que podem influenciar nossas vidas. No geral o
              intuito é trazer interação e conteúdo com opinião própria aqui. Em
              breve devo trazer mais ferramentas a página, novas features e
              ajustes de design. Por enquanto o importante é entregar algum
              conteúdo periodicamente.
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
