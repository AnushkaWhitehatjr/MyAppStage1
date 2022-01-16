import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import RfidTagScreen from './screens/RfidTagScreen';
import {createSwitchNavigator} from 'react-navigation';

const AppSwitchNavigator = createSwitchNavigator({
  Screen1:HomeScreen,
  Screen2:RfidTagScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}



consteSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
