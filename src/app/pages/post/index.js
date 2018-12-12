import React from 'react';
import { Markdown } from 'react-showdown';
import './post.scss';

import Page from './../../components/page';
import { getPost } from './../../services/posts';
import { formatDate } from './../../services/utils';

const Post = ({ post }) => (
  <Page meta={{ title: post.title, keywords: post.tags }}>
    <section className="post">
      <article><Markdown markup={post.text}></Markdown></article>

      <div className="post__info">
        {post.tags && post.tags.map((tag, index) => (
          <span className="btn" key={index}>{ tag }</span>
        ))}
      </div>
    </section>
  </Page>
);

Post.getInitialProps = async function({ req }) {
  const { slug } = req.params;
  const post = await getPost(slug);

  return { post };
};

export default Post;
