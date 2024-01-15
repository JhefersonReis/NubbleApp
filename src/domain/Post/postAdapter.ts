import { Post, PostAPI } from './postTypes';

/**
 * @description Adapta o formato de um post da API para o formato de um post da aplicação
 * @param postAPI Post no formato da API
 */
function toPost(postAPI: PostAPI): Post {
  return {
    id: postAPI.id.toString(),
    text: postAPI.text,
    author: {
      profileURL: postAPI.user.profile_url,
      name: postAPI.user.full_name,
      userName: postAPI.user.username,
    },
    imageURL: postAPI.image_url,
    reactionCount: parseInt(postAPI.meta.like_count, 10),
    commentCount: parseInt(postAPI.meta.comments_count, 10),
    favoriteCount: parseInt(postAPI.meta.favorite_count, 10),
  };
}

export const postAdapter = {
  toPost,
};
