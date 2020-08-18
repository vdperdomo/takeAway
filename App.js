import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RestaurantListScreen from './src/screens/restaurant-list.screen';
import RestaurantStoreScreen from './src/screens/restaurant-store.screen';


const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(0, 45, 85)',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={ MyTheme } style={ { backgroundColor: MyTheme.primary } }>
      <Stack.Navigator initialRouteName="Menu" screenOptions={ { backgroundColor: MyTheme.primary } }>
        <Stack.Screen
          name="Restaurants"
          component={ RestaurantListScreen }
          options={ {
            headerStyle: { backgroundColor: 'white' }
          } } />
        <Stack.Screen name="Menu" component={ RestaurantStoreScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
