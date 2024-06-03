import {
  View, Text, Button, StyleSheet, SafeAreaView, FlatList
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


    <ScrollView style={styles.container}>
      <Text style={styles.title}>{cla_title}</Text>

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
    paddingTop: 20
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555', // Updated text color
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