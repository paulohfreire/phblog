import Head from "next/head";
import { getPrismicClient } from "../services/prismicio";
import styles from "./home.module.scss";
import { RichText } from "prismic-reactjs";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  postcontent: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
}

export default function Home({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Home | ph.blog</title>
      </Head>

      <main className={styles.contentContainer}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <Link href={`/posts/${post.slug}`}>
              <a key={post.slug}>
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.postcontent}</p>
              </a>
            </Link>
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
