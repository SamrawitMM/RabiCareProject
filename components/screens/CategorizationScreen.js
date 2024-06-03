import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Taxonomy from './TaxonomyScreen';
import Classification from './ClassificationScreen';
// import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "#f8f9fa",
        tabBarActiveTintColor: "black",
        tabBarInactiveBackgroundColor: "dodgerblue",
        tabBarInactiveTintColor: "#fff",
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Taxonomy"
        component={Taxonomy}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Classification"
        component={Classification}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="details" size={size} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Setting"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;
