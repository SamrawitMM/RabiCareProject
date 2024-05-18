// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Header from '../common/Header';

// const ProfileScreen = () => (
//   <View style={styles.container}>
//     <Header title="Profile" />
//     <Text>Profile Screen</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default ProfileScreen;


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../common/Header';

const translations = {
  en: { welcome: 'Welcome to Home Screen' },
  es: { welcome: 'Bienvenido a la pantalla de inicio' },
  fr: { welcome: 'Bienvenue sur l\'écran d\'accueil' },
};

const HomeScreen = () => {
  const language = useSelector(state => state.language.language);
  const { welcome } = translations[language];

  return (
    <View style={styles.container}>
      <Header title="Home" />
      <Text>{welcome}</Text>
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

export default HomeScreen;
