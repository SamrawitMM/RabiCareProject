import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import * as Localization from 'expo-localization';
import { i18n } from './i18n/i18n'

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


export default function App() {
  let [locale, setLocale] = useState(Localization.locale);
  i18n.fallbacks = true;
  i18n.translations = I18n;
  i18n.locale = locale;

  return (
    <View style={styles.container}>
      { locale !== "en" ? <Button title="Switch to English" onPress={() => setLocale("en")} /> : undefined }
      { locale !== "es" ? <Button title="Switch to Spanish" onPress={() => setLocale("es")} /> : undefined }
      { locale !== "ja" ? <Button title="Switch to Japanese" onPress={() => setLocale("ja")} /> : undefined }
      <Text>{i18n.t('appName')}</Text>
      <Text>{i18n.t('welcome')}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
