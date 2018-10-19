import React from 'react';
import Link from 'next/link';
import './posts.scss';

import { formatDate } from '../../../../services/utils';

const Posts = ({ posts }) => (
  <section className="section posts--home">
    <h2 className="section__title">Latest Posts</h2>
    <div className="posts--home__wrapper">
      {posts.map((post, index) => (
        <Link href={'post/' + post.slug} key={index}>
          <a className="posts--home__item">
            <p>{post.title}</p>
            <time>{formatDate(post.datetime)}</time>
          </a>
        </Link>
      ))}
    </div>

    <Link href="blog">
      <a className="btn posts--home__all">All Posts +</a>
    </Link>
  </section>
);

export default Posts;
