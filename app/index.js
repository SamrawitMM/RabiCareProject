import { Redirect } from 'expo-router';
import { Text } from 'react-native';

export default function Page() {
  return <Redirect href={"/(drawer)/home"} />;
}

// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import I18n from '../i18n/i18n';

// export default function App() {
//   const handlePress = () => {
//     alert(I18n.t('greeting'));
//   };

//   return (
//     <View>
//       <Text>{I18n.t('welcome')}</Text>
//       <Button title={I18n.t('buttonText')} onPress={handlePress} />
//     </View>
//   );
// }