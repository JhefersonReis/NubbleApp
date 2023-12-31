import React from 'react';

import { Button, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

export function HomeScreen({ navigation }: AppScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text>HomeScreen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
