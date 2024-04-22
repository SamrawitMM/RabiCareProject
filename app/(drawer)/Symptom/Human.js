import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native';


export default function Human() {
    const navigation = useNavigation();
    const openDrawer = ()=>{
        navigation.dispatch(DrawerActions.openDrawer())
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Common Symptoms of Rabies in Humans:</Text>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- Fever</Text>
      </View>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- Headache</Text>
      </View>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- Hydrophobia (Fear of water)</Text>
      </View>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- Aerophobia (Fear of drafts or air)</Text>
      </View>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- Anxiety or Agitation</Text>
      </View>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- Confusion</Text>
      </View>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- Hallucinations</Text>
      </View>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- Excessive Salivation (Foaming at the mouth)</Text>
      </View>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- Muscle Weakness</Text>
      </View>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- Paralysis, particularly in the throat and neck area</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  bullet: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  bulletText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#666666',
  },
});