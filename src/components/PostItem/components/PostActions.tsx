import React from 'react';

import { Post } from '@domain';

import { Box, Text, Icon, TouchableOpacityBox, IconProps } from '@components';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;

export function PostActions({
  reactionCount,
  commentCount,
  favoriteCount,
}: Props) {
  function likePost() {
    //TODO: Implement likePost
  }

  function navigateToComments() {
    //TODO: Implement navigateToComments
  }

  function favoritePost() {
    //TODO: Implement favoritePost
  }

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked
        onPress={likePost}
        text={reactionCount}
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
      />
      <Item
        marked={false}
        onPress={navigateToComments}
        text={commentCount}
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
      />
      <Item
        onPress={favoritePost}
        text={favoriteCount}
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked?: boolean;
  text: number;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
}

function Item({ onPress, icon, marked, text }: ItemProps) {
  return (
    <Box flexDirection="row">
      <TouchableOpacityBox
        flexDirection="row"
        alignItems="center"
        mr="s24"
        onPress={onPress}>
        <Icon
          color={marked ? 'marked' : undefined}
          name={marked ? icon.marked : icon.default}
        />
        {text > 0 && (
          <Text preset="paragraphSmall" bold ml="s4">
            {text}
          </Text>
        )}
      </TouchableOpacityBox>
    </Box>
  );
}
