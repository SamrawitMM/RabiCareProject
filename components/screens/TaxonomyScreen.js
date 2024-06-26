import { View, Text, Button, StyleSheet, Image } from 'react-native'
import React from 'react'
import { en, am, or } from '../../i18n/supportedLanguage';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';


const translations = { en, am, or };

export default function Taxonomy() {
  const language = useSelector(state => state.language.language);
  const { tax_title, tax_description } = translations[language];


  return (
    <View style={{ backgroundColor: "#000000" }}>
      <View style={{ backgroundColor: "#000000", width: "100%", height: "40%", alignItems: "center", alignContent: "center", justifyContent: "center" }}>
        <Image source={require('../../assets/quality-logo.png')} style={{ width: 250, height: 250, borderRadius: 50, alignItems: "center", alignContent: "center", justifyContent: "center" }} />
      </View>
      <View style={{ backgroundColor: "#ffffff", width: "100%", height: "60%", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
        <Text style={styles.title}>{tax_title}</Text>
        <ScrollView>
          <Text style={styles.description}>
            {tax_description}
          </Text>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    //   padding: 20,
    // //   backgroundColor: 'black',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333', // Updated text color
    marginTop: 17,
    padding: 5


  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555', // Updated text color
    padding: 20
  },
});