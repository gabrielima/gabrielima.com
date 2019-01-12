import Link from 'next/link';
import React, { Fragment } from 'react';

import Head from '../../components/Head';
import { formatDate } from './../../misc/date-formatter';
import { getPosts } from './../../services/posts';

const Post = ({ post }) => (
  <div>
    <Link as={`/blog/${post.slug}`} href={`/post?slug=${post.slug}`}>
      <a>{post.title}</a>
    </Link>
    <time>{formatDate(post.datetime)}</time>
  </div>
);

const Blog = ({ posts }) => (
  <Fragment>
    <Head title="Blog" />

    <section>
      <h1>Posts</h1>
      {posts.map((post, index) => <Post post={post} key={index} />)}
    </section>
  </Fragment>
);

Blog.getInitialProps = async function () {
  const posts = await getPosts();

  return { posts };
};

export default Blog;
