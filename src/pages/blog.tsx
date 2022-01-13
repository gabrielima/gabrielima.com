import { NextPage } from 'next';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { getPosts } from '../services/posts';

import BlogContainer from './../styles/pages/BlogStyles';
import Head from './components/CustomHead';

const formatDate: any = (date: any) => {
  return date.toString();
}

const Post = ({ post }: any) => (
  <div>
    <Link as={`/blog/${post.slug}`} href={`/post?slug=${post.slug}`}>
      <a>{post.title}</a>
    </Link>
    <time>{formatDate(post.datetime)}</time>
  </div>
);

const Blog: NextPage = ({ posts }: any) => (
  <>
    <Head title="Blog" />

    <BlogContainer>
      <BlogContainer.Title>Blog</BlogContainer.Title>
      {/* {posts.map((post, index) => <Post post={post} key={index} />)} */}

      <p style={{'marginTop': '5rem'}}>Work in progress.</p>
    </BlogContainer>
  </>
);

Blog.getInitialProps = async function () {
  const posts = await getPosts();

  return { posts };
};

export default Blog;
