import fetch from 'isomorphic-unfetch';

import { baseUrl } from './config';

export const getPersonalInfo = async () => {
  const result = await fetch(`${baseUrl}/static/data/personal-info.json`);
  return await result.json();
}
