import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import styles from "./home.module.scss";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Olá, Seja bem-vindo</span>
          <h1>
            Saiba tudo sobre o mundo <span>React</span> e tecnologia em geral.
          </h1>
          <p>
            Tenha acesso ao conteúdo das publicações <br />
            <span>por apenas R$ 0,99</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="garota em frente a um computador" />
      </main>
    </>
  );
}
