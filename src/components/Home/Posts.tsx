import section from "../../styles/section";

const styles = {
  posts: "bg-gray-500",
};

const Posts = ({ posts }: any) => (
  <div className={section.container}>
    <h3 className={section.title}>
      Blog
      <span className={section.titleUnderline}></span>
    </h3>
  </div>
);

export default Posts;
