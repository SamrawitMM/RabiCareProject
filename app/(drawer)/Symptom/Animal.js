import { View, Text, Button, StyleSheet, SafeAreaView,
    ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native';



export default function Animal() {
    const navigation = useNavigation();
    const openDrawer = ()=>{
        navigation.dispatch(DrawerActions.openDrawer())
    }

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <Text style={styles.title}>Common Symptoms of Rabies:</Text>
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
        <Text style={styles.bulletText}>- Confusion</Text>
      </View>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- Agitation</Text>
      </View>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- Hallucinations</Text>
      </View>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- Paralysis</Text>
      </View>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- Convulsions</Text>
      </View>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- Coma</Text>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
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