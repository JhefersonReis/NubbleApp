import React from 'react';

import { SimpleLogo } from '@brand';

import { Box, BoxProps, Icon } from '@components';
import { useAppSafeArea } from '@hooks';

export function HomeHeader() {
  const { top } = useAppSafeArea();

  return (
    <Box {...$wrapper} style={{ paddingTop: top }}>
      {/* <Box backgroundColor="carrotSecondary" height={16} width={70} /> */}
      <SimpleLogo width={70} />
      <Box flexDirection="row">
        <Box mr="s24">
          <Icon name="search" />
        </Box>
        <Box mr="s24">
          <Icon name="bell" />
        </Box>
        <Icon name="chat" />
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  paddingHorizontal: 's24',
  paddingBottom: 's24',
  justifyContent: 'space-between',
};
