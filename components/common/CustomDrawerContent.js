import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, StyleSheet, Image } from 'react-native';

const CustomDrawerContent = (props) => {

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Image source={require('../../assets/quality-logo.png')} style={{ width: 127, height: 127, borderRadius: 50, alignItems: "center", alignContent: "center", justifyContent: "center" }} />
        <Text style={styles.drawerHeaderText}>RabiCare</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    height: 150,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomDrawerContent;
