import { PageAPI, PageParams, api } from '@api';

// import { postListMock } from './postListMock';
import { PostAPI } from './postTypes';

async function getList(params?: PageParams): Promise<PageAPI<PostAPI>> {
  const response = await api.get<PageAPI<PostAPI>>('user/post', {
    params,
  });

  // simular um delay de 1 segundo
  // await new Promise(resolve => setTimeout(resolve, 2000));

  return response.data;
}

export const postApi = {
  getList,
};
