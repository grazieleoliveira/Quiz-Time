import React from 'react';
import { createStackNavigator } from '@react-navigation/stack/';
import { HOME } from '../shared/constants/routeNames';
import themes from '../shared/themes';
import { Home } from '../views/Home';

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName={HOME}
      screenOptions={{
        cardStyle: {
          backgroundColor: themes.light.Colors.WHITE,
        },
      }}>
      <Stack.Screen
        name={HOME}
        component={Home}
        // options={{
        //   header: () => <Header />,
        // }}
      />
    </Stack.Navigator>
  );
}
