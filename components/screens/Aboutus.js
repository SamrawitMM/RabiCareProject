
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/golden-retriever-dog793.logowik.com.webp')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        Our mission is to raise awareness about rabies and promote preventive
        measures to protect both humans and animals.
      </Text>
      <Text style={styles.quote}>
        "Together, we can create a world free from the fear of rabies."
      </Text>
      <Text style={styles.contact}>
        For more information, contact us at: info@rabiesawareness.org
      </Text>
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
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
  quote: {
    fontStyle: 'italic',
    marginBottom: 20,
  },
  contact: {
    color: '#888',
  },
});

export default AboutUsScreen;
