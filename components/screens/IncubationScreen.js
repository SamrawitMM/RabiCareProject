import { Text, StyleSheet, View,Image, FlatList } from "react-native";


import { en, am, or } from '../../i18n/supportedLanguage';
import { useSelector } from 'react-redux';
// import { ScrollView } from "react-native-gesture-handler";
import { ScrollView } from 'react-native-virtualized-view'


const translations = { en, am, or};




export default function Incubation() {
    const language = useSelector(state => state.language.language);
    const { incu_title, incu_description, incu_description1,
      incu_description2, incu_description3, incu_description4,
      incu_description5, incu_description6 } = translations[language];
  
  return (
    <View style={{backgroundColor:"#000000"}}>
    <View style={{backgroundColor:"#000000", width:"100%", height: "40%", alignItems:"center", alignContent:"center", justifyContent:"center"}}>
      <Image source={require('../../assets/adoctor_image.png')} style={{width:250, height: 250, borderRadius:50, alignItems:"center", alignContent:"center", justifyContent:"center"}} />
    </View>
    <View style={{backgroundColor:"#ffffff",  width:"100%", height: "60%", borderTopLeftRadius:50, borderTopRightRadius:50}}>
    <Text style={styles.title}>{incu_title}</Text>
    <ScrollView>


     <FlatList style={styles.description}
        data={[
          { key: incu_description },
          { key: incu_description1 },
          { key: incu_description2 },
          { key: incu_description3 },
          { key: incu_description4 },
          { key: incu_description5 },
          { key: incu_description6 },
     


        ]}
        renderItem={({ item }) => <Text style={styles.item}>{`\u2023 ${item.key}\n`}</Text>}
      />
     </ScrollView>
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
      paddingTop:10,
      textAlign: 'center',
      color: '#333', // Updated text color
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#555', // Updated text color
        padding: 20
    },
    paragraph:{
      paddingLeft:10,
      paddingRight:10,
      marginLeft:12,

    },
    item: {
      fontSize: 20
    }
});