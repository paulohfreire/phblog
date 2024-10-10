import Head from "next/head";
import { Sidebar } from "../../components/Sidebar";
import styles from "./about.module.scss";

export default function About() {
  return (
    <>
      <Head>
        <title> About | ph.blog</title>
      </Head>

      <main className={styles.container}>
        <Sidebar />
        <article className={styles.post}>
          <h1>About the blog</h1>
          <div className={styles.postContent}>
            <p>
              The blog provides information about the technology area,
              especially about the software development career in which I work.
              But I must also bring more comprehensive content, such as the dev
              bubble controversies that arise on social media and macroeconomic
              events that can influence our lives.{" "}
            </p>
            <p>
              In general, the aim is to bring interaction and opinionated
              content own here. I will soon bring more tools to the page,new
              features and design adjustments. For now the important thing is
              deliver some content periodically.
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
