// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

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





// import React from 'react';
// import AppNavigator from './navigation/AppNavigator';

// export default function App() {
//   return <AppNavigator />;
// }


// import 'react-native-gesture-handler'; // Ensure this is at the top
// import { registerRootComponent } from 'expo';
// import AppNavigator from './navigation/AppNavigator';
// import 'react-native-reanimated'; // Ensure Reanimated is imported

// const App = () => {
//   return <AppNavigator />;
// };

// export default App;

// // Register the main component with the app registry
// registerRootComponent(App);


import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import { store } from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;

registerRootComponent(App);

