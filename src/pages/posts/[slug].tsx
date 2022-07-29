import { GetServerSideProps } from "next";
import Head from "next/head";
import { RichText } from "prismic-reactjs";
import { getPrismicClient } from "../../services/prismicio";
import * as prismicH from "@prismicio/helpers";

import styles from "./post.module.scss";

interface PostsProps {
  post: {
    slug: string;
    title: string;
    imagepost?: string;
    postcontent: string;
    updatedAt: string;
  };
}

const ImagePost = ({ post }: PostsProps) => {
  if (!post.imagepost) {
    return null;
  }
  return <img src={post.imagepost} alt={post.title} />;
};

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
          <ImagePost post={post} />
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.postcontent }}
          />
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
    imagepost: response.data.imagepost.url || null,
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
