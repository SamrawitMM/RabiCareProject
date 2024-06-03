// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Header from '../common/Header';
// import Button from '../common/Button';

// const HomeScreen = ({ navigation }) => (
//   <View style={styles.container}>
//     <Header title="Home" />
//     <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default HomeScreen;

import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from 'react-redux';
import Header from '../common/Header';
import { en, am, or } from '../../i18n/supportedLanguage';
import TabNavigator from "./CategorizationScreen";
import { useNavigation } from '@react-navigation/native';



// const translations = {
//   en: { welcome: 'Welcome to Home Screen' },
//   es: { welcome: 'Bienvenido a la pantalla de inicio' },
//   fr: { welcome: 'Bienvenue sur l\'écran d\'accueil' },
// };

const translations = { en, am, or};

const HomeScreen = () => {
  const navigation = useNavigation();

  const language = useSelector(state => state.language.language);
  const { home_title,  home_desc, home_but } = translations[language];
  // const Home = (props) => {
  //   let [fontsLoaded] = useFonts({
  //     Montserrat_400Regular,
  //     Montserrat_600SemiBold,
  //     Montserrat_700Bold,
  //   });
  // }
    return (
      <View style={styles.container}>
        <Image source={require("../../assets/doctor_image.jpg")} style={styles.img} />
        <Text style={styles.title}>Maxx Scooter</Text>
        <Text style={styles.detail}>
          With an updated motor, and integrated anti-theft tech the maxx scooters
          are custom-tuned for the ultimate riding experience.
        </Text>
        <TouchableOpacity
          style={styles.btn}
          // onPress={() => props.navigation.navigate("Detail")}
          onPress={() =>  navigation.navigate("Categorization")}

        >
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });







const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
  },
  img: {
    height: "50%",
    width: "120%",
    resizeMode: "contain",
  },
  title: {
    color: "#FFF",
    fontFamily: "Montserrat_700Bold",
    fontSize: 30,
    marginTop: 20,
  },
  detail: {
    color: "#FFF",
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 30,
    marginTop: 30,
  },
  btn: {
    marginTop: 80,
    backgroundColor: "#E2443B",
    paddingHorizontal: 140,
    paddingVertical: 10,
    borderRadius: 30,
  },
  text: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 30,
    color: "#FFF",
  },
});

export default HomeScreen;
