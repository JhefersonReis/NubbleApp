import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Screen,
  Text,
  Button,
  FormTextInput,
  FormPasswordInput,
} from '@components';
import { useResetNavigationSuccess } from '@hooks';
import { AuthScreenProps } from '@routes';

import { SignUpSchema, signUpSchema } from './signUpSchema';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({ navigation }: AuthScreenProps<'SignUpScreen'>) {
  const { reset } = useResetNavigationSuccess();
  const { control, formState, handleSubmit } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm() {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma.',
      icon: {
        name: 'checkRound',
        color: 'greenPrimary',
      },
    });
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        placeholder="@"
        label="Seu username"
        boxProps={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name="fullName"
        placeholder="Digite seu nome completo"
        label="Nome completo"
        boxProps={{ mb: 's20' }}
        autoCapitalize="words"
      />

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
        boxProps={{ mb: 's48' }}
      />

      <Button
        disabled={!formState.isValid}
        title="Criar uma conta"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
