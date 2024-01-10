import React from 'react';

import { Post } from '@domain';

import { Box } from '@components';

import { PostActions } from './components/PostActions';
import { PostHeader } from './components/PostHeader';
import { PostImage } from './components/PostImage';

interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  return (
    <Box paddingHorizontal="s24" mb="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.reactionCount}
      />
    </Box>
  );
}
