import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import { en, am, or } from '../../i18n/supportedLanguage';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-virtualized-view'



const translations = { en, am, or };


export default function HospitalTreatment() {
  const language = useSelector(state => state.language.language);
  const { hosp_treatement, hosp_description, hosp_description1, hosp_description2, hosp_description3, hosp_description4, hosp_description5, hosp_description6, hosp_description7, hosp_description8 } = translations[language];

  const descriptions = [
    { key: hosp_description },
    { key: hosp_description1 },
    { key: hosp_description2 },
    { key: hosp_description3 },
    { key: hosp_description4 },
    { key: hosp_description5 },
    { key: hosp_description6 },
    { key: hosp_description7 },
    { key: hosp_description8 },
  ];

  // Filter out empty or undefined descriptions
  const filteredDescriptions = descriptions.filter(item => typeof item.key === 'string' && item.key.trim().length > 0);

  console.log(filteredDescriptions)
  return (

    <View style={{ backgroundColor: "#000000" }}>
      <View style={{ backgroundColor: "#000000", width: "100%", height: "40%", alignItems: "center", alignContent: "center", justifyContent: "center" }}>
        <Image source={require('../../assets/quality-logo.png')} style={{ width: 250, height: 250, borderRadius: 50, alignItems: "center", alignContent: "center", justifyContent: "center" }} />
      </View>
      <View style={{ backgroundColor: "#ffffff", width: "100%", height: "60%", borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
        <Text style={styles.title}>{hosp_treatement}</Text>
        <ScrollView>


          <FlatList
            style={styles.description}
            data={filteredDescriptions}
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
  paragraph: {
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 12,
    marginBottom: 40

  },
  item: {
    fontSize: 20
  }
});