import fetch from 'isomorphic-unfetch';
import { baseUrl } from '../misc/config';
import data from './../static/data/personal-info.json';

export const getPersonalInfo = async () => {
  // const result = await fetch(``);
  // return await result.json();

  return data;
}
