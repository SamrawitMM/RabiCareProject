import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function _layout() {
  return (
    <Tabs screenOptions={{
        headerShown: false
    }}>
        <Tabs.Screen
            name="Animal"
            options={{
                tabBarIcon: ({size, color})=>(
                    <Ionicons name='flash' size={size} color={color} />
                )
            }}
        />
        <Tabs.Screen
            name="Human"
            options={{
                tabBarIcon: ({size, color})=>(
                    <Ionicons name='star' size={size} color={color} />
                )
            }}
        />

    </Tabs>
  )
}