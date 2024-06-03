import { Text, StyleSheet, View , Image, FlatList} from "react-native";
import { en, am, or } from '../../i18n/supportedLanguage';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-virtualized-view'


const translations = { en, am, or};



export default function Host() {
    const language = useSelector(state => state.language.language);
    const { host_title, host_description, host_description1, host_description2 } = translations[language];
  
  return (
    <View style={{backgroundColor:"#000000"}}>
    <View style={{backgroundColor:"#000000", width:"100%", height: "40%", alignItems:"center", alignContent:"center", justifyContent:"center"}}>
      <Image source={require('../../assets/adoctor_image.png')} style={{width:250, height: 250, borderRadius:50, alignItems:"center", alignContent:"center", justifyContent:"center"}} />
    </View>
    <View style={{backgroundColor:"#ffffff",  width:"100%", height: "60%", borderTopLeftRadius:50, borderTopRightRadius:50}}>
    <Text style={styles.title}>{host_title}</Text>
    <ScrollView>


     <FlatList style={styles.description}
        data={[
          { key: host_description },
          { key: host_description1 },
          { key: host_description2 },
      


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
      textAlign: 'center',
      color: '#333', // Updated text color
    },
    description: {
      fontSize: 16,
      lineHeight: 24,
      color: '#555', // Updated text color
      padding: 20
    },

  item: {
    fontSize: 20
  }
});