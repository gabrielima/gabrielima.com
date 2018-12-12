import fetch from 'isomorphic-unfetch';
import { baseUrl } from './config';

export const getPosts = async () => {
  const result = await fetch(baseUrl + '/static/data/posts.json');
  return await result.json();
}

export const getPost = async (slug) => {
  const posts = await getPosts();

  let post = posts.filter(post => post.slug === slug);
  if (!post.length) {
    return { error: 404 };
  }

  post = post[0];

  let text = await fetch(baseUrl + '/static/data/posts/' + slug + '.md');
  text = await text.text();

  return { ...post, text };
}
