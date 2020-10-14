import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { screens } from '../Utilities/Constants';
import Splash from '../Screens/Splash';
import SearchRestaurant from '../Screens/Search';

const Stack = createStackNavigator();
export const navigationRef = React.createRef();


function StackNavigator() {

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={screens.SPLASH}
        screenOptions={{
          headerMode: 'screen',
          headerBackTitleVisible: false,
          headerStyle: { elevation: 0 },
          headerTitleAlign: 'left',
          headerTitleContainerStyle: {
            marginLeft: Platform.OS === 'ios' ? 0 : -20,

          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen
          name={screens.SPLASH}
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screens.SEARCH}
          component={SearchRestaurant}
          options={{ headerShown: true }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    borderRadius: 50,
    elevation: 5,
    // overflow: 'scroll',
    // borderWidth: 1,
  },
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
  },
});

export { StackNavigator };
