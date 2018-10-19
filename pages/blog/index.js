import React, { Component } from 'react';
import Link from 'next/link';
import './blog.scss';

import Page from './../../components/page';
import { getPosts } from './../../services/posts';
import { formatDate } from './../../services/utils';

const Blog = ({ posts }) => (
  <Page meta={{ title: 'Blog' }}>
    <div>
      <section className="section">
        <h1 className="section__title h2">All Posts</h1>
      </section>

      <section className="posts">
        {posts.map((post, index) => (
          <div className="posts__item" key={index}>
            <Link as={`/post/${post.slug}`} href={`/post?slug=${post.slug}`}>
              <a>{post.title}</a>
            </Link>
            <time>{formatDate(post.datetime)}</time>
          </div>
        ))}
      </section>
    </div>
  </Page>
);

Blog.getInitialProps = async function () {
  const posts = await getPosts();

  return { posts };
};

export default Blog;
