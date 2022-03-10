import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Meta from "../../components/Meta";
import page from "../../styles/page";
import dayjs from "dayjs";

const styles = {
  post: "bg-sky-50 grow flex px-8 py-4 lg:py-8",
  container: "max-w-7xl mx-auto w-full",
  card: "py-8 lg:py-10 px-10 bg-white rounded-md shadow-md",
  article: "max-w-2xl mx-auto",
  title: "text-sky-600 font-extrabold text-3xl sm:text-4xl md:text-5xl",
  subtitle: "mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl mx-auto md:mt-5 md:text-xl",
};

const BlogPost = ({ post, slug }: any) => (
  <>
    <Meta title={`${post?.title} | Gabriel Lima`} description={post?.text.substring(0, 60)} />

    <div className={page.hero}>
      <h1 className={styles.title}>{post?.title}</h1>
      <p className={styles.subtitle}>{dayjs(new Date(post?.createdAt)).format("YYYY-MM-DD")}</p>
    </div>

    <div className={styles.post}>
      <div className={styles.container}>
        <div className={styles.card}>
          <article className={styles.article}>{post?.text}</article>
        </div>
      </div>
    </div>
  </>
);

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { slug }: any = context.params;
  let post: any = {
    slug: "Conhecendo-o-sistema-SAP-1",
    title: "Conhecendo o sistema SAP - parte 1",
    createdAt: new Date().getTime(),
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quibusdam repudiandae nobis dignissimos architecto doloremque modi, similique dolore accusantium mollitia ullam quos quod aliquid. Doloremque officia explicabo reprehenderit amet aliquid? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quibusdam repudiandae nobis dignissimos architecto doloremque modi, similique dolore accusantium mollitia ullam quos quod aliquid. Doloremque officia explicabo reprehenderit amet aliquid? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quibusdam repudiandae nobis dignissimos architecto doloremque modi, similique dolore accusantium mollitia ullam quos quod aliquid. Doloremque officia explicabo reprehenderit amet aliquid? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quibusdam repudiandae nobis dignissimos architecto doloremque modi, similique dolore accusantium mollitia ullam quos quod aliquid. Doloremque officia explicabo reprehenderit amet aliquid? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quibusdam repudiandae nobis dignissimos architecto doloremque modi, similique dolore accusantium mollitia ullam quos quod aliquid. Doloremque officia explicabo reprehenderit amet aliquid? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quibusdam repudiandae nobis dignissimos architecto doloremque modi, similique dolore accusantium mollitia ullam quos quod aliquid. Doloremque officia explicabo reprehenderit amet aliquid?",
  };

  return {
    props: { post, slug },
    revalidate: 5000,
  };
};
