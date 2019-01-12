import Link from 'next/link';
import React from 'react';

import { formatDate } from '../../../../misc/date-formatter';
import HomeSection from '../../HomeStyles';
import PostsList from './PostsStyles';

const Post = ({ post }) => (
  <Link href={'/post/' + post.slug}>
    <PostsList.Item>
      <p>{post.title}</p>
      <time>{formatDate(post.datetime)}</time>
    </PostsList.Item>
  </Link>
);

const Posts = ({ posts }) => (
  <HomeSection>
    <HomeSection.Title>Latest Posts</HomeSection.Title>

    <PostsList>
      {posts.map((post, index) => <Post post={post} key={index} />)}
    </PostsList>

    <Link href="/blog">
      <a>All Posts +</a>
    </Link>
  </HomeSection>
);

export default Posts;
