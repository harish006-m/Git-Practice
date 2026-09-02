import React from 'react';

import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import MainTabNavigator from './MainTabNavigator';

import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import OrderSuccessScreen from '../screens/OrderSuccessScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import WalletScreen from '../screens/WalletScreen';
import ProfileScreen from '../screens/ProfileScreen';
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>

        {/* ================= MAIN APP ================= */}

        <Stack.Screen
          name="MainTabs"
          component={MainTabNavigator}
        />

        {/* ================= PRODUCT DETAILS ================= */}

        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
        />

        {/* ================= CART ================= */}

        <Stack.Screen
          name="Cart"
          component={CartScreen}
        />

        {/* ================= CHECKOUT ================= */}

        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
        />

        {/* ================= ORDER SUCCESS ================= */}

        <Stack.Screen
          name="OrderSuccess"
          component={OrderSuccessScreen}
        />

        {/* ================= FAVORITES ================= */}

        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
        />

        {/* ================= WALLET ================= */}

        <Stack.Screen
          name="Wallet"
          component={WalletScreen}
        />

        {/* ================= PROFILE ================= */}

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default AppNavigator;