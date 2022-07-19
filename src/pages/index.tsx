import { GetStaticProps } from "next";
import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
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
            <span>por apenas R$ {product.amount}</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="garota em frente a um computador" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1Kwc6PANU4rMqXHr949nkJ5n");

  const product = {
    priceId: price.id,
    amount: price.unit_amount / 100,
  };
  return {
    props: {
      product,
    },
  };
};
