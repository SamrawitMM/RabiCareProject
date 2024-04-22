// import { View, Text, Button, StyleSheet, SafeAreaView,
//     ScrollView } from 'react-native'
// import React from 'react'
// import { useNavigation } from 'expo-router'
// import { DrawerActions } from '@react-navigation/native';



// export default function Classification() {
//     const navigation = useNavigation();
//     const openDrawer = ()=>{
//         navigation.dispatch(DrawerActions.openDrawer())
//     }

//   return (
//     <SafeAreaView style={styles.container}>
//     <ScrollView style={styles.scrollView}>
//     <View>
//     <View style={styles.container}>
//       <Text style={styles.title}>Classification of Rabies</Text>
//       <Text style={styles.label}>Domain:</Text>
//       <Text style={styles.value}>Eukaryota</Text>
//       <Text style={styles.description}>
//         <Text style={styles.descriptionText}>
//           Rabies belongs to the domain
//         </Text>{" "}
//         <Text style={styles.value}>Eukaryota</Text>
//         <Text style={styles.descriptionText}>
//           , which includes organisms with cells that contain a nucleus enclosed within membranes.
//         </Text>
//       </Text>

//       <Text style={styles.label}>Kingdom:</Text>
//       <Text style={styles.value}>Animalia</Text>
//       <Text style={styles.description}>
//         <Text style={styles.descriptionText}>
//           Rabies belongs to the kingdom
//         </Text>{" "}
//         <Text style={styles.value}>Animalia</Text>
//         <Text style={styles.descriptionText}>
//           , which falls within the phylum Chordata, which includes animals possessing a notochord, a dorsal nerve cord, pharyngeal slits, an endostyle, and a post-anal tail at some point in their life cycle.
//         </Text>
//       </Text>

//       <Text style={styles.label}>Class:</Text>
//       <Text style={styles.value}>Mammalia</Text>
//       <Text style={styles.description}>
//         <Text style={styles.descriptionText}>
//           Rabies belongs to the Class
//         </Text>{" "}
//         <Text style={styles.value}>Mammalia</Text>
//         <Text style={styles.descriptionText}>
//           , which consists of warm-blooded vertebrates characterized by mammary glands, hair or fur, and typically giving birth to live young.
//         </Text>
//       </Text>

//       <Text style={styles.label}>Order:</Text>
//       <Text style={styles.value}>Carnivora</Text>
//       <Text style={styles.description}>
//         <Text style={styles.descriptionText}>
//           Rabies belongs to the Order
//         </Text>{" "}
//         <Text style={styles.value}>Carnivora</Text>
//         <Text style={styles.descriptionText}>
//           , which primarily adapted for meat-eating, although some species within this order may have omnivorous or herbivorous diets.
//         </Text>
//       </Text>

//       <Text style={styles.label}>Family:</Text>
//       <Text style={styles.value}>Rhabdoviridae</Text>
//       <Text style={styles.description}>
//         <Text style={styles.descriptionText}>
//           Rabies belongs to the Family
//         </Text>{" "}
//         <Text style={styles.value}>Rhabdoviridae</Text>
//         <Text style={styles.descriptionText}>
//           , which consists of negative-sense, single-stranded RNA viruses. These viruses infect a wide range of hosts, including mammals, birds, fish, insects, and plants.
//         </Text>
//       </Text>

//       <Text style={styles.label}>Genus:</Text>
//       <Text style={styles.value}>Lyssavirus</Text>
//       <Text style={styles.description}>
//         <Text style={styles.descriptionText}>
//           Rabies belongs to the Genus
//         </Text>{" "}
//         <Text style={styles.value}>Lyssavirus</Text>
//         <Text style={styles.descriptionText}>
//           , which includes several other viruses besides the classical rabies virus (Rabies lyssavirus). These viruses share similar characteristics and can cause rabies-like diseases in various animal species.
//         </Text>
//       </Text>

//       <Text style={styles.label}>Species:</Text>
//       <Text style={styles.value}>Rabies lyssavirus</Text>
//       <Text style={styles.description}>
//         <Text style={styles.descriptionText}>
//           Rabies belongs to the Species
//         </Text>{" "}
//         <Text style={styles.value}>Rabies lyssavirus</Text>
//         <Text style={styles.descriptionText}>
//           , which is the species responsible for causing rabies in mammals, including humans.
//         </Text>
//       </Text>
     
//     </View>     
//     </View>
//     </ScrollView>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//     //   flex: 1,
//     //   padding: 20,
//     // //   backgroundColor: 'black',
//     padding:20
//     },
//     title: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       marginBottom: 10,
//       textAlign: 'center',
//       color: '#333', // Updated text color
//     },
//     description: {
//       fontSize: 16,
//       lineHeight: 24,
//       color: '#555', // Updated text color
//     },
//     label: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 5,
//         color: '#333333',
//       },
//       value: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 5,
//         color: '#007bff',
//       },
  
//       descriptionText: {
//         fontSize: 16,
//         color: '#666666',
//         marginBottom: 5,
//       },
//   });


// expo add expo-localization i18n-js

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import { en, es, ja } from '../../../i18n/supportedLanguage';
import { useState, useEffect } from 'react';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { Picker } from '@react-native-picker/picker'
import AsyncStorage from "@react-native-async-storage/async-storage";


const languages=['en','ja','es'];

// const getData = async () => {
//   try {
//     let value = await AsyncStorage.getItem('lang');
//     if (value !== null) {
//       // value previously stored
//       // value = value.toString()
//       console.log('here is the value ', value)
//     }
//   } catch (e) {
//     // error reading value
//   }
// };

const getData = async () => {
  try {
    let value = await AsyncStorage.getItem('lang');
    if (value !== null) {
      // value previously stored
      console.log('Here is the value:', value);
      return value; // Return the value
    }
  } catch (e) {
    // Handle error reading value
    console.error('Error reading value:', e);
    throw e; // Rethrow the error
  }
};

export default function Classification() {

  const [lang, setLang] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await AsyncStorage.getItem('lang');
        if (value !== null) {
          // value previously stored
          setLang(value);
          console.log(value, " here is the strored value in lang")
        }
      } catch (error) {
        // Handle error reading value
        console.error('Error:', error);
      }
    };

    fetchData(); // Call the async function
  }, [lang]); // Empty dependency array means this effect runs only once after initial render

  
  let [locale, setLocale] = useState(Localization.locale);
  i18n.fallbacks = true;
  i18n.translations = { en, es, ja };

  console.log(lang, "selected language")

  i18n.locale = "en";


  // console.log("This is from categorization")
  // getData();
  

  return (
    <View style={styles.container}>
      <Text>{lang}</Text>
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
            languages.map(language => <Picker.Item key={language} label={language} value={language}  style={styles.pickerItem}/>)

          }
      </Picker>
      <Text>{i18n.t('appName')}</Text>
      <Text>{i18n.t('welcome')}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
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
    width: 200,
    height: 50,
    marginBottom: 20,
    fontSize: 20
  },
  pickerItem: {
    color: 'blue', // Change the color as needed
    fontSize: 20
  },
});
