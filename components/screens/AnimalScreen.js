import { View, Text, Button, StyleSheet, SafeAreaView,
    FlatList, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-virtualized-view'


import { en, am, or } from '../../i18n/supportedLanguage';
import { useSelector } from 'react-redux';


const translations = { en, am, or};




export default function Animal() {
    const language = useSelector(state => state.language.language);
    const { anisym_title, anisym_description } = translations[language];
  

  return (
    <View style={{backgroundColor:"#000000"}}>
    <View style={{backgroundColor:"#000000", width:"100%", height: "40%", alignItems:"center", alignContent:"center", justifyContent:"center"}}>
      <Image source={require('../../assets/adoctor_image.png')} style={{width:250, height: 250, borderRadius:50, alignItems:"center", alignContent:"center", justifyContent:"center"}} />
    </View>
    <View style={{backgroundColor:"#ffffff",  width:"100%", height: "60%", borderTopLeftRadius:50, borderTopRightRadius:50}}>
    <Text style={styles.title}>{anisym_title}</Text>
    <ScrollView>


     <FlatList style={styles.description}
        data={[
          { key: anisym_description[0] },
          { key: anisym_description[1] },
          { key: anisym_description[2] },
          { key: anisym_description[3] },
          { key: anisym_description[4] },
          { key: anisym_description[5] },
          { key: anisym_description[6] },
     


        ]}
        renderItem={({ item }) => <Text style={styles.item}>{`\u2023 ${item.key}\n`}</Text>}
      />
     </ScrollView>
    </View>
  </View>
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
    margin: 20,
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
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555', // Updated text color
    padding:20
  },
  paragraph:{
    paddingLeft:10,
    paddingRight:10,
    marginLeft:12,
    marginBottom: 40

  },
  item: {
    fontSize: 20
  }
});