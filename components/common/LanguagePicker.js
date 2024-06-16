import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux';
import { Picker } from '@react-native-picker/picker';

const LanguagePicker = () => {
  const dispatch = useDispatch();
  const language = useSelector(state => state.language.language);

  const handleLanguageChange = (value) => {
    dispatch(setLanguage(value));
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={language}
        style={styles.picker}
        onValueChange={handleLanguageChange}
      >
        {/* <Picker.Item label="English" value="en" /> */}
        <Picker.Item label="Amharic" value="am" />
        <Picker.Item label="Afan Oromo" value="or" />
        {/* Add more languages as needed */}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  },
  picker: {
    height: 50,
    width: 150,
  },
});

export default LanguagePicker;
