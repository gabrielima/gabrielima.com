import Meta from "../../components/Meta";
import PostCard from "../../components/PostCard";
import PostService from "../../services/PostsService";
import page from "../../styles/page";

const styles = {
  container: "max-w-7xl mx-auto w-full",
  list: "grid gap-5 grid-cols-1 lg:grid-cols-2",
};

const blog = ({ posts }: any) => (
  <>
    <Meta title="Blog | Gabriel Lima" />

    <div className={page.hero}>
      <h1 className={page.title}>Blog</h1>
    </div>

    <div className={page.content}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {posts?.map((post: any, index: number) => (
            <li key={index}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
);

export default blog;

export function getStaticProps() {
  const posts: any = PostService.getPosts(["title", "createdAt", "slug"]);

  return {
    props: { posts },
    revalidate: 5000,
  };
}
