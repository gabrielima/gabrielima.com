import React from 'react';
import './post.scss';

import Page from './../../components/page';
import { getPost } from './../../services/posts';
import { formatDate } from './../../services/utils';

const Post = ({ post }) => (
  <Page meta={{ title: post.title, keywords: post.tags }}>
    <section className="post">
      <article dangerouslySetInnerHTML={{ __html: post.text }}></article>

      <div className="post__info">
        {post.tags.map((tag, index) => (
          <span className="btn" key={index}>{ tag }</span>
        ))}
      </div>
    </section>
  </Page>
);

Post.getInitialProps = async function({ req }) {
  console.log(req);
  const post = await getPost();

  return { post };
};

export default Post;
