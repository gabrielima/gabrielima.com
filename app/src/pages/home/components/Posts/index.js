import Link from 'next/link';
import React from 'react';

import { formatDate } from '../../../../misc/date-formatter';
import HomeSection from '../../HomeStyles';
import PostsList from './PostsStyles';

const Posts = ({ posts }) => (
  <HomeSection>
    <HomeSection.Title>Latest Posts</HomeSection.Title>

    <PostsList>
      {posts.map((post, index) => (
        <Link href={'/post/' + post.slug} key={index}>
          <PostsList.Item>
            <p>{post.title}</p>
            <time>{formatDate(post.datetime)}</time>
          </PostsList.Item>
        </Link>
      ))}
    </PostsList>

    <Link href="/blog">
      <a>All Posts +</a>
    </Link>
  </HomeSection>
);

export default Posts;
