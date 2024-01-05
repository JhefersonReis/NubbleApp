import React, { useState } from 'react';

import { Icon, TextInput, TextInputProps } from '@components';

export type PasswordInputProps = Omit<TextInputProps, 'rightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    setIsSecureTextEntry(prev => !prev);
  }

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...props}
      rightComponent={
        <Icon
          color="gray2"
          onPress={toggleSecureTextEntry}
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
        />
      }
    />
  );
}
