import fetch from 'isomorphic-unfetch';
import { baseUrl } from '../misc/config';

export const getProjects = async () => {
  const result = await fetch(`${baseUrl}/static/data/projects.json`);
  return await result.json();
}
