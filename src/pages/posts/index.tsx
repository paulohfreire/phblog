import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de julho de 2022</time>
            <strong>Creating something</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              error consequuntur atque dolore commodi dignissimos aliquid
              voluptatem totam velit molestiae similique exercitationem eum
              molestias itaque, ipsum magnam quia cumque earum!
            </p>
          </a>

          <a href="#">
            <time>12 de julho de 2022</time>
            <strong>Creating something</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              error consequuntur atque dolore commodi dignissimos aliquid
              voluptatem totam velit molestiae similique exercitationem eum
              molestias itaque, ipsum magnam quia cumque earum!
            </p>
          </a>

          <a href="#">
            <time>12 de julho de 2022</time>
            <strong>Creating something</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              error consequuntur atque dolore commodi dignissimos aliquid
              voluptatem totam velit molestiae similique exercitationem eum
              molestias itaque, ipsum magnam quia cumque earum!
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
