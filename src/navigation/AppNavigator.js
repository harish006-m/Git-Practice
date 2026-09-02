import React from 'react';
import WalletScreen from '../screens/WalletScreen';
import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import MainTabNavigator from './MainTabNavigator';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import OrderSuccessScreen from '../screens/OrderSuccessScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>

        {/* MAIN APP */}

        <Stack.Screen
          name="MainTabs"
          component={MainTabNavigator}
        />

        {/* PRODUCT DETAILS */}

        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
        />

        {/* CHECKOUT */}

        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
        />

        {/* ORDER SUCCESS */}

        <Stack.Screen
          name="OrderSuccess"
          component={OrderSuccessScreen}
        />
        {/* FAVORITES */}

        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
        />
        <Stack.Screen
  name="Wallet"
  component={WalletScreen}
/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default AppNavigator;