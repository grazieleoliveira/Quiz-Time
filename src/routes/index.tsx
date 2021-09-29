import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { AppRoutes } from './app.routes';
import * as S from './styles';
import themeProvider from '~/shared/themes';

export function Routes() {
  // const {theme} = useSelector((state: ApplicationState) => state.theme);

  return (
    <ThemeProvider theme={themeProvider.light}>
      <S.StatusBar translucent={false} />
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
