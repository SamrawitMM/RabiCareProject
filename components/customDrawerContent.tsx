import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';


export default function CustomDrawerContent(props:any) {

    const {bottom} = useSafeAreaInsets();
    const navigation = useNavigation();

    const closeDrawer = ()=>{
        navigation.dispatch(DrawerActions.closeDrawer())
    }
  return (
    <View
        style={{flex: 1}}
    >
      <DrawerContentScrollView {...props} scrollEnabled={false}>
      <LinearGradient
      colors={['#FF9800', '#F44336']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
    <Text style={styles.text}>RabiCare</Text>
    </LinearGradient>  
        <View style={{padding: 20}}>
            {/* <Image style={{height: 35}} resizeMode='contain' source={require('../assets/images/logo.png')} /> */}
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* <Pressable onPress={closeDrawer} style={{padding: 20, paddingBottom: bottom+10}}>
        <Text>Logout</Text>
      </Pressable> */}
    </View>
  )
}

const styles = StyleSheet.create({
    gradient: {
      margin: 30,
      padding: 10,
      borderRadius: 10,
    },
    text: {
      fontSize: 24,
      color: 'white',
      textAlign: 'center',
    },
  });