import {
  View, Text, Button, StyleSheet, SafeAreaView, FlatList, Image
} from 'react-native'
import React from 'react'
import { en, am, or } from '../../i18n/supportedLanguage';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-virtualized-view'



const translations = { en, am, or };


export default function Classification() {

  const language = useSelector(state => state.language.language);
  const { cla_title, cla_description1,
    cla_description2, cla_description3, cla_description4,
    cla_description5, cla_description6, cla_description7 } = translations[language];

  return (

    <View style={{ backgroundColor: "#000000" }}>
      <View style={{ backgroundColor: "#000000", width: "100%", height: "40%", alignItems: "center", alignContent: "center", justifyContent: "center" }}>
        <Image source={require('../../assets/quality-logo.png')} style={{ width: 250, height: 250, borderRadius: 50, alignItems: "center", alignContent: "center", justifyContent: "center" }} />
      </View>
      <View style={{ backgroundColor: "#ffffff", width: "100%", height: "60%", borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
        <Text style={styles.title}>{cla_title}</Text>
        <ScrollView>

          <FlatList style={styles.description}
            data={[
              { key: cla_description1 },
              { key: cla_description2 },
              { key: cla_description3 },
              { key: cla_description4 },
              { key: cla_description5 },
              { key: cla_description6 },
              { key: cla_description7 },

            ]}
            renderItem={({ item }) => <Text style={styles.item}>{`\u2023 ${item.key}\n`}</Text>}
          />

        </ScrollView>
      </View>
    </View>


    // <ScrollView style={styles.container}>
    //   <Text style={styles.title}>{cla_title}</Text>

    //   <FlatList style={styles.description}
    //     data={[
    //       { key: cla_description1 },
    //       { key: cla_description2 },
    //       { key: cla_description3 },
    //       { key: cla_description4 },
    //       { key: cla_description5 },
    //       { key: cla_description6 },
    //       { key: cla_description7 },

    //     ]}
    //     renderItem={({ item }) => <Text style={styles.item}>{`\u2023 ${item.key}\n`}</Text>}
    //   />
    // </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {

    padding: 30,
    marginBottom: 35
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333', // Updated text color
    paddingBottom: 20,
    paddingTop: 20,
    marginTop: 17,
    padding: 5

  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555', // Updated text color
    padding: 10

  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333333',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#007bff',
  },

  descriptionText: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 5,
  },
  item: {
    fontSize: 20
  }
});