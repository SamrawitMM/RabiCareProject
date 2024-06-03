import { Text, StyleSheet, View, Image } from "react-native";

import { en, am, or } from '../../i18n/supportedLanguage';
import { useSelector } from 'react-redux';


const translations = { en, am, or};



export default function Pathogenesis() {
    const language = useSelector(state => state.language.language);
    const { pat_title, pat_description } = translations[language];
  
  return (
    <View style={{backgroundColor:"#000000"}}>
      <View style={{backgroundColor:"#000000", width:"100%", height: "40%", alignItems:"center", alignContent:"center", justifyContent:"center"}}>
      <Image source={require('../../assets/adoctor_image.png')} style={{width:250, height: 250, borderRadius:50, alignItems:"center", alignContent:"center", justifyContent:"center"}} />
    </View>
    <View style={{backgroundColor:"#ffffff",  width:"100%", height: "60%", borderTopLeftRadius:10, borderTopRightRadius:10}}>
      <Text style={styles.title}>{pat_title}</Text>
      <Text style={styles.description}>  
          {pat_description}
      </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    //   padding: 20,
    // //   backgroundColor: 'black',
    padding:20
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
      color: '#333', // Updated text color
    },
    description: {
      fontSize: 16,
      lineHeight: 24,
      color: '#555', // Updated text color
      padding:20
    },
});