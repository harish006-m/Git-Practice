import React from 'react';

import {Ionicons} from '@react-native-vector-icons/ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import OrderAgainScreen from '../screens/OrderAgainScreen';
import TrackOrderScreen from '../screens/TrackOrderScreen';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,

        tabBarActiveTintColor: '#00A86B',

        tabBarInactiveTintColor: '#777777',

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },

        tabBarIcon: ({focused, color, size}) => {

          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          }

          if (route.name === 'OrderAgain') {
            iconName = focused
              ? 'receipt'
              : 'receipt-outline';
          }

          if (route.name === 'Categories') {
            iconName = focused
              ? 'grid'
              : 'grid-outline';
          }

          if (route.name === 'TrackOrder') {
            iconName = focused
              ? 'location'
              : 'location-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}>

      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="OrderAgain"
        component={OrderAgainScreen}
        options={{
          title: 'Order Again',
        }}
      />

      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
      />

      <Tab.Screen
        name="TrackOrder"
        component={TrackOrderScreen}
        options={{
          title: 'Track Order',
        }}
      />

    </Tab.Navigator>
  );
}

export default MainTabNavigator;