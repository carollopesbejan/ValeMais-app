import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Splash1, Splash2, Splash3 } from './src/screens/Splash';

export default function App() {
  return (
    <>
      <Splash1 />
      <StatusBar style="auto" />
    </>
  );
}
