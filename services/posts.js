import fetch from 'isomorphic-unfetch';
import { baseUrl } from './config';

export const getPosts = async () => {
  const result = await fetch(baseUrl + '/static/data/posts.json');
  return await result.json();
}

export const getPost = async (slug) => {
  const posts = getPosts();
  const text = await fetch(baseUrl + '/static/data/posts/' + slug + '.md');

  let post = posts.filter(post => post.slug === slug);
  post = post ? post[0] : post;

  return { ...post, text };
}
