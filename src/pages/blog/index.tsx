import Meta from "../../components/Meta";
import PostCard from "../../components/PostCard";
import page from "../../styles/page";

const styles = {
  posts: "bg-sky-50 grow flex px-8 py-10 lg:py-16",
  container: "max-w-7xl mx-auto w-full",
  list: "grid gap-10 grid-cols-1 lg:grid-cols-2",
};

const blog = ({ posts }: any) => (
  <>
    <Meta title="Blog | Gabriel Lima" />

    <div className={page.hero}>
      <h1 className={page.title}>Blog</h1>
    </div>

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
    </div>
  </>
);

export default blog;

export function getStaticProps() {
  const posts: any = [
    {
      slug: "Conhecendo-o-sistema-SAP-1",
      title: "Conhecendo o sistema SAP - parte 1",
      createdAt: new Date().getTime(),
    },
    {
      slug: "Conhecendo-o-sistema-SAP-2",
      title: "Conhecendo o sistema SAP - parte 2",
      createdAt: new Date().getTime(),
    },
    {
      slug: "Automatizando-tarefas-com-NodeJS-1",
      title: "Automatizando tarefas com NodeJS e Puppeteer",
      createdAt: new Date().getTime(),
    },
    {
      slug: "Automatizando-tarefas-com-NodeJS-2",
      title: "Automatizando tarefas com NodeJS e Puppeteer",
      createdAt: new Date().getTime(),
    },
  ];

  return {
    props: { posts },
    revalidate: 5000,
  };
}
