import Head from "next/head";
import { getPrismicClient } from "../../services/prismicio";
import Prismic from "@prismicio/client";
import styles from "./styles.module.scss";
import { RichText } from "prismic-reactjs";

type Post = {
  slug: string;
  title: string;
  postcontent: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <a key={post.slug} href="#">
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{post.postcontent}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.getByType("post");
  const posts = response.results.map((post) => {
    return {
      title: RichText.asText(post.data.title),
      postcontent: RichText.asText(post.data.postcontent),
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
      slug: post.uid,
    };
  });

  return {
    props: {
      posts,
    },
  };
};