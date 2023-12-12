import React from 'react';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Icon } from '../../../components/Icon/Icon';
import { Button } from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({ navigation }: ScreenProps) {
  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  return (
    <Screen>
      <Text preset="headingLarge">Olá</Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar!
      </Text>

      <TextInput
        errorMessage="Mensagem de Erro"
        label="E-Mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
      />

      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        rightComponent={<Icon color="gray2" name="eyeOn" />}
        boxProps={{ mb: 's10' }}
      />

      <Text color="primary" preset="paragraphSmall" bold>
        Esqueci minha senha
      </Text>

      <Button title="Entrar" mt="s48" />
      <Button
        title="Criar uma conta"
        mt="s20"
        preset="outline"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
}
