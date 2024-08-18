import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/routes'; // Certifique-se de usar export default

export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}