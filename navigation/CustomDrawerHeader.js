import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LanguagePicker from '../components/common/LanguagePicker';

const CustomDrawerHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>App Navigation</Text>
      <LanguagePicker />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomDrawerHeader;
