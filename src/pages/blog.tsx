import { NextPage } from 'next';
import Link from 'next/link';
import React, { Fragment } from 'react';

import Head from '../../components/Head';
import { formatDate } from './../../misc/date-formatter';
import { getPosts } from './../../services/posts';
import BlogContainer from './BlogStyles';

const Post = ({ post }: any) => (
  <div>
    <Link as={`/blog/${post.slug}`} href={`/post?slug=${post.slug}`}>
      <a>{post.title}</a>
    </Link>
    <time>{formatDate(post.datetime)}</time>
  </div>
);

const Blog: NextPage = ({ posts }: any) => (
  <Fragment>
    <Head title="Blog" />

    <BlogContainer>
      <BlogContainer.Title>Blog</BlogContainer.Title>
      {/* {posts.map((post, index) => <Post post={post} key={index} />)} */}

      <p style={{'marginTop': '5rem'}}>Work in progress.</p>
    </BlogContainer>
  </Fragment>
);

Blog.getInitialProps = async function () {
  const posts = await getPosts();

  return { posts };
};

export default Blog;
