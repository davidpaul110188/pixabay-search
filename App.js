import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchContextProvider from './context/Context'
import Search from './components/Search'
import Results from './components/Results'
import Details from './components/Details'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SearchContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Results" component={Results} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </SearchContextProvider>
  );
}