import React from 'react';

import { ActivityIndicator, Box, Button, Text } from '@components';

interface Props {
  loading: boolean;
  error: boolean;
  refetch: () => void;
}

export function HomeEmpty({ refetch, loading, error }: Props) {
  let component = (
    <Text bold preset="paragraphMedium">
      Não há publicações no seu feed.
    </Text>
  );

  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }

  if (error) {
    component = (
      <>
        <Text bold preset="paragraphMedium" mb="s16">
          Não foi possível carregar o feed 😥
        </Text>
        <Button title="Recarregar" preset="outline" onPress={refetch} />
      </>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}
