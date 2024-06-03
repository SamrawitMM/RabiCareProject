import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import {  TextInput } from 'react-native-gesture-handler';
import { en, am, or } from '../../i18n/supportedLanguage';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-virtualized-view'



const translations = { en, am, or};


export default function Transmission() {
    const language = useSelector(state => state.language.language);
    const { trans_title, trans_description1, trans_description2, trans_description3, trans_description4, trans_description5 } = translations[language];
  
  return (
    <ScrollView  style={styles.container}>

    <View style={{backgroundColor:"#000000"}}>
      <View style={{backgroundColor:"#000000", alignItems:"center", alignContent:"center", justifyContent:"center"}}>
      <Image source={require('../../assets/adoctor_image.png')} style={{width:250, height: 250, borderRadius:50, alignItems:"center", alignContent:"center", justifyContent:"center", marginTop: 20}} />
    </View>

       <FlatList style={styles.description}
        data={[
          { key: trans_description1 },
          { key: trans_description2 },
          { key: trans_description3 },
          { key: trans_description4 },
          { key: trans_description5 },
     

        ]}
        renderItem={({ item }) => <Text style={styles.item}>{`\u2023 ${item.key}\n`}</Text>}
      />
    </View>
    </ScrollView>
 
  );
}

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    //   padding: 20,
    // //   backgroundColor: 'black',
    // padding:20
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
      color: '#fff', // Updated text color
    },
    description: {
      fontSize: 16,
      lineHeight: 24,
      color: '#555', // Updated text color
      padding: 20
    },
    img: {
      height: "100%",
      width: "100%",
      resizeMode: "contain",
    },
    paragraph:{
      paddingLeft:10,
      paddingRight:10,
      marginLeft:12,
      color: '#fff2ee',
      marginTop:10,

    },
    item: {
      color: 'white',
      fontSize: 20
    }
});