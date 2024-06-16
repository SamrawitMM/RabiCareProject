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

