import Link from "next/link";
import section from "../../styles/section";
import dayjs from "dayjs";

const styles = {
  posts: "bg-gray-50",
  list: "mt-12 lg:mt-18",
  link: "text-gray-800 flex flex-col lg:flex-row justify-between mb-7",
  title: "underline underline-offset-4",
  date: "text-sm text-gray-600 mt-2 lg:mt-0",
};

const Posts = ({ posts }: any) => (
  <section id="posts" className={styles.posts}>
    <div className={section.container}>
      <h3 className={section.title}>
        Blog
        <span className={section.titleUnderline}></span>
      </h3>

      <ul className={styles.list}>
        {posts?.map((post: any, index: number) => (
          <li key={index}>
            <Link href={`/blog/${posts.slug}`} passHref>
              <a className={styles.link}>
                <span className={styles.title}>{post.title}</span>
                <span className={styles.date}>{dayjs(new Date(post.createdAt)).format("YYYY-MM-DD")}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Posts;
