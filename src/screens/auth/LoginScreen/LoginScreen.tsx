import React from "react";
import { SafeAreaView, View } from "react-native";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Icon } from "../../../components/Icon/Icon";
import { Button } from "../../../components/Button/Button";
import { Screen } from "../../../components/Screen/Screen";

export function LoginScreen() {
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
        rightComponent={<Icon color='gray2' name='eyeOn' />}
        boxProps={{ mb: 's10' }}
      />

      <Text color="primary" preset="paragraphSmall" bold>
        Esqueci minha senha
      </Text>

      <Button title="Entrar" mt="s48" />
      <Button title="Criar uma conta" mt="s20" preset="outline" />
    </Screen>
  );
}