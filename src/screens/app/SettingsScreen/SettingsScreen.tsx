import React from 'react';

import { Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

export function SettingsScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">SettingsScreen</Text>
    </Screen>
  );
}
