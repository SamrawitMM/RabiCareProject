import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import HomeScreen from '../components/screens/HomeScreen';
import ProfileScreen from '../components/screens/ProfileScreen';
import SettingsScreen from '../components/screens/SettingsScreen';
import CustomDrawerHeader from './CustomDrawerHeader';
import LanguagePicker from '../components/common/LanguagePicker';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <CustomDrawerHeader />
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

const DrawerNavigator = () => (

  <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
  <Drawer.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          headerRight: () => <LanguagePicker />
        }}
      />    <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
