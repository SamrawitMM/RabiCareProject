import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import { en, am, or } from '../../i18n/supportedLanguage';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-virtualized-view'



const translations = { en, am, or };


export default function ClinicalSign() {
  const language = useSelector(state => state.language.language);
  const { sign_title, sign_description1, sign_description2 } = translations[language];

  return (

    <View style={{ backgroundColor: "#000000" }}>
      <View style={{ backgroundColor: "#000000", width: "100%", height: "40%", alignItems: "center", alignContent: "center", justifyContent: "center" }}>
        <Image source={require('../../assets/quality-logo.png')} style={{ width: 250, height: 250, borderRadius: 50, alignItems: "center", alignContent: "center", justifyContent: "center" }} />
      </View>
      <View style={{ backgroundColor: "#ffffff", width: "100%", height: "60%", borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
        <Text style={styles.title}>{sign_title}</Text>
        <ScrollView>


          <FlatList style={styles.description}
            data={[
              { key: sign_description1 },
              { key: sign_description2 },


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
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 17,
    textAlign: 'center',
    color: '#333', // Updated text color
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