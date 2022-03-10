import Link from "next/link";
import dayjs from "dayjs";

const styles = {
  card: "flex flex-col py-3 px-5 bg-white rounded-md shadow-md hover:bg-slate-50 transition",
  title: "text-lg",
  date: "mt-2 text-sm text-gray-600",
};

const PostCard = ({ post }: any) => (
  <Link href={`/blog/${post.slug}`} passHref>
    <a className={styles.card}>
      <span className={styles.title}>{post.title}</span>
      <span className={styles.date}>{dayjs(new Date(post.createdAt)).format("YYYY-MM-DD")}</span>
    </a>
  </Link>
);

export default PostCard;
