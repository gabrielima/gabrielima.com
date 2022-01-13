import Link from 'next/link';
import React from 'react';

import HomeSection from './../../../styles/pages/HomeStyles';
import PostsList from './../../../styles/components/Home/PostsStyles';

const formatDate: any = (date: any) => {
  return date.toString();
}

const Post = ({ post }: any) => (
  <Link href={'/post/' + post.slug}>
    <PostsList.Item>
      <p>{post.title}</p>
      <time>{formatDate(post.datetime)}</time>
    </PostsList.Item>
  </Link>
);

const Posts = ({ posts }: any) => (
  <HomeSection>
    <HomeSection.Title>Latest Posts</HomeSection.Title>

    <PostsList>
      {posts.map((post: any, index: number) => <Post post={post} key={index} />)}
    </PostsList>

    <Link href="/blog">
      <HomeSection.Link>All Posts +</HomeSection.Link>
    </Link>
  </HomeSection>
);

export default Posts;
