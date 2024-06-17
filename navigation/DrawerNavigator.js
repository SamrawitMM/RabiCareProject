import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import HomeScreen from '../components/screens/HomeScreen';
import ClinicalSign from '../components/screens/ClinicalSign';
import Host from '../components/screens/HostScreen';
import Incubation from '../components/screens/IncubationScreen';
import Pathogenesis from '../components/screens/PathogenesisScreen';
import Transmission from '../components/screens/TansmissionScreen';
import Treatment from '../components/screens/TreatmentScreen';
import CustomDrawerContent from '../components/common/CustomDrawerContent';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../redux';
import { Picker } from '@react-native-picker/picker';
import AboutUsScreen from '../components/screens/Aboutus';
import HospitalTreatment from '../components/screens/HospitalTreatement';
import { en, am, or } from '../i18n/supportedLanguage';
import Classification from '../components/screens/ClassificationScreen';
import Animal from '../components/screens/AnimalScreen';
import { FontAwesome } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();
const translations = { en, am, or };


const DrawerNavigator = () => {
  const [locale, setLocale] = useState('en');
  const dispatch = useDispatch();
  const languages = ['እንግሊዘኛ', 'አማረኛ', 'ኦሮምኛ'];

  const storeData = (language) => {
    switch (language) {
      case 'እንግሊዘኛ':
        return 'en';
      case 'አማረኛ':
        return 'am';
      case 'ኦሮምኛ':
        return 'or';
      default:
        return 'or';
    }
  };




  const language = useSelector(state => state.language.language);
  const { home_screen, cla_title, pat_title, about_title,
    trans_title, sign_title, hosp_treatement,
    anisym_title, incu_title, treat_title, host_title } = translations[language];

  const languageItems = languages.map((language) => ({
    label: language,
    value: storeData(language),
    key: language,
    icon: () => <FontAwesome name="language" size={20} color="black" />,
  }));


  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        //this will increase the gap b/n the text and logo
        drawerLabelStyle: {
          // marginLeft: 1,
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

                <Picker.Item
                  key={language}
                  label={language}
                  value={storeData(language)}
                  style={styles.pickerItem}
                />
              ))}
            </Picker>
          </View>
        ),
      }}
    >
      <Drawer.Screen
        name={home_screen}
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="home" size={20} color={"#3D20B7"} />
          ),
          title: home_screen.length > 15 ? `${home_screen.substring(0, 15)}...` : home_screen
        }}
      />
      <Drawer.Screen
        name={cla_title}
        component={Classification}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="list-alt" size={20} color={"#3D20B7"} />
          ),
          title: cla_title.length > 15 ? `${cla_title.substring(0, 15)}...` : cla_title,

        }}

      />
      <Drawer.Screen
        name={sign_title}
        component={ClinicalSign}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="heartbeat" size={20} color={"#3D20B7"} />
          ),
          title: sign_title.length > 15 ? `${sign_title.substring(0, 15)}...` : sign_title
        }}
      />
      <Drawer.Screen
        name={host_title}
        component={Host}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="users" size={20} color={"#3D20B7"} />
          ),
          title: host_title.length > 15 ? `${host_title.substring(0, 15)}...` : host_title
        }}
      />
      <Drawer.Screen
        name={incu_title}
        component={Incubation}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="hourglass-half" size={20} color={"#3D20B7"} />
          ),
          title: incu_title.length > 15 ? `${incu_title.substring(0, 15)}...` : incu_title
        }}
      />
      <Drawer.Screen
        name={pat_title}
        component={Pathogenesis}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="stethoscope" size={20} color={"#3D20B7"} />
          ),
          title: pat_title.length > 15 ? `${pat_title.substring(0, 15)}...` : pat_title
        }}
      />
      <Drawer.Screen
        name={anisym_title}
        component={Animal}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="paw" size={20} color={"#3D20B7"} />
          ),
          title: anisym_title.length > 15 ? `${anisym_title.substring(0, 15)}...` : anisym_title
        }}
      />
      <Drawer.Screen
        name={trans_title}
        component={Transmission}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="exchange" size={20} color={"#3D20B7"} />
          ),
          title: trans_title.length > 15 ? `${trans_title.substring(0, 15)}...` : trans_title
        }}
      />
      <Drawer.Screen
        name={treat_title}
        component={Treatment}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="medkit" size={20} color={"#3D20B7"} />
          ),
          title: treat_title.length > 15 ? `${treat_title.substring(0, 15)}...` : treat_title
        }}
      />
      <Drawer.Screen
        name={hosp_treatement}
        component={HospitalTreatment}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="hospital-o" size={20} color={"#3D20B7"} />
          ),
          title: hosp_treatement.length > 15 ? `${hosp_treatement.substring(0, 15)}...` : hosp_treatement
        }}
      />


      <Drawer.Screen
        name={about_title}
        component={AboutUsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="info-circle" size={20} color={"#3D20B7"}
              style={{ marginLeft: "20" }} />
          ),
          title: about_title.length > 15 ? `${about_title.substring(0, 15)}...` : about_title
        }}
        style={{ paddingTop: "40" }}
      />


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
    width: 130,
  },
  pickerItem: {
    color: 'black',
  },
});

export default DrawerNavigator;
