import Link from 'next/link';
import React, { Fragment } from 'react';

import Head from '../../components/Head';
import { getPosts } from './../../services/posts';
import { formatDate } from './../../misc/date-formatter';

const Blog = ({ posts }) => (
  <Fragment>
    <Head title="Blog" />

    <section>
      <h1>Posts</h1>
    </section>

    <section>
      {posts.map((post, index) => (
        <div key={index}>
          <Link as={`/blog/${post.slug}`} href={`/post?slug=${post.slug}`}>
            <a>{post.title}</a>
          </Link>
          <time>{formatDate(post.datetime)}</time>
        </div>
      ))}
    </section>
  </Fragment>
);

Blog.getInitialProps = async function () {
  const posts = await getPosts();
  return { posts };
};

export default Blog;
