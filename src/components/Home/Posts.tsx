import Link from "next/link";
import section from "../../styles/section";
import dayjs from "dayjs";
import { AiOutlinePlus } from "react-icons/ai";
import PostCard from "../PostCard";

const styles = {
  posts: "bg-sky-50",
  container: "mt-12 lg:mt-18",
  list: "grid gap-10 grid-cols-1 lg:grid-cols-2",
};

const Posts = ({ posts }: any) => (
  <section id="posts" className={styles.posts}>
    <div className={section.container}>
      <h3 className={section.title}>
        Blog
        <span className={section.titleUnderline}></span>
      </h3>

      <div className={styles.posts}>
        <div className={styles.container}>
          <ul className={styles.list}>
            {posts?.map((post: any, index: number) => (
              <li key={index}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        </div>
        <div className={section.moreButtonWrapper}>
          <Link href="/blog" passHref>
            <a className={section.moreButton}>
              <span className="mr-2">More Posts</span>
              <AiOutlinePlus />
            </a>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Posts;
