import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
	Home,
	Restaurant,
	OrderDelivery
} from './screens'
import Tabs from './Navigation/tab';
const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer >
		<Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
			<Stack.Screen name="Home" component={Tabs} />
			<Stack.Screen name="Restaurant" component={Restaurant} />
			<Stack.Screen name="Order" component={OrderDelivery} />
		</Stack.Navigator>
		
	</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
