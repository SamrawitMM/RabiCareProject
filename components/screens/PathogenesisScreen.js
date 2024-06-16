import { Text, StyleSheet, View, Image, FlatList } from "react-native";

import { en, am, or } from '../../i18n/supportedLanguage';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-virtualized-view'


const translations = { en, am, or };



export default function Pathogenesis() {
  const language = useSelector(state => state.language.language);
  const { pat_title, pat_description, pat_description1,
    pat_description2, pat_description3, pat_description4,
    pat_description5, pat_description6 } = translations[language];

  return (
    <ScrollView style={styles.container}>

      <View style={{ backgroundColor: "#000000" }}>
        <View style={{ backgroundColor: "#000000", alignItems: "center", alignContent: "center", justifyContent: "center" }}>
          <Image source={require('../../assets/quality-logo.png')} style={{ width: 250, height: 250, borderRadius: 50, alignItems: "center", alignContent: "center", justifyContent: "center", marginTop: 20 }} />
        </View>
        <Text style={styles.title}>{pat_title}</Text>

        <FlatList style={styles.description}
          data={[
            { key: pat_description },
            { key: pat_description1 },
            { key: pat_description2 },
            { key: pat_description3 },
            { key: pat_description4 },
            { key: pat_description5 },
            { key: pat_description6 },

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
    // padding:20,
    // marginBottom:35
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
    fontSize: 20,
    lineHeight: 24,
    color: '#555', // Updated text color
    padding: 20,
    // marginBottom: 150

  },
  item: {
    color: 'white',
    fontSize: 20
  }
});