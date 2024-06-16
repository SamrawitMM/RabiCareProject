
import React, { useEffect, useState } from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from 'react-redux';
import { en, am, or } from '../../i18n/supportedLanguage';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';
import { Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';



const translations = { en, am, or };

const loadFonts = async () => {
  await Font.loadAsync({
    FontAwesome: require('../../assets/font/FontAwesome.ttf'), // Example path
    // Load other fonts as needed
  });
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const language = useSelector(state => state.language.language);
  const { home_title, home_desc, home_but, cla_title } = translations[language];
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Montserrat_600SemiBold, // Assuming this is the font you want to load
        // Add other fonts as needed
      });
    };

    loadFonts(); // Call the async function
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/quality-logo.png")} style={styles.img} />
      <Text style={styles.title}>{home_title}</Text>
      <Text style={styles.detail}>
        {home_desc}
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate(cla_title)}

      >
        <Text style={styles.text}>{home_but}</Text>
      </TouchableOpacity>
    </View>
  );
};


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
    marginTop: 50,
    backgroundColor: "#3D20B7",
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
