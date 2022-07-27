import { GetServerSideProps } from "next";
import Head from "next/head";
import { RichText } from "prismic-reactjs";
import { getPrismicClient } from "../../services/prismicio";
import styles from "./post.module.scss";

interface PostsProps {
  post: {
    slug: string;
    title: string;
    postcontent: string;
    updatedAt: string;
  };
}

export default function Post({ post }: PostsProps) {
  return (
    <>
      <Head>
        <title>{post.title} | ph.blog</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.postcontent }}
          ></div>
        </article>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;
  const prismic = getPrismicClient();
  const response = await prismic.getByUID("post", String(slug), {});
  const post = {
    slug,
    title: RichText.asText(response.data.title),
    postcontent: RichText.asText(response.data.postcontent),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };
  return {
    props: {
      post,
    },
  };
};
