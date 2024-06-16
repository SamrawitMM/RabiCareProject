import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import { en, am, or } from '../../i18n/supportedLanguage';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-virtualized-view'



const translations = { en, am, or };


export default function Transmission() {
  const language = useSelector(state => state.language.language);
  const { trans_title, trans_description1, trans_description2, trans_description3, trans_description4, trans_description5 } = translations[language];

  const descriptions = [
    { key: trans_description1 },
    { key: trans_description2 },
    { key: trans_description3 },
    { key: trans_description4 },
    { key: trans_description5 },
  ];

  // Filter out empty or undefined descriptions
  const filteredDescriptions = descriptions.filter(item => typeof item.key === 'string' && item.key.trim().length > 0);

  console.log(filteredDescriptions)

  return (
    <ScrollView style={styles.container}>

      <View style={{ backgroundColor: "#000000" }}>
        <View style={{ backgroundColor: "#000000", alignItems: "center", alignContent: "center", justifyContent: "center" }}>
          <Image source={require('../../assets/quality-logo.png')} style={{ width: 250, height: 250, borderRadius: 50, alignItems: "center", alignContent: "center", justifyContent: "center", marginTop: 20 }} />
        </View>
        <Text style={styles.title}>{trans_title}</Text>


        <FlatList
          style={styles.description}
          data={filteredDescriptions}
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
    marginTop: 17,
    padding: 5


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
  paragraph: {
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 12,
    color: '#fff2ee',
    marginTop: 10,

  },
  item: {
    color: 'white',
    fontSize: 20
  }
});