import fetch from 'isomorphic-unfetch';
import { baseUrl } from '../misc/config';
import data from './../static/data/projects.json';

export const getProjects = async () => {
  // const result = await fetch(`${baseUrl}/static/data/projects.json`);
  // return await result.json();
  return data;
}
