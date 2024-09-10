import React from 'react';
import { View, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';

import { Splash1, Splash2, Splash3 } from './screens/SplashsScreens';
import { HomeSemLogin } from './screens/HomeSemLogin';
import { HomeLogin } from './screens/HomeLogin';
import { BuscarMapa } from './screens/BuscarMapa';
import { Pedidos } from './screens/Pedidos';
import { Favoritos } from './screens/Favoritos';
import { Perfil } from './screens/Perfil';
import { Configuracoes } from './screens/Configuracoes';
import { Notificacoes } from './screens/Notificacoes';
import { Cupons } from './screens/Cupons';
import { Ajuda } from './screens/Ajuda';
import { TelaCadastro } from './screens/TelaCadastro';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme/theme';
import { TelaLogin } from './screens/TelaLogin';
import { Preferencias } from './screens/TelaPreferencias';
import { AlterarPreferencias } from './screens/AlterarPreferencias';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    position: 'absolute',
                    backgroundColor: '#F3F1F4',
                    borderTopWidth: 0,
                    height: 62,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeLogin}
                options={{ 
                    headerShown: false,
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <Feather name="home" size={24} color={focused ? "#0A0A0A" : "#8A8A8A"} />
                            <Text style={{ color: focused ? '#0A0A0A' : '#8A8A8A', fontSize: 12 }}>Início</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Buscar"
                component={BuscarMapa}
                options={{ 
                    headerShown: false,
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <Feather name="map" size={24} color={focused ? "#0A0A0A" : "#8A8A8A"} />
                            <Text style={{ color: focused ? '#0A0A0A' : '#8A8A8A', fontSize: 12 }}>Buscar</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Pedidos"
                component={Pedidos}
                options={{ 
                    headerShown: false,
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <Feather name="package" size={24} color={focused ? "#0A0A0A" : "#8A8A8A"} />
                            <Text style={{ color: focused ? '#0A0A0A' : '#8A8A8A', fontSize: 12 }}>Pedidos</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Favoritos"
                component={Favoritos}
                options={{ 
                    headerShown: false,
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <Feather name="heart" size={24} color={focused ? "#0A0A0A" : "#8A8A8A"} />
                            <Text style={{ color: focused ? '#0A0A0A' : '#8A8A8A', fontSize: 12 }}>Favoritos</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{ 
                    headerShown: false,
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <Feather name="user" size={24} color={focused ? "#0A0A0A" : "#8A8A8A"} />
                            <Text style={{ color: focused ? '#0A0A0A' : '#8A8A8A', fontSize: 12 }}>Perfil</Text>
                        </View>
                    ),              
                }}
            />
        </Tab.Navigator>
    );
}

function AppRoutes() {
    return (
        <ThemeProvider theme={theme}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash1" component={Splash1} />
                <Stack.Screen name="Splash2" component={Splash2} />
                <Stack.Screen name="Splash3" component={Splash3} />
                <Stack.Screen name='TelaCadastro' component={TelaCadastro} options={{headerShown: false}}/>
                <Stack.Screen name='TelaLogin' component={TelaLogin} options={{headerShown: false}}/>
                <Stack.Screen name='TelaPreferencias' component={Preferencias} options={{headerShown: false}}/>
                <Stack.Screen name="HomeSemLogin" component={HomeSemLogin} />
                <Stack.Screen name="Configuracoes" component={Configuracoes} />
                <Stack.Screen name="Notificacoes" component={Notificacoes} />
                <Stack.Screen name="Cupons" component={Cupons} />
                <Stack.Screen name="AlterarPreferencias" component={AlterarPreferencias} />
                <Stack.Screen name="Ajuda" component={Ajuda} />
                <Stack.Screen name="Main" component={TabRoutes} />
            </Stack.Navigator>
        </ThemeProvider>
    );
}

export default AppRoutes;