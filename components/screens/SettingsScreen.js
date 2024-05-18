// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Header from '../common/Header';

// const SettingsScreen = () => (
//   <View style={styles.container}>
//     <Header title="Settings" />
//     <Text>Settings Screen</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default SettingsScreen;


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../common/Header';

const translations = {
  en: { settings: 'Settings Screen' },
  es: { settings: 'Pantalla de configuración' },
  fr: { settings: 'Écran des paramètres' },
};

const SettingsScreen = () => {
  const language = useSelector(state => state.language.language);
  const { settings } = translations[language];

  return (
    <View style={styles.container}>
      <Header title="Settings" />
      <Text>{settings}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
