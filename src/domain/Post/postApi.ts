import { PageAPI } from '@api';

// import { postListMock } from './postListMock';
import { PostAPI } from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer Mg.J2cPNyOVTHHNLqGeyk4QbTbKaYWrAFDEUUzBfTdNU54UvePoAB9d54pu4T5e',
    },
  });

  let data: PageAPI<PostAPI> = await response.json();

  return data;
}

export const postApi = {
  getList,
};
