import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Splash1, Splash2, Splash3 } from './src/screens/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeSemLogin } from './src/screens/HomeSemLogin';
import { TelaCadastro } from './src/screens/TelaCadastro';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme/theme';

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Splash1" component={Splash1} options={{ headerShown: false }}/>
    //     <Stack.Screen name="Splash2" component={Splash2} options={{ headerShown: false }}/>
    //     <Stack.Screen name="Splash3" component={Splash3} options={{ headerShown: false }}/>
    //     <Stack.Screen name="HomeSemLogin" component={HomeSemLogin} options={{ headerShown: false }}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <ThemeProvider theme={theme}>
      <TelaCadastro/>
    </ThemeProvider>
  );
}

export default App;