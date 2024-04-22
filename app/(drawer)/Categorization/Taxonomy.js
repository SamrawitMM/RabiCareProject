import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native';


export default function Taxonomy() {
    const navigation = useNavigation();
    const openDrawer = ()=>{
        navigation.dispatch(DrawerActions.openDrawer())
    }
  return (
    <View>
       <View style={styles.container}>
      <Text style={styles.title}>Taxonomy for Rabies</Text>
      <Text>
        Rabies is a viral disease that affects the central nervous system of mammals, including humans.
        It is caused by the rabies virus, which belongs to the genus Lyssavirus and the family Rhabdoviridae.
        The rabies virus is typically transmitted through the saliva of infected animals, usually via a bite.
        Once the virus enters the body, it travels to the brain, leading to symptoms such as fever, headache, confusion, agitation, hallucinations, paralysis, and ultimately death.
        Rabies is preventable through vaccination and post-exposure prophylaxis, but it remains a significant public health concern in many parts of the world.
      </Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    //   padding: 20,
    // //   backgroundColor: 'black',
    padding:20
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
      color: '#333', // Updated text color
    },
    description: {
      fontSize: 16,
      lineHeight: 24,
      color: '#555', // Updated text color
    },
  });


