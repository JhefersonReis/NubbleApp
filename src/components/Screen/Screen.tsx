import React from 'react';
import { useAppSafeArea, useAppTheme } from '@hooks';
import { Box, TouchableOpacityBox, Icon, Text } from '@components';
import { KeyboardAvoidingView, Platform } from 'react-native';
import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainer';
import { useNavigation } from '@react-navigation/native';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea();
  const { colors } = useAppTheme();

  const navigation = useNavigation();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingBottom="s24"
          paddingHorizontal="s24"
          style={{ paddingTop: top, paddingBottom: bottom }}>
          {canGoBack && (
            <TouchableOpacityBox
              onPress={navigation.goBack}
              mb="s24"
              flexDirection="row">
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold marginLeft="s8">
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
