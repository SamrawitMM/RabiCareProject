import { Text, StyleSheet, View, Image, Icon, ImageBackground, TouchableOpacity, FlatList } from "react-native";
import { en, am, or } from '../../i18n/supportedLanguage';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-virtualized-view'


const translations = { en, am, or };

export default function Treatment() {
  const language = useSelector(state => state.language.language);
  const { treat_title, treat_description, treat_description1, treat_description2, treat_description3, treat_description4, treat_description5, treat_description6, treat_description7 } = translations[language];


  return (
    <View style={{ backgroundColor: "#000000" }}>
      <View style={{ backgroundColor: "#000000", width: "100%", height: "40%", alignItems: "center", alignContent: "center", justifyContent: "center" }}>
        <Image source={require('../../assets/quality-logo.png')} style={{ width: 250, height: 250, borderRadius: 50, alignItems: "center", alignContent: "center", justifyContent: "center" }} />
      </View>
      <View style={{ backgroundColor: "#ffffff", width: "100%", height: "60%", borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
        <Text style={styles.title}>{treat_title}</Text>
        <ScrollView>


          <FlatList style={styles.description}
            data={[
              { key: treat_description },
              { key: treat_description1 },
              { key: treat_description2 },
              { key: treat_description3 },
              { key: treat_description4 },
              { key: treat_description5 },
              { key: treat_description6 },
              { key: treat_description7 },


            ]}
            renderItem={({ item }) => <Text style={styles.item}>{`${item.key}\n`}</Text>}
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
    color: 'black', // Updated text color
    marginTop: 17,
    padding: 5


  },
  paragraph: {
    color: '#fff2ee',
    textAlign: "left",
    justifyContent: "center",
    fontSize: 14,
    marginTop: 10,

  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    // Updated text color
    padding: 20
  },
  img: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },

  item: {
    fontSize: 20
  }
});