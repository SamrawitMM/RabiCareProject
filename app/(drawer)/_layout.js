// import { Drawer } from "expo-router";
import { Drawer } from 'expo-router/drawer';
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import CustomDrawerContent from '../../components/customDrawerContent';
import { StatusBar } from 'expo-status-bar';
import { en, es, ja } from '../../i18n/supportedLanguage';
import { useState, useEffect } from 'react';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { Picker } from '@react-native-picker/picker'
import AsyncStorage from "@react-native-async-storage/async-storage";

const languages=['en','ja','es'];

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('lang', value);
  } catch (e) {
    // saving error

  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('lang');
    if (value !== null) {
      // value previously stored
      console.log('here is the value ', value)
    }
  } catch (e) {
    // error reading value
  }
};

export default function DrawerLayout() {
  let [locale, setLocale] = useState(Localization.locale);
  i18n.fallbacks = true;
  i18n.translations = { en, es, ja };
  i18n.locale = locale;

  // storeData('es');
  // getData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await AsyncStorage.getItem('lang');
        if (value !== null) {
          // value previously stored
          setLocale(value);
          console.log(value, " here is the strored value in lang")
        }
      } catch (error) {
        // Handle error reading value
        console.error('Error:', error);
      }
    };

    fetchData(); // Call the async function
  }, [locale]); // Empty dependency array means this effect runs only once after initial render


  return (
    <>
  
          
          {/* <Drawer
      screenOptions={{ headerShown: true}}
    > */}
    <Drawer
        screenOptions={{
            drawerLabelStyle: {
                marginLeft: 20
            },
            headerStyle: {
              height: 70, // Specify the height of your custom header
            },
            headerRight: () =>   <View style={styles.container}>
            {/* { locale !== "en" ? <Button title="Switch to English" onPress={() => setLocale("en")} /> : undefined }
            { locale !== "es" ? <Button title="Switch to Spanish" onPress={() => setLocale("es")} /> : undefined }
            { locale !== "ja" ? <Button title="Switch to Japanese" onPress={() => setLocale("ja")} /> : undefined } */}
            {/* <Picker
              selectedValue={locale}
              onValueChange={(itemValue, itemIndex) => setLocale(itemValue)}
            >
              <Picker.Item label="Switch to English" value="en" />
              <Picker.Item label="Switch to Spanish" value="es" />
              <Picker.Item label="Switch to Japanese" value="ja" />
            </Picker> */}
             <Picker
              itemStyle={{ color: "black" }}
              style={styles.pickerStyles}
              selectedValue={locale}
              onValueChange={(itemValue) => setLocale(itemValue)}
            >
              {/* <Picker.Item label="Switch to English" value="en" />
              <Picker.Item label="Switch to Spanish" value="es" />
              <Picker.Item label="Switch to Japanese" value="ja" /> */}
      
              {
                  languages.map(language => <Picker.Item key={language} label={language} value={storeData(language)}  style={styles.pickerItem}/>)
                }
            </Picker>
            {/* <Text>{i18n.t('appName')}</Text>
            <Text>{i18n.t('welcome')}</Text>
            <StatusBar style="auto" /> */}
          </View>,

            // drawerActiveBackgroundColor: 'gray',
            // drawerActiveTintColor: 'white',
            // drawerInactiveTintColor: 'white'
        }}
        drawerContent={CustomDrawerContent}
    >
       {/* <LinearGradient
      colors={['#FF9800', '#F44336']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
    <Text style={styles.text}>RabiCare</Text>
    </LinearGradient>   */}

     <Drawer.Screen
        name="Categorization"
        options={{
          drawerLabel: "Categorization",
          title: "Categorization",

        }}
    />

    <Drawer.Screen
        name="Pathogenesis"
        options={{
          drawerLabel: "Pathogenesis",
          title: "Pathogenesis",

        }}
    />

    <Drawer.Screen
        name="Host"
        options={{
          drawerLabel: "Host",
          title: "Host",

        }}
    />

    <Drawer.Screen
        name="Transmission"
        options={{
          drawerLabel: "Transmission",
          title: "Transmission",

        }}
    />

    <Drawer.Screen
        name="Incubation"
        options={{
          drawerLabel: "Incubation",
          title: "Incubation",

        }}
    />
   
   <Drawer.Screen
        name="Symptom"
        options={{
          drawerLabel: "Symptom",
          title: "Symptom",

        }}
    />

    <Drawer.Screen
        name="Treatment"
        options={{
          drawerLabel: "Treatment",
          title: "Treatment",

        }}
    />

  <Drawer.Screen
        name="ClinicalSign"
        options={{
          drawerLabel: "Clinical Sign",
          title: "Clinical Sign",

        }}
    />
      <Drawer.Screen
        name="home"
        options={{
          drawerItemStyle: { display: 'none' },
          drawerLabel: "Home",
          title: "Home",

        }}
      />
      {/* /// new code below /// */}
      <Drawer.Screen
        name="settings"
        options={{
          drawerItemStyle: { display: 'none' },
          drawerLabel: "Settings",
          title: "Settings",
        }}
      />
    </Drawer>
    </>
  );
}

const styles = StyleSheet.create({
  gradient: {
    margin: 30,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    // fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerStyles:{
    // width:'70%',
    backgroundColor:'gray',
    color:'yellow',
    width: 100,
    height: 50,
    margin: 20,
    fontSize: 20
  },
  pickerItem: {
    color: 'blue', // Change the color as needed
    fontSize: 20
  },
  // headline: {
  //   textAlign: 'right', // <-- the magic
  //   fontWeight: 'bold',
  //   fontSize: 18,
  //   marginTop: 10,
  //   width: 200,
  //   backgroundColor: 'yellow',
  //   marginBottom: -5
  // }
});