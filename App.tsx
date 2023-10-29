/* eslint-disable react-native/no-inline-styles */
import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { theme } from './src/theme/theme';
import { Button } from './src/components/Button/Button';
import { Text } from './src/components/Text/Text';
import { Box } from './src/components/Box/Box';
import { TextInput } from './src/components/TextInput/TextInput';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
          <Text preset="headingLarge">Olá</Text>
          <Text preset="paragraphLarge" mb="s40">
            Digite seu e-mail e senha para entrar!
          </Text>

          <Box mb="s20">
            <TextInput
              errorMessage="Mensagem de Erro"
              label="E-Mail"
              placeholder="Digite seu e-mail"
            />
          </Box>
          <Box>
            <TextInput label="Senha" placeholder="Digite sua senha" />
          </Box>

          <Text mt="s10" color="primary" preset="paragraphSmall" bold>
            Esqueci minha senha
          </Text>

          <Button title="Entrar" mt="s48" />
          <Button title="Criar uma conta" mt="s20" preset="outline" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}
