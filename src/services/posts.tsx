import data from './../pages/api/data/posts.json';

export const getPosts = async () => {
  return data;
}

export const getPost = async (slug: string) => {
  return {};
}
