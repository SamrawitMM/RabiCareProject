// import React from 'react';
// import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
// import { Drawer } from 'expo-router/drawer';
// import HomeScreen from '../components/screens/HomeScreen';
// import ProfileScreen from '../components/screens/ProfileScreen';
// import SettingsScreen from '../components/screens/SettingsScreen';
// import CustomDrawerHeader from './CustomDrawerHeader';
// import LanguagePicker from '../components/common/LanguagePicker';

// const Drawer = createDrawerNavigator();

// const CustomDrawerContent = (props) => (
//   <DrawerContentScrollView {...props}>
//     <CustomDrawerHeader />
//     <DrawerItemList {...props} />
//   </DrawerContentScrollView>
// );

// const DrawerNavigator = () => (

//   <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
//   <Drawer.Screen 
//         name="Home" 
//         component={HomeScreen}
//         options={{
//           headerRight: () => <LanguagePicker />
//         }}
//       />    <Drawer.Screen name="Profile" component={ProfileScreen} />
//     <Drawer.Screen name="Settings" component={SettingsScreen} />
//   </Drawer.Navigator>
// );

// export default DrawerNavigator;


import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import HomeScreen from '../components/screens/HomeScreen';
import ProfileScreen from '../components/screens/ProfileScreen';
import SettingsScreen from '../components/screens/SettingsScreen';
import TabNavigator from '../components/screens/CategorizationScreen';
import ClinicalSign from '../components/screens/ClinicalSign';
import Host from '../components/screens/HostScreen';
import Incubation from '../components/screens/IncubationScreen';
import Pathogenesis from '../components/screens/PathogenesisScreen';
import SymptomTabNavigator from '../components/screens/SymptomScreen';
import Transmission from '../components/screens/TansmissionScreen';
import Treatment from '../components/screens/TreatmentScreen';
import CustomDrawerContent from '../components/common/CustomDrawerContent';
import LanguagePicker from '../components/common/LanguagePicker';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../redux';
import { Picker } from '@react-native-picker/picker';
import Human from '../components/screens/HumanScreen';
import AboutUsScreen from '../components/screens/Aboutus';
import HospitalTreatment from '../components/screens/HospitalTreatement';
import { en, am, or } from '../i18n/supportedLanguage';
import Classification from '../components/screens/ClassificationScreen';
import Animal from '../components/screens/AnimalScreen';

const Drawer = createDrawerNavigator();
const translations = { en, am, or };


const DrawerNavigator = () => {
  const [locale, setLocale] = useState('en');
  const dispatch = useDispatch();
  const languages = ['English', 'Amharic', 'Afan Oromo'];

  const storeData = (language) => {
    switch(language) {
      case 'English':
        return 'en';
      case 'Amharic':
        return 'am';
      case 'Afan Oromo':
        return 'or';
      default:
        return 'en';
    }
  };


  const language = useSelector(state => state.language.language);
  const { home_screen, cla_title , pat_title, about_title,
    trans_title, sign_title, hosp_treatement,
    anisym_title, incu_title, treat_title, host_title } = translations[language];


  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerLabelStyle: {
          marginLeft: 20,
        },
        headerStyle: {
          height: 70,
        },
        headerRight: () => (
          <View style={styles.container}>
            <Picker
              itemStyle={{ color: 'black' }}
              style={styles.pickerStyles}
              selectedValue={locale}
              onValueChange={(itemValue) => {
                setLocale(itemValue);
                dispatch(setLanguage(itemValue));
              }}
            >
              {languages.map((language) => (
                <Picker.Item key={language} label={language} value={storeData(language)} style={styles.pickerItem} />
              ))}
            </Picker>
          </View>
        ),
      }}
    >
      <Drawer.Screen name={home_screen} component={HomeScreen} />
      {/* <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} /> */}
      {/* <Drawer.Screen name="Categorization" component={TabNavigator} /> */}
      <Drawer.Screen name={cla_title} component={Classification} />
      <Drawer.Screen name={sign_title} component={ClinicalSign} />
      <Drawer.Screen name={host_title} component={Host} />
      <Drawer.Screen name={incu_title} component={Incubation}/>
      <Drawer.Screen name={pat_title} component={Pathogenesis}/>
      {/* <Drawer.Screen name="Symptoms" component={SymptomTabNavigator}/> */}
      <Drawer.Screen name={anisym_title} component={Animal}/>
      {/* <Drawer.Screen name="Human" component={Human}/> */}
      <Drawer.Screen name={trans_title} component={Transmission}/>
      <Drawer.Screen name={treat_title} component={Treatment}/>
      <Drawer.Screen name={hosp_treatement} component={HospitalTreatment}/>


      <Drawer.Screen name={about_title} component={AboutUsScreen}/>


    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 10,
  },
  pickerStyles: {
    height: 50,
    width: 150,
  },
  pickerItem: {
    color: 'black',
  },
});

export default DrawerNavigator;
