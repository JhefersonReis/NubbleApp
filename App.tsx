/* eslint-disable react-native/no-inline-styles */
import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { theme } from './src/theme/theme';
import { Button } from './src/components/Button/Button';
import { Icon } from './src/components/Icon/Icon';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
          <Button disabled title="Entrar" mb="s16" />
          <Button title="Entrar" mb="s16" />
          <Button preset="outline" title="Entrar" mb="s16" />

          <Button title="Entrar" loading mb="s16" />
          <Button preset="outline" title="Entrar" loading />

          <Icon name="eyeOff" color="error" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}
