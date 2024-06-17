
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { en, am, or } from '../../i18n/supportedLanguage';
import { useSelector } from 'react-redux';

const translations = { en, am, or };

const AboutUsScreen = () => {
  const language = useSelector(state => state.language.language);
  const { about_title, about_desc,
    about_quote, about_contact } = translations[language];

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/quality-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>{about_title}</Text>
      <Text style={styles.description}>
        {about_desc}
      </Text>
      <Text style={styles.quote}>
        {about_quote}
      </Text>
      <Text style={styles.contact}>
        {about_contact}
      </Text>
      <Text> {`\n`} June 2024 </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    marginBottom: 10,
  },
  quote: {
    fontStyle: 'italic',
    marginBottom: 10,
  },
  contact: {
    color: '#888',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',

  },
});

export default AboutUsScreen;
