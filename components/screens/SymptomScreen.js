import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Animal from './AnimalScreen';
import Human from './HumanScreen';

const Tab = createBottomTabNavigator();

const SymptomTabNavigator = () => {
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
        name="Human"
        component={Human}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Animal"
        component={Animal}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="details" size={size} color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default SymptomTabNavigator;
