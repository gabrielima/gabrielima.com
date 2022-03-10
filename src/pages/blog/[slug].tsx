import "prismjs/themes/prism-okaidia.min.css";

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Meta from "../../components/Meta";
import ErrorPage from "next/error";
import page from "../../styles/page";
import dayjs from "dayjs";
import PostService from "../../services/PostsService";
import { useRouter } from "next/router";
import Skeleton from "../../components/Skeleton";
import markdownToHtml from "../../lib/markdown-to-html";

const styles = {
  post: "bg-sky-50 grow flex px-2 lg:px-10 py-4 lg:py-8",
  container: "max-w-5xl mx-auto w-full py-8 lg:py-10 px-5 lg:px-10 bg-white rounded-md shadow-md",
  main: "max-w-2xl mx-auto prose",
  title: "text-sky-600 font-extrabold text-3xl sm:text-4xl md:text-5xl",
  subtitle:
    "mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl mx-auto md:mt-5 md:text-xl",
};

const BlogPost = ({ post }: any) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Meta title={`${post?.title} | Gabriel Lima`} description={post?.content?.substring(0, 60)} />

      <div className={page.hero}>
        {router.isFallback ? (
          <Skeleton />
        ) : (
          <>
            <h1 className={styles.title}>{post?.title}</h1>
            <p className={styles.subtitle}>
              {dayjs(new Date(post?.createdAt)).format("YYYY-MM-DD")}
            </p>
          </>
        )}
      </div>

      <div className={styles.post}>
        <div className={styles.container}>
          {router.isFallback ? (
            <Skeleton />
          ) : (
            <div className={styles.main} dangerouslySetInnerHTML={{ __html: post?.content }} />
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = PostService.getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { slug }: any = context.params;
  const post: any = PostService.getPostBySlug(slug, [
    "title",
    "createdAt",
    "slug",
    "author",
    "content",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: { post: { ...post, content } },
    revalidate: 5000,
  };
};
