import { View, Text, Button, StyleSheet, SafeAreaView,
    ScrollView, Image } from 'react-native'
import React from 'react'


import { en, am, or } from '../../i18n/supportedLanguage';
import { useSelector } from 'react-redux';


const translations = { en, am, or};




export default function Animal() {
    const language = useSelector(state => state.language.language);
    const { anisym_title, anisym_description } = translations[language];
  

  return (

//     <View style={{backgroundColor:"#000000"}}>
//     <View style={{backgroundColor:"#000000", width:"100%", height: "40%", alignItems:"center", alignContent:"center", justifyContent:"center"}}>
//       <Image source={require('../../assets/adoctor_image.png')} style={{width:250, height: 250, borderRadius:50, alignItems:"center", alignContent:"center", justifyContent:"center"}} />
//     </View>
//     <View style={{backgroundColor:"#ffffff",  width:"100%", height: "60%", borderTopLeftRadius:50, borderTopRightRadius:50}}>
//     <Text style={styles.title}>{sign_title}</Text>
//      <Text style={styles.paragraph}>  
//         {sign_description}
//      </Text>
//     </View>
//   </View>


    <SafeAreaView style={{backgroundColor:"#000000"}}>
    <View style={{backgroundColor:"#000000", width:"100%", height: "40%", alignItems:"center", alignContent:"center", justifyContent:"center"}}>
      <Image source={require('../../assets/adoctor_image.png')} style={{width:250, height: 250, borderRadius:50, alignItems:"center", alignContent:"center", justifyContent:"center"}} />
    </View>
    <ScrollView style={{backgroundColor:"#ffffff",  width:"100%", height: "60%", borderTopLeftRadius:10, borderTopRightRadius:10}}>
    <View style={styles.container}>
      <Text style={styles.title}>{anisym_title}:</Text>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- {anisym_description[0]}</Text>
      </View>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- {anisym_description[1]}</Text>
      </View>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- {anisym_description[2]}</Text>
      </View>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- {anisym_description[3]}</Text>
      </View>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- {anisym_description[4]}</Text>
      </View>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- {anisym_description[5]}</Text>
      </View>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- {anisym_description[6]}</Text>
      </View>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- {anisym_description[7]}</Text>
      </View>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- {anisym_description[8]}</Text>
      </View>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>- {anisym_description[9]}</Text>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  bullet: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  bulletText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#666666',
  },
});