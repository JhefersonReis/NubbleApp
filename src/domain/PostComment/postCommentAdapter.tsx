import { PostComment, PostCommentAPI } from './postCommentTypes';

/**
 *
 * @description Adapta o formato de um comentário de post para o formato do comentário usado na aplicação
 * @param postCommentAPI Comentário de post no formato da API
 */
function toPostComment(postCommentAPI: PostCommentAPI): PostComment {
  return {
    id: postCommentAPI.id,
    message: postCommentAPI.message,
    createdAt: postCommentAPI.created_at,
    author: {
      id: postCommentAPI.user.id,
      profileURL: postCommentAPI.user.profile_url,
      name: postCommentAPI.user.full_name,
      userName: postCommentAPI.user.username,
    },
  };
}

export const postCommentAdapter = {
  toPostComment,
};
