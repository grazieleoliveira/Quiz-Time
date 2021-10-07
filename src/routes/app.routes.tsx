import React from 'react';
import { createStackNavigator } from '@react-navigation/stack/';
import { HOME, QUESTIONS, RESULTS } from '../shared/constants/routeNames';
import themes from '../shared/themes';
import { Home } from '~/modules/Categories/view/';
import { QuestionPage } from '~/modules/Questions/view';
import { ResultPage } from '~/modules/Results/view';

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName={HOME}
      screenOptions={{
        cardStyle: {
          backgroundColor: themes.light.Colors.WHITE,
        },
        headerShown: false,
      }}>
      <Stack.Screen
        name={HOME}
        component={Home}
        // options={{
        //   header: () => <Header />,
        // }}
      />
      <Stack.Screen
        name={QUESTIONS}
        component={QuestionPage}
        // options={{
        //   header: () => <Header />,
        // }}
      />
      <Stack.Screen
        name={RESULTS}
        component={ResultPage}
        // options={{
        //   header: () => <Header />,
        // }}
      />
    </Stack.Navigator>
  );
}
