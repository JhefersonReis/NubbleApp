import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Text,
  Screen,
  Button,
  FormTextInput,
  FormPasswordInput,
} from '@components';
import { AuthScreenProps } from '@routes';

import { LoginSchema, loginSchema } from './loginSchema';

export function LoginScreen({ navigation }: AuthScreenProps<'LoginScreen'>) {
  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  function onSubmit({ email, password }: LoginSchema) {
    console.log(email, password);
  }

  const { control, formState, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  return (
    <Screen scrollable>
      <Text preset="headingLarge">Olá</Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar!
      </Text>

      <FormTextInput
        control={control}
        name="email"
        placeholder="Digite seu e-mail"
        label="E-mail"
        boxProps={{ mb: 's20' }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        placeholder="Digite sua senha"
        label="Senha"
        boxProps={{ mb: 's10' }}
      />

      <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        bold>
        Esqueci minha senha
      </Text>

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(onSubmit)}
        title="Entrar"
        mt="s48"
      />
      <Button
        title="Criar uma conta"
        mt="s20"
        preset="outline"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
}
