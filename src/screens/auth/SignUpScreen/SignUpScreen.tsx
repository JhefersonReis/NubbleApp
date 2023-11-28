import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Button } from '../../../components/Button/Button';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';

export function SignUpScreen() {
  function submitForm() {
    console.log('submit');
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <TextInput
        boxProps={{ mb: 's20' }}
        placeholder="@"
        label="Seu username"
      />

      <TextInput
        boxProps={{ mb: 's20' }}
        placeholder="Digite seu nome completo"
        label="Nome completo"
      />

      <TextInput
        boxProps={{ mb: 's20' }}
        placeholder="Digite seu e-mail"
        label="E-mail"
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: 's48' }}
      />

      <Button title="Criar uma conta" onPress={submitForm} />
    </Screen>
  );
}
