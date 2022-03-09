import Head from "next/head";
// import defaultImage from "../../public/default.png";

const Meta = (meta: any) => {
  const defaultMeta = {
    host: "https://gabrielima.com",
    url: "/",
    ogImage: "", //defaultImage?.src,
    title: "Gabriel Lima - Full Stack Developer",
    description: "Gabriel Lima is a computer scientist and a Full-stack developer working mainly with web tecnologies.",
  };

  meta = { ...defaultMeta, ...meta };
  let { title, description, ogImage, url, host } = meta;

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content={host + ogImage} />
      <meta property="twitter:url" content={host + url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={host + url} />
      <meta property="og:image" content={host + ogImage} />
    </Head>
  );
};

export default Meta;
