import React, { Fragment } from 'react';
import { Markdown } from 'react-showdown';

import Head from './../../../components/head';
import { getPost } from './../../services/posts';

const Post = ({ post }) => (
  <Fragment>
    <Head title="Home" />
  
    <section>
      <article><Markdown markup={post.text}></Markdown></article>

      <div>
        {post.tags && post.tags.map((tag, index) => (
          <span key={index}>{ tag }</span>
        ))}
      </div>
    </section>
  </Fragment>
);

Post.getInitialProps = async function ({ router }) {
  // const { slug } = req.params;
  // const post = await getPost(slug);
  console.log(router);

  return {  };
};

export default Post;
